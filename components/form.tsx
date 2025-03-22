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
    <div className="w-full max-w-md space-y-4">
      <div className="relative">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-md" />
        <Input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={handleNameChange}
          className="border-transparent"
        />
      </div>
      
      <div className="relative">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-md" />
        <Input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={handleEmailChange}
          className="border-transparent"
        />
      </div>

      <EnhancedButton
        variant="expandIcon"
        Icon={FaArrowRightLong}
        onClick={handleSubmit}
        iconPlacement="right"
        className="mt-6 w-full bg-[#011640] text-white hover:bg-[#011640]"
        disabled={loading}
      >
        {loading ? "Loading..." : "Join the waitlist"}
      </EnhancedButton>
    </div>
  );
}
