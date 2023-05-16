import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <header className="w-full">
        <nav className="text-slate-100 flex justify-center bg-[#022f58]">
          <div className="flex justify-center items-center">
            <Image src="/automata_logo_2.jpg" width={100} height={100} />
            <h1 className="text-4xl font-semibold">Automata</h1>
          </div>
        </nav>
      </header>
    </>
  );
}
