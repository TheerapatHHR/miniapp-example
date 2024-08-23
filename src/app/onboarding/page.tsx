"use client";
import initAuth from "@/jsBridge/initAuth";
import { useState } from "react";
import { redirect, useRouter } from "next/navigation";


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

  // const onInitAuth = () => {
  //   initAuth(

  //     (authorizationCode: string) => {
  //         /*
  //           Logic to handle the authorization code received from the native app
  //           after successful authentication
  //         */

  //         //example
  //         setStatus({
  //             status: "init auth success 🎉",
  //             isLoaded: false,
  //         });
  //         console.log("[initAuth] success 🎉");
  //         console.log("[initAuth] authCode", authorizationCode);
  //         // router.replace(`/?authCode=${authorizationCode}`);
  //         router.push('/landing')
  //     },
  //     (errorCode, errorDescription) => {
  //         /*
  //           Logic to handle the error received from the native app 
  //           after failed authentication
  //         */

  //         //example
  //         setStatus({
  //             status: "init auth failed 😢",
  //             errorCode: errorCode,
  //             errorDesc: errorDescription,
  //             isLoaded: false,
  //         });
  //         console.log("[initAuth] failed 😢");
  //         console.log("[initAuth] error:", errorCode, errorDescription);
  //     }
  // )
  // }


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
        </div>
      </a>
      {/* <div onClick={onInitAuth}>
        <div className="bg-white rounded-md px-8 py-3">
          Login with Paotang
        </div>
      </div> */}

    </div>
  );
}
