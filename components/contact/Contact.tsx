import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Types
interface FormData {
  name: string;
  email: string;
  message: string;
}

type SubmitStatus = "idle" | "success" | "error";

// Configuration
const API_CONFIG = {
  endpoint: "https://api.web3forms.com/submit",
  accessKey: "da34145c-de79-42cd-912e-545765e4e1c8",
  statusTimeout: 5000,
} as const;

// Pure utility functions
const createSubmissionPayload = (formData: FormData) => ({
  access_key: API_CONFIG.accessKey,
  ...formData,
});

const resetFormData = (): FormData => ({
  name: "",
  email: "",
  message: "",
});

// API service
const submitContactForm = async (formData: FormData): Promise<boolean> => {
  const response = await fetch(API_CONFIG.endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(createSubmissionPayload(formData)),
  });

  const data = await response.json();
  return data.success;
};

// Subcomponents
const SocialLink = ({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group p-3 rounded-lg bg-gray-900 hover:bg-blue-900/30 transition-all duration-300 hover:scale-110"
    aria-label={label}
  >
    <div className="text-gray-400 group-hover:text-blue-400 transition-colors">
      {icon}
    </div>
  </a>
);

const StatusMessage = ({
  status,
  message,
  isError,
}: {
  status: SubmitStatus;
  message: string;
  isError?: boolean;
}) => (
  <AnimatePresence>
    {status !== "idle" && (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className={`p-3 rounded-lg text-sm font-medium ${
          isError
            ? "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400"
            : "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400"
        }`}
      >
        {message}
      </motion.div>
    )}
  </AnimatePresence>
);

const InputField = ({
  id,
  name,
  label,
  type = "text",
  value,
  onChange,
  required = true,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) => (
  <div>
    <label
      htmlFor={id}
      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
    >
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-3 py-1.5 text-sm border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 bg-gray-900 text-white placeholder-gray-400"
    />
  </div>
);

const TextAreaField = ({
  id,
  name,
  label,
  value,
  onChange,
  required = true,
}: {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
}) => (
  <div>
    <label
      htmlFor={id}
      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
    >
      {label}
    </label>
    <textarea
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      rows={4}
      className="w-full px-3 py-2 text-sm border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-900 text-white resize-none transition-all"
    />
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState<FormData>(resetFormData());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

  const handleFormSubmit = async () => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const success = await submitContactForm(formData);
      setSubmitStatus(success ? "success" : "error");

      if (success) {
        setFormData(resetFormData());
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), API_CONFIG.statusTimeout);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (
      e.key === "Enter" &&
      !e.shiftKey &&
      e.target instanceof HTMLInputElement
    ) {
      e.preventDefault();
      handleFormSubmit();
    }
  };

  return (
    <section className="w-full min-h-[80vh] py-8 md:py-16 flex flex-col items-center justify-center bg-bg text-white">
      <div className="w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6 sm:mb-8"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-3xl font-bold text-white mb-2">
            Let's Work Together
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gray-800 rounded-2xl shadow-xl p-5 sm:p-6"
          >
            <div className="space-y-4" onKeyPress={handleKeyPress}>
              <InputField
                id="name"
                name="name"
                label="Full Name"
                value={formData.name}
                onChange={handleInputChange}
              />

              <InputField
                id="email"
                name="email"
                label="Email Address"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
              />

              <TextAreaField
                id="message"
                name="message"
                label="Your Message"
                value={formData.message}
                onChange={handleInputChange}
              />

              <button
                type="button"
                onClick={handleFormSubmit}
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transform hover:-translate-y-0.5"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              <StatusMessage
                status={submitStatus}
                message={
                  submitStatus === "success"
                    ? "✓ Message sent successfully! I'll get back to you soon."
                    : "✗ Failed to send message. Please try again."
                }
                isError={submitStatus === "error"}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-white mb-4">About Me</h2>
              <p className="text-sm sm:text-base leading-relaxed text-gray-400">
                I'm a Full Stack Developer specializing in React Js & Next
                Js.I'm focus on writing clean code and creating user friendly
                designs, helping businesses build reliable, scalable web
                applications that solve real problems and improve user
                experience.
              </p>
            </div>

            <div className="bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-5">
                Connect With Me
              </h3>
              <div className="flex justify-center gap-4">
                <SocialLink
                  href="https://linkedin.com/in/muhammadtanveerabbas"
                  label="LinkedIn Profile"
                  icon={
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  }
                />

                <SocialLink
                  href="https://github.com/muhammadtanveerabbas"
                  label="GitHub Profile"
                  icon={
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"
                      />
                    </svg>
                  }
                />

                <SocialLink
                  href="https://twitter.com/m_tanveerabbas"
                  label="Twitter Profile"
                  icon={
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  }
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
