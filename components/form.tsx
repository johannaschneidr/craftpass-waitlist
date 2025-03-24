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
  success?: boolean;
}

export default function Form({
  name,
  email,
  handleNameChange,
  handleEmailChange,
  handleSubmit,
  loading,
  success,
}: FormProps) {
  return (
    <div className="w-full max-w-md space-y-3">
      <div className="relative">
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm rounded-md" />
        <Input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={handleNameChange}
          className="border-transparent"
        />
      </div>
      
      <div className="relative">
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm rounded-md" />
        <Input
          type="email"
          placeholder="Your Email Address"
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

      {success && (
        <p className="text-sm text-center text-[#011640] mt-2">
          Thank you for joining the waitlist! We&apos;ll be in touch soon.
        </p>
      )}
    </div>
  );
}
