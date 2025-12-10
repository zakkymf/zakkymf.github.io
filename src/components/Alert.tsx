import { motion, AnimatePresence, spring } from "framer-motion";
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react";
import { useEffect } from "react";

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
    success: <CheckCircle className="w-5 h-5" />,
    error: <AlertCircle className="w-5 h-5" />,
    warning: <AlertTriangle className="w-5 h-5" />,
    info: <Info className="w-5 h-5" />,
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

  const positions = {
    top: { top: "1rem", left: "50%", transform: "translateX(-50%)" },
    bottom: { bottom: "1rem", left: "50%", transform: "translateX(-50%)" },
    "top-right": { top: "1rem", right: "1rem" },
    "top-left": { top: "1rem", left: "1rem" },
    "bottom-right": { bottom: "1rem", right: "1rem" },
    "bottom-left": { bottom: "1rem", left: "1rem" },
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
          className="fixed z-50 max-w-md w-full"
          style={{
            ...positions[position],
            pointerEvents: "auto",
          }}
          variants={slideVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <div
            className="backdrop-blur-xl rounded-xl p-4 shadow-2xl border"
            style={{
              background: currentColor.bg,
              borderColor: currentColor.border,
              boxShadow: `0 8px 32px ${currentColor.glow}, inset 0 1px 0 rgba(255, 255, 255, 0.1)`,
            }}
          >
            <div className="flex items-start gap-3">
              <div
                className="flex-shrink-0 mt-0.5"
                style={{ color: currentColor.icon }}
              >
                {icons[type]}
              </div>

              <div className="flex-1 min-w-0">
                {title && (
                  <h4 className="text-white font-semibold mb-1">{title}</h4>
                )}
                <p className="text-sm text-white/80">{message}</p>
              </div>

              <button
                onClick={onClose}
                className="flex-shrink-0 text-white/60 hover:text-white transition-colors duration-200 p-1 hover:bg-white/10 rounded-lg"
                aria-label="Close alert"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {autoClose && (
              <motion.div
                className="absolute bottom-0 left-0 h-1 rounded-b-xl"
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
