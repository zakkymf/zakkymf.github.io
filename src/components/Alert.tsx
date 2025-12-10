import { useEffect } from "react";
import { motion, AnimatePresence, spring } from "framer-motion";
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react";

type AlertProps = {
  type: "success" | "error" | "warning" | "info";
  title?: string;
  message: string;
  show: boolean;
  onClose?: () => void;
  autoClose?: number;
  position?:
    | "top"
    | "bottom"
    | "top-right"
    | "top-left"
    | "bottom-right"
    | "bottom-left";
};

const Alert = ({
  type = "info",
  title,
  message,
  show = false,
  onClose,
  autoClose = 5000,
  position = "top-right",
}: AlertProps) => {
  useEffect(() => {
    if (show && autoClose) {
      const timer = setTimeout(() => {
        onClose?.();
      }, autoClose);
      return () => clearTimeout(timer);
    }
  }, [show, autoClose, onClose]);

  const icons = {
    success: <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />,
    error: <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6" />,
    warning: <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6" />,
    info: <Info className="w-5 h-5 sm:w-6 sm:h-6" />,
  };

  const colors = {
    success: {
      bg: "rgba(34, 197, 94, 0.15)",
      border: "rgba(34, 197, 94, 0.4)",
      icon: "#22c55e",
      glow: "rgba(34, 197, 94, 0.3)",
    },
    error: {
      bg: "rgba(239, 68, 68, 0.15)",
      border: "rgba(239, 68, 68, 0.4)",
      icon: "#ef4444",
      glow: "rgba(239, 68, 68, 0.3)",
    },
    warning: {
      bg: "rgba(251, 146, 60, 0.15)",
      border: "rgba(251, 146, 60, 0.4)",
      icon: "#fb923c",
      glow: "rgba(251, 146, 60, 0.3)",
    },
    info: {
      bg: "rgba(99, 102, 241, 0.15)",
      border: "rgba(99, 102, 241, 0.4)",
      icon: "#6366f1",
      glow: "rgba(99, 102, 241, 0.3)",
    },
  };

  const positionClasses = {
    top: "top-4 left-4 right-4 sm:left-1/2 sm:right-auto sm:-translate-x-1/2",
    bottom:
      "bottom-4 left-4 right-4 sm:left-1/2 sm:right-auto sm:-translate-x-1/2",
    "top-right": "top-4 left-4 right-4 sm:left-auto sm:right-4",
    "top-left": "top-4 left-4 right-4 sm:right-auto",
    "bottom-right": "bottom-4 left-4 right-4 sm:left-auto sm:right-4",
    "bottom-left": "bottom-4 left-4 right-4 sm:right-auto",
  };

  const slideVariants = {
    initial: position.includes("top")
      ? { opacity: 0, y: -50, scale: 0.9 }
      : { opacity: 0, y: 50, scale: 0.9 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: spring,
        stiffness: 500,
        damping: 30,
      },
    },
    exit: position.includes("top")
      ? { opacity: 0, y: -20, scale: 0.95 }
      : { opacity: 0, y: 20, scale: 0.95 },
  };

  const currentColor = colors[type];

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className={`fixed z-50 w-auto max-w-full sm:max-w-md ${positionClasses[position]}`}
          style={{ pointerEvents: "auto" }}
          variants={slideVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <div
            className="backdrop-blur-xl rounded-xl p-3 sm:p-4 shadow-2xl border mx-auto"
            style={{
              background: currentColor.bg,
              borderColor: currentColor.border,
              boxShadow: `0 8px 32px ${currentColor.glow}, inset 0 1px 0 rgba(255, 255, 255, 0.1)`,
            }}
          >
            <div className="flex items-start gap-2 sm:gap-3">
              <div
                className="flex-shrink-0 mt-0.5"
                style={{ color: currentColor.icon }}
              >
                {icons[type]}
              </div>

              <div className="flex-1 min-w-0">
                {title && (
                  <h4 className="text-white font-semibold mb-1 text-sm sm:text-base leading-tight">
                    {title}
                  </h4>
                )}
                <p className="text-xs sm:text-sm text-white/80 break-words leading-relaxed">
                  {message}
                </p>
              </div>

              <button
                onClick={onClose}
                className="flex-shrink-0 text-white/60 hover:text-white transition-colors duration-200 p-1 hover:bg-white/10 rounded-lg touch-manipulation active:scale-95"
                aria-label="Close alert"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {autoClose && (
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 sm:h-1 rounded-b-xl"
                style={{
                  backgroundColor: currentColor.icon,
                  boxShadow: `0 0 10px ${currentColor.glow}`,
                }}
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: autoClose / 1000, ease: "linear" }}
              />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Alert;
