// import { SignInButton } from "@clerk/nextjs";
import Head from "next/head";
import Link from "next/link";

export default function Home() {

  return (
    <>
      <Head>
        <title>Quizify</title>
        <meta name="description" content="Quizify, best next gen quiz website to study for exams" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-slate-900 text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          {/* <SignInButton /> */}

          <h1 className="text-3xl">Quizify</h1>

          <Link href='/quiz'>
            <button className="border-2 border-slate-400 px-4 py-2 rounded-full hover:bg-slate-700">Start Quiz!</button>
          </Link>
        </div>
      </main>
    </>
  );
}


// klop