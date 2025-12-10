import { motion } from "framer-motion";
import { useState } from "react";
import "../App.css";

interface ContactProps {
  data: {
    name: string;
    email: string;
    message: string;
  };
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onSubmit: () => void;
}

interface ValidationErrors {
  name?: string;
  email?: string;
  message?: string;
}

function Contact({ data, onChange, onSubmit }: ContactProps) {
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateName = (name: string): string | undefined => {
    if (!name.trim()) {
      return "Name is required";
    }
    if (name.trim().length < 2) {
      return "Name must be at least 2 characters";
    }
    if (name.trim().length > 50) {
      return "Name must be less than 50 characters";
    }
    return undefined;
  };

  const validateEmail = (email: string): string | undefined => {
    if (!email.trim()) {
      return "Email is required";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }
    return undefined;
  };

  const validateMessage = (message: string): string | undefined => {
    if (!message.trim()) {
      return "Message is required";
    }
    if (message.trim().length < 10) {
      return "Message must be at least 10 characters";
    }
    if (message.trim().length > 1000) {
      return "Message must be less than 1000 characters";
    }
    return undefined;
  };

  const handleBlur = (field: string) => {
    setTouched({ ...touched, [field]: true });

    let error: string | undefined;
    if (field === "name") {
      error = validateName(data.name);
    } else if (field === "email") {
      error = validateEmail(data.email);
    } else if (field === "message") {
      error = validateMessage(data.message);
    }

    setErrors({ ...errors, [field]: error });
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name } = event.target;
    onChange(event);

    if (touched[name]) {
      let error: string | undefined;
      if (name === "name") {
        error = validateName(event.target.value);
      } else if (name === "email") {
        error = validateEmail(event.target.value);
      } else if (name === "message") {
        error = validateMessage(event.target.value);
      }
      setErrors({ ...errors, [name]: error });
    }
  };

  const handleSubmit = () => {
    const nameError = validateName(data.name);
    const emailError = validateEmail(data.email);
    const messageError = validateMessage(data.message);

    const newErrors: ValidationErrors = {
      name: nameError,
      email: emailError,
      message: messageError,
    };

    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true });

    if (!nameError && !emailError && !messageError) {
      onSubmit();
    }
  };

  return (
    <motion.section
      id="contact"
      className="py-16 px-4 sm:px-12 text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          {/* Name Field */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <label htmlFor="name" className="block mb-2 font-semibold">
              Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className={`w-full px-4 py-2 rounded card-background border ${
                errors.name && touched.name
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-600 focus:border-blue-500"
              } focus:outline-none transition-colors`}
              value={data.name}
              onChange={handleChange}
              onBlur={() => handleBlur("name")}
              aria-invalid={errors.name && touched.name ? "true" : "false"}
              aria-describedby={
                errors.name && touched.name ? "name-error" : undefined
              }
            />
            {errors.name && touched.name && (
              <motion.p
                id="name-error"
                className="text-red-400 text-sm mt-1"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {errors.name}
              </motion.p>
            )}
          </motion.div>

          {/* Email Field */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <label htmlFor="email" className="block mb-2 font-semibold">
              Email <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              className={`w-full px-4 py-2 rounded card-background border ${
                errors.email && touched.email
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-600 focus:border-blue-500"
              } focus:outline-none transition-colors`}
              value={data.email}
              onChange={handleChange}
              onBlur={() => handleBlur("email")}
              aria-invalid={errors.email && touched.email ? "true" : "false"}
              aria-describedby={
                errors.email && touched.email ? "email-error" : undefined
              }
            />
            {errors.email && touched.email && (
              <motion.p
                id="email-error"
                className="text-red-400 text-sm mt-1"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {errors.email}
              </motion.p>
            )}
          </motion.div>

          {/* Message Field */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <label htmlFor="message" className="block mb-2 font-semibold">
              Message <span className="text-red-400">*</span>
            </label>
            <textarea
              id="message"
              rows={5}
              name="message"
              placeholder="Your message"
              className={`w-full px-4 py-2 rounded card-background border ${
                errors.message && touched.message
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-600 focus:border-blue-500"
              } focus:outline-none resize-none transition-colors`}
              value={data.message}
              onChange={handleChange}
              onBlur={() => handleBlur("message")}
              aria-invalid={
                errors.message && touched.message ? "true" : "false"
              }
              aria-describedby={
                errors.message && touched.message ? "message-error" : undefined
              }
            />
            <div className="flex justify-between items-center mt-1">
              {errors.message && touched.message && (
                <motion.p
                  id="message-error"
                  className="text-red-400 text-sm"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {errors.message}
                </motion.p>
              )}
              <p
                className={`text-sm ml-auto ${
                  data.message.length > 1000 ? "text-red-400" : "text-gray-400"
                }`}
              >
                {data.message.length}/1000
              </p>
            </div>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="button"
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors duration-200 px-6 py-3 rounded font-semibold w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            onClick={handleSubmit}
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </motion.section>
  );
}

export default Contact;
