import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {

  return (
    <>
      <header className="w-full">
        <nav className="text-slate-100 flex justify-center">
          <Image src="/automata_logo_2.jpg" width={100} height={100}/>
        </nav>
      </header>
    </>
  );
}