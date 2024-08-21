"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image
        src={"/assets/logo/mini-app-logo.svg"}
        className="w-full h-screen flex flex-col justify-center items-center"
        width={96}
        height={96}
        alt="Mini App logo"
      />

      <div className="flex flex-col justify-center items-center pt-14">
        <h1 className="text-3xl font-semibold">Welcome to Mini App</h1>
        <a href="/init">to init</a>
      </div>
    </div>
  );
}
