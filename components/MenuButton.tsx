import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type Props = {
  isOpen: boolean;
  setIsOpen: () => void;
  className: string;
};

export default function MenuButton({ isOpen, setIsOpen, className }: Props) {
  return (
    <button
      type="button"
      onClick={() => setIsOpen()}
      className={className}
      aria-expanded={isOpen}
    >
      <motion.span
        className={cn(
          "absolute left-[50%] top-[25%] block h-[3px] w-full -translate-x-[50%] -translate-y-[50%] rounded-sm bg-blue-600 transition-transform duration-300",
          {
            "top-[50%] -translate-x-[50%] -translate-y-[50%] rotate-45": isOpen,
          }
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
      <motion.span
        className={cn(
          "absolute left-[50%] top-[75%] block h-[3px] w-full -translate-x-[50%] -translate-y-[50%] rounded-sm bg-blue-600 transition-transform duration-300",
          {
            "top-[50%] -translate-x-[50%] -translate-y-[50%] -rotate-45":
              isOpen,
          }
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
      <span className="sr-only">{isOpen ? "Close" : "Open"} Menu</span>
    </button>
  );
}
