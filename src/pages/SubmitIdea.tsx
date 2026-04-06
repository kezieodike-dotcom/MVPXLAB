import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState } from 'react';
import { CheckCircle, Send, Loader2 } from 'lucide-react';

const submissionSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  ideaDescription: z.string().min(10, "Please provide a description of your idea (min 10 characters)"),
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
    try {
      // Send to Email via Formspree (Straight to mvplabx@gmail.com)
      const response = await fetch("https://formspree.io/f/mqegnazg", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          subject: `New Idea Submission from ${data.fullName}`,
          message: `
            Name: ${data.fullName}
            Email: ${data.email}
            Idea: ${data.ideaDescription}
            Pitch Deck URL: ${data.pitchDeckUrl || "None Provided"}
          `
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        const message = errorData.error || errorData.message || `Status ${response.status}: ${response.statusText}`;
        throw new Error(`Formspree Error: ${message}. If this is a new form, please check your email to activate it!`);
      }

      setIsSubmitted(true);
    } catch (err) {
      console.error("Submission error:", err);
      setError(err instanceof Error ? err.message : "An unexpected error occurred. Please try again.");
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
        <h1 className="text-4xl font-bold mb-6">Idea Received!</h1>
        <p className="text-xl text-gray-500 mb-10">
          Thank you for sharing your vision. We've received your submission in our email and our team will get back to you within 48–72 hours.
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
      className="py-16 md:py-32 bg-inherit min-h-screen"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 md:mb-16">
          <h1 className="text-3xl md:text-6xl font-bold tracking-tighter leading-tight mb-4 md:mb-6">
            Tell Us What You <br />
            <span className="text-gray-400">Want to Build</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 leading-relaxed">
            Quickly share your idea and we'll get right back to you.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 md:space-y-8 bg-white/5 backdrop-blur-xl p-6 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Full Name</label>
              <input
                {...register("fullName")}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-accent transition-all outline-none text-white placeholder:text-gray-600"
                placeholder="John Doe"
              />
              {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Email Address</label>
              <input
                {...register("email")}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-accent transition-all outline-none text-white placeholder:text-gray-600"
                placeholder="john@example.com"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-400">What are you building?</label>
            <textarea
              {...register("ideaDescription")}
              rows={5}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-accent transition-all outline-none text-white placeholder:text-gray-600"
              placeholder="Describe your vision in a few sentences..."
            />
            {errors.ideaDescription && <p className="text-red-500 text-xs mt-1">{errors.ideaDescription.message}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Pitch Deck / Link (Optional)</label>
            <input
              {...register("pitchDeckUrl")}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-accent transition-all outline-none text-white placeholder:text-gray-600"
              placeholder="Drive, Dropbox, Notion, etc."
            />
            {errors.pitchDeckUrl && <p className="text-red-500 text-xs mt-1">{errors.pitchDeckUrl.message}</p>}
          </div>

          {error && <p className="text-red-500 text-sm mt-4">{error}</p>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-brand-accent text-white px-8 py-4 md:py-5 rounded-2xl text-lg md:text-xl font-bold hover:bg-brand-accent-dark transition-all flex items-center justify-center disabled:bg-gray-400 disabled:cursor-not-allowed group"
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
