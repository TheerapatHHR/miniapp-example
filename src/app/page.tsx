"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <Image
        src={"/assets/logo/mini-app-logo.svg"}
        className="logo mini-app"
        width={96}
        height={96}
        alt="Mini App logo"
      />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-semibold">Welcome to Mini App</h1>
        <a href="/onboarding"><div className="p-4 bg-white rounded-md">to on board</div></a>
      </div>
    </div>
  );
}
