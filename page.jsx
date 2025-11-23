"use client";

import { SignUp } from "@clerk/nextjs";
import { X } from "lucide-react";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* Close Button */}
      <Link
        href="/"
        className="absolute top-6 right-6 text-white/70 hover:text-white transition"
      >
        <X className="w-6 h-6" />
      </Link>

      {/* Auth Box */}
      <div className="border border-white/40 rounded-2xl p-8 backdrop-blur-sm">
        <SignUp
          appearance={{
            elements: {
              card: "bg-transparent shadow-none border-none w-full",
              headerTitle:
                "text-white text-2xl font-semibold text-center mb-2",
              headerSubtitle: "text-white/70 text-center mb-6",

              // Inputs
              formFieldLabel: "text-white/80 text-sm mb-1",
              formFieldInput:
                "bg-transparent border border-white/40 rounded-lg text-white placeholder:text-white/40 focus:border-white focus:ring-0 outline-none transition",

              // Main Continue Button
              formButtonPrimary:
                "bg-white text-black rounded-full py-2 mt-3 hover:bg-neutral-200 transition-all w-full",

              // --- SOCIAL BUTTONS ---
              socialButtons: "flex gap-3 justify-center mt-4",
              socialButtonsBlockButton:
                "rounded-full py-2 font-medium flex-1 relative overflow-hidden",
              socialButtonsBlockButton__google:
                "bg-white text-black hover:bg-neutral-100 border-none",
              socialButtonsBlockButton__facebook:
                "bg-[#1877F2] text-white hover:bg-[#1566d8] border-none",

              // ✅ Hide floating arrow / right-side icon
              socialButtonsBlockButtonArrow: "hidden",
              socialButtonsIconButton: "hidden",
              socialButtonsProviderIcon__next: "hidden",

              // Divider
              dividerLine: "bg-white/20",
              dividerText: "text-white/60",

              // Footer
              footer:
                "text-white/70 mt-4 text-center border-t border-white/10 pt-4",
              footerActionLink: "text-white hover:underline",
            },
            variables: {
              colorPrimary: "#ffffff",
              colorText: "#ffffff",
              colorInputBackground: "transparent",
              colorInputText: "#ffffff",
              colorInputBorder: "rgba(255,255,255,0.4)",
            },
          }}
          routing="path"
        />
      </div>
    </div>
  );
}
