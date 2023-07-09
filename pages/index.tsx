import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import PoozleLink from "@poozle/react-sdk";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [open, setopen] = useState(false);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <button onClick={() => setopen(true)}> Connect </button>

        {open && (
          <PoozleLink
            linkId="bbad23ba-e935-43ff-8c08-c2dd0c9a9bc6"
            host="http://localhost:3001"
            redirectURL="http://localhost:3002"
            onClose={() => setopen(false)}
          />
        )}
      </main>
    </>
  );
}