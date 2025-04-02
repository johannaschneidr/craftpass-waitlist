import Link from "next/link";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animation-variants";

const Footer = () => {
  return (
    <footer className="w-full py-6 mt-auto">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm">
          © {new Date().getFullYear()} CraftPass. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
