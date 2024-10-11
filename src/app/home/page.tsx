"use client";
import Image from "next/image";
import { FlipWords } from "@/components/ui/flip-words";
import React from "react";



export default async function Home() {
  const words = ["Drugs", "Weed", "Meth", "Coke"];

  // async function insertoneuser() {
  //   await db.insert(users).values({values.name})
    
  return(
    <div>

{/* first section with flip words */}
      <div>
        <div className="flex flex-col justify-center bg-green-100 h-dvh top-0"> 
          <p className="font-bold text-5xl text-center text-black">Say No To <FlipWords words={words} className="text-fuchsia-400"/> <br /></p>
          <p className="text-sm text-center text-black">Drugs are bad</p>
        </div>
      </div>
{/* second section with walter white asking why drugs are bad */}
      <div className="flex flex-col overflow-hidden">
          <>
            <h1 className="text-4xl font-semibold text-black text-center">
              Why are drugs bad?</h1>
          </>

        <Image
          src={`/walter.webp`}
          alt="hero"
          height={600}
          width={426}
          className="mx-auto rounded-md object-cover h-full object-left-top shadow-xl"
          draggable={false}
        />
      <div className="flex flex-row bg-green-100 h-screen items-center justify-center">
        <div className="mx-4 flex flex-col items-center">
          <img src="/meth1.jpg" alt="Meth" className="w-50 h-auto" />
            <p>Meth:</p>
            <p>Methamphetamine is highly<br></br> addictive, damaging to physical<br></br> and mental health, leads <br></br>to severe behavioral issues, <br></br>and can cause overdose.</p>
        </div>
        <div className="mx-4 flex flex-col items-center">
          <img src="/weed.jpg" alt="Weed" className="w-50 h-auto" />
            <p>Weed</p>
            <p>Weed can impair cognitive<br></br> function, lead to addiction, <br></br>worsen mental health issues, <br></br>negatively affect motivation,<br></br> and pose legal risks.</p>
        </div>
        <div className="mx-4 flex flex-col items-center">
          <img src="/caca.jpg" alt="Cocaine" className="w-50 h-auto" />
            <p>Cocaine</p>
            <p>Cocaine is highly addictive,<br></br> causes severe health problems,<br></br> leads to dangerous behaviors,<br></br> increases overdose risk,<br></br> and harms mental well-being.</p>
        </div>
      </div>
      </div>
      <div>

      </div>  
    </div> 
  );
}



