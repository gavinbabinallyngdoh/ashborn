"use-client"

import Navbar from "@/app/_components/Navbar";
import InputBox from "./_components/InputBox";
import { ArrowDown } from "lucide-react";
import { SignUp, UserButton, } from "@clerk/nextjs";
import Link from "next/link";


export default function Home() {

  return (
    
    <main className="relative min-h-screen flex flex-col bg-background text-foreground">

      <Navbar />

      <section className="flex-1 flex flex-col justify-center items-center relative">

        <InputBox />

        <h1 className="absolute text-[20vw] sm:text-[15vw] font-extrabold text-white/5 z-0 mt-80 select-none">
          ashborn
        </h1>

        <div className="absolute bottom-2 flex w-full items-center justify-between px-10">
          
          <div className="flex-1">
            <ArrowDown className="text-white/40 animate-bounce" />
          </div>

          <div className="flex-1 text-center">

            <p className="text-sm text-white/70 max-w-md mx-auto">
              ashborn is your truth-seeking AI companion for unfiltered answers
              with advanced capabilities in reasoning, coding, and visual
              processing.
            </p>

          </div>

          <div className="flex-1 flex justify-end gap-4">

            <Link href="/sign-in">
              <button className="border border-white/20 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-white hover:text-black transition">
                Sign In
              </button>
            </Link>

            <Link href="/sign-up">
              <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:opacity-80 transition">
                Sign Up
              </button>
            </Link>

            <UserButton/>
            

          </div>

        </div>

      </section>

    </main>

  );

}
