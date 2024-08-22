"use client";
import initAuth from "@/jsBridge/initAuth";
import { useState } from "react";
import { useRouter } from "next/navigation";


type status = {
  status: string;
  errorCode?: string;
  errorDesc?: string;
  isLoaded: boolean;
};


export default function Onboarding() {
  const router = useRouter();
  const [status, setStatus] = useState<status>({
    status: "starting to init auth...",
    isLoaded: true,
  });


  return (
    <div className="bg-cover bg-center h-screen bg-onboarding w-full flex flex-col justify-center items-center gap-5">
      <div className="font-bold pt-60 px-3">
        <div className="text-xl text-grey">Welcome to</div>
        <div className="text-6xl text-white">Chop.</div>
        <div className="text-xl text-grey">Explore the new world of fashion</div>
      </div>
      <a href="/landing">
        <div className="bg-white rounded-md px-8 py-3">
          Login with Paotang
          <div>{status.isLoaded? "isLoaded":"Done"}</div>
          {/* <a href="/landing"><div>to landing</div></a> */}
        </div>
      </a>

    </div>
  );
}
