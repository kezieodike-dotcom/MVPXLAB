import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { auth, db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useState } from 'react';
import { CheckCircle, Send, Loader2 } from 'lucide-react';

enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId: string | undefined;
    email: string | null | undefined;
    emailVerified: boolean | undefined;
    isAnonymous: boolean | undefined;
    tenantId: string | null | undefined;
    providerInfo: {
      providerId: string;
      displayName: string | null;
      email: string | null;
      photoUrl: string | null;
    }[];
  }
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData.map(provider => ({
        providerId: provider.providerId,
        displayName: provider.displayName,
        email: provider.email,
        photoUrl: provider.photoURL
      })) || []
    },
    operationType,
    path
  }
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  return errInfo.error;
}

const submissionSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  ideaDescription: z.string().min(20, "Please provide a more detailed description (min 20 characters)"),
  problemSolved: z.string().min(10, "Please describe the problem this solves"),
  targetAudience: z.string().min(5, "Please describe the target audience"),
  needs: z.enum(["MVP", "Full product", "AI integration", "Not sure"]),
  projectStage: z.enum(["Idea stage", "Early prototype", "Existing product"]),
  budget: z.enum(["Just exploring", "Ready to build", "Funded project"]).optional(),
  pitchDeckUrl: z.string().url("Must be a valid URL").optional().or(z.literal('')),
});

type SubmissionData = z.infer<typeof submissionSchema>;

export default function SubmitIdea() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<SubmissionData>({
    resolver: zodResolver(submissionSchema),
  });

  const onSubmit = async (data: SubmissionData) => {
    setIsSubmitting(true);
    setError(null);
    const path = 'submissions';
    try {
      await addDoc(collection(db, path), {
        ...data,
        status: 'pending',
        createdAt: serverTimestamp(),
      });
      setIsSubmitted(true);
    } catch (err) {
      const errorMessage = handleFirestoreError(err, OperationType.WRITE, path);
      setError(errorMessage || "An unexpected error occurred while submitting.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto py-32 px-4 text-center"
      >
        <div className="w-20 h-20 bg-brand-accent text-white rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle size={40} />
        </div>
        <h1 className="text-4xl font-bold mb-6">Idea Submitted Successfully</h1>
        <p className="text-xl text-gray-500 mb-10">
          Thank you for sharing your vision with us. Our team will review your submission and get back to you within 48–72 hours.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="bg-brand-accent text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-brand-accent-dark transition-all"
        >
          Submit Another Idea
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-24 md:py-32"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight mb-6">
            Tell Us What You <br />
            <span className="text-gray-400">Want to Build</span>
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            Be clear. Be bold. We’re here to build with you.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-12 bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative">
          {/* Basic Info */}
          <section className="space-y-8">
            <h2 className="text-2xl font-bold border-b border-white/10 pb-4">Basic Info</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-gray-400">Full Name</label>
                <input
                  {...register("fullName")}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-accent transition-all outline-none text-white placeholder:text-gray-600"
                  placeholder="John Doe"
                />
                {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-gray-400">Email</label>
                <input
                  {...register("email")}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-accent transition-all outline-none text-white placeholder:text-gray-600"
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider text-gray-400">Company (Optional)</label>
              <input
                {...register("company")}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-accent transition-all outline-none text-white placeholder:text-gray-600"
                placeholder="Acme Corp"
              />
            </div>
          </section>

          {/* Idea Details */}
          <section className="space-y-8">
            <h2 className="text-2xl font-bold border-b border-white/10 pb-4">Idea Details</h2>
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider text-gray-400">What do you want to build?</label>
              <textarea
                {...register("ideaDescription")}
                rows={5}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-accent transition-all outline-none text-white placeholder:text-gray-600"
                placeholder="Describe your vision in detail..."
              />
              {errors.ideaDescription && <p className="text-red-500 text-xs mt-1">{errors.ideaDescription.message}</p>}
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider text-gray-400">What problem does it solve?</label>
              <textarea
                {...register("problemSolved")}
                rows={3}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-accent transition-all outline-none text-white placeholder:text-gray-600"
                placeholder="What pain point are you addressing?"
              />
              {errors.problemSolved && <p className="text-red-500 text-xs mt-1">{errors.problemSolved.message}</p>}
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider text-gray-400">Who is it for?</label>
              <input
                {...register("targetAudience")}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-accent transition-all outline-none text-white placeholder:text-gray-600"
                placeholder="Target audience or user base"
              />
              {errors.targetAudience && <p className="text-red-500 text-xs mt-1">{errors.targetAudience.message}</p>}
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider text-gray-400">What do you need help with?</label>
              <select
                {...register("needs")}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-accent transition-all outline-none text-white placeholder:text-gray-600 appearance-none"
              >
                <option value="MVP" className="bg-neutral-900 text-white">MVP Development</option>
                <option value="Full product" className="bg-neutral-900 text-white">Full Product Build</option>
                <option value="AI integration" className="bg-neutral-900 text-white">AI Integration</option>
                <option value="Not sure" className="bg-neutral-900 text-white">Not Sure Yet</option>
              </select>
              {errors.needs && <p className="text-red-500 text-xs mt-1">{errors.needs.message}</p>}
            </div>
          </section>

          {/* Project Stage & Budget */}
          <section className="space-y-8">
            <h2 className="text-2xl font-bold border-b border-white/10 pb-4">Project Context</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-gray-400">Project Stage</label>
                <select
                  {...register("projectStage")}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-accent transition-all outline-none text-white placeholder:text-gray-600 appearance-none"
                >
                  <option value="Idea stage" className="bg-neutral-900 text-white">Idea Stage</option>
                  <option value="Early prototype" className="bg-neutral-900 text-white">Early Prototype</option>
                  <option value="Existing product" className="bg-neutral-900 text-white">Existing Product</option>
                </select>
                {errors.projectStage && <p className="text-red-500 text-xs mt-1">{errors.projectStage.message}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-gray-400">Budget / Commitment</label>
                <select
                  {...register("budget")}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-accent transition-all outline-none text-white placeholder:text-gray-600 appearance-none"
                >
                  <option value="Just exploring" className="bg-neutral-900 text-white">Just Exploring</option>
                  <option value="Ready to build" className="bg-neutral-900 text-white">Ready to Build</option>
                  <option value="Funded project" className="bg-neutral-900 text-white">Funded Project</option>
                </select>
              </div>
            </div>
          </section>

          {/* File Upload (Pitch Deck) */}
          <section className="space-y-8">
            <h2 className="text-2xl font-bold border-b border-white/10 pb-4">Additional Materials</h2>
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider text-gray-400">Pitch Deck Link (Optional)</label>
              <input
                {...register("pitchDeckUrl")}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-accent transition-all outline-none text-white placeholder:text-gray-600"
                placeholder="Google Drive, Dropbox, Notion, or Figma link"
              />
              <p className="text-xs text-gray-500 mt-1">If you have a slide deck or extensive document, paste the public link here.</p>
              {errors.pitchDeckUrl && <p className="text-red-500 text-xs mt-1">{errors.pitchDeckUrl.message}</p>}
            </div>
          </section>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-brand-accent text-white px-8 py-5 rounded-2xl text-xl font-bold hover:bg-brand-accent-dark transition-all flex items-center justify-center disabled:bg-gray-400 disabled:cursor-not-allowed group"
          >
            {isSubmitting ? (
              <Loader2 className="animate-spin mr-2" size={24} />
            ) : (
              <>
                Submit Idea
                <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </>
            )}
          </button>
        </form>
      </div>
    </motion.div>
  );
}
