"use client";

import NavLinks from '../components/NavLinks';
import {Suspense } from "react";

interface HeaderProps {
  today: string;
}

export default function Header({ today }: HeaderProps) {

  return (
    <header className="bg-gray-200 py-4 shadow-md flex justify-around">
      <div>
      <h2 id="header-title" className="text-2xl font-bold text-center">Jardines Ward</h2>
      <p>{today}</p>
      </div>
      <nav className="max-w-4xl flex justify-between items-center">
        <ul className="flex gap-6">
          <Suspense fallback={<p>loading...</p>}>
          <li><NavLinks></NavLinks></li>
          </Suspense>
        </ul>
      </nav>
    </header>
  );
}