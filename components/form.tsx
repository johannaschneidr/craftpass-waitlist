import Link from "next/link";
import { ChangeEvent } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { Input } from "@/components/ui/input";
import { FaArrowRightLong } from "react-icons/fa6";
import { EnhancedButton } from "@/components/ui/enhanced-btn";
import { containerVariants, itemVariants } from "@/lib/animation-variants";

interface FormProps {
  name: string;
  email: string;
  handleNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  loading: boolean;
}

export default function Form({
  name,
  email,
  handleNameChange,
  handleEmailChange,
  handleSubmit,
  loading,
}: FormProps) {
  return (
    <motion.div
      className="mt-6 flex w-full max-w-[24rem] flex-col gap-2"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <motion.div variants={itemVariants}>
        <Input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={handleNameChange}
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <Input
          type="email"
          placeholder="Your Email Address"
          value={email}
          onChange={handleEmailChange}
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <EnhancedButton
          variant="expandIcon"
          Icon={FaArrowRightLong}
          onClick={handleSubmit}
          iconPlacement="right"
          className="mt-6 w-full bg-[#011640] text-white hover:bg-[#011640]/85"
          disabled={loading}>
          {loading ? "Loading..." : "Join Waitlist!"}
        </EnhancedButton>
      </motion.div>
    </motion.div>
  );
}
