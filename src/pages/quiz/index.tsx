'use client'
import { quiz } from "~/data";

export default function Quiz() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-slate-900 text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-3xl">Quiz Page</h1>

          <div>
            Question: 1
            <span>/5</span>
          </div>
        </div>
      </main>
    </>
  );
}
