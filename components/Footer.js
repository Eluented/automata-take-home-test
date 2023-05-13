import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 w-full p-4 bg-green-700 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6">
      <span className="text-sm text-slate-100 sm:text-center">© 2023 <a href="https://islandmart.co.uk/" className="hover:underline">Onur Belek</a>. All Rights Reserved.</span>
    </footer>
  );
}
