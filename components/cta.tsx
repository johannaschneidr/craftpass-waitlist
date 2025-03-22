import { motion } from "framer-motion";
import TextBlur from "@/components/ui/text-blur";
import AnimatedShinyText from "@/components/ui/shimmer-text";
import { containerVariants, itemVariants } from "@/lib/animation-variants";

const CTA = () => {
  return (
    <div className="w-full max-w-[1400px] flex flex-col items-center mt-32 md:mt-40">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-center">
        Powering your creative wellness
      </h1>
      <p className="text-xl md:text-xl font-regular tracking-tight mb-2 text-center max-w-[1400px]">
        Get monthly credits through CraftPass to access the best art and craft workshops and unlock your full creative potential
      </p>
    </div>
  );
};

export default CTA;
