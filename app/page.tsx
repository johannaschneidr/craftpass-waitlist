"use client";

import { toast } from "sonner";
import { useState } from "react";
import CTA from "@/components/cta";
import Form from "@/components/form";
//import Particles from "@/components/ui/particles";
import Footer from "@/components/footer";
import PricingTiers from "@/components/pricing-tiers";
import StudioCarousel from "@/components/studio-carousel";
import NavBar from "@/components/nav-bar";

export default function Home() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async () => {
    if (!name || !email) {
      toast.error("Please fill in all fields");
      return;
    }

    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setLoading(true);

    try {
      // First, attempt to send the email
      const mailResponse = await fetch("/api/mail", {
        cache: "no-store",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstname: name, email }),
      });

      if (!mailResponse.ok) {
        console.error('Mail error:', await mailResponse.json());
        if (mailResponse.status === 429) {
          toast.error("You're doing that too much. Please try again later");
        } else {
          toast.error("Failed to send email. Please try again 😢");
        }
        return;
      }

      // If email sending is successful, proceed to insert into Notion
      const notionResponse = await fetch("/api/notion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      if (!notionResponse.ok) {
        if (notionResponse.status === 429) {
          toast.error("You're doing that too much. Please try again later");
        } else {
          toast.error("Failed to save your details. Please try again 😢");
        }
      } else {
        setSuccess(true);
        setName("");
        setEmail("");
      }
    } catch (error) {
      console.error('Submit error:', error);
      toast.error("An error occurred. Please try again 😢");
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center overflow-x-clip">
      <div 
        className="fixed inset-0 -z-[200] opacity-40 min-h-[100dvh] w-full"
        style={{
          backgroundImage: 'url("/background.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          transform: 'translateZ(0)', // Add hardware acceleration
          WebkitTransform: 'translateZ(0)', // For Safari
          willChange: 'transform', // Optimize for animations
        }}
      />
      
      <NavBar />
      
      <div className="flex-1 flex flex-col items-center w-full pt-0">
        {/* CTA Section */}
        <section className="w-full max-w-[1400px] flex justify-center px-4 sm:px-6 lg:px-2 mt-20 md:mt-40">
          <CTA />
        </section>
        
        {/* Waitlist Section */}
        <section className="w-full max-w-[1400px] flex flex-col items-center px-4 sm:px-6 lg:px-8 mt-8 md:mt-8 mb-40">
          <Form
            name={name}
            email={email}
            handleNameChange={handleNameChange}
            handleEmailChange={handleEmailChange}
            handleSubmit={handleSubmit}
            loading={loading}
            success={success}
          />
        </section>

        {/* Pricing Section
        <section className="w-full max-w-[1400px] flex justify-center px-4 sm:px-6 lg:px-8 mt-40 md:mt-60">
          <PricingTiers />
        </section> */}

        {/* Studio Carousel Section
        <section className="w-full max-w-[1400px] flex justify-center px-4 sm:px-6 lg:px-8 mt-40">
          <StudioCarousel />
        </section> */}
      </div>

      <Footer />
    </main>
  );
}
