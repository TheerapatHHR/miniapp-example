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

  const onInitAuth = () => {
    initAuth(
      "ff0f19c7-7440-4e92-bdbf-8c49b641608d",
      "openid+offline+paotangid.citizen+paotangid.mobile+paotangid.email+paotangid.work_profile+paotangid.legal_address+paotangid.mailing_address+paotangid.office_address+paotangid.title+paotangid.fullname_th+paotangid.fullname_en+paotangid.gender+paotangid.birthdate+paotangid.redirect_uri",
      (authorizationCode: string) => {
        /*
          Logic to handle the authorization code received from the native app
          after successful authentication
        */

        //example
        setStatus({
          status: "init auth success 🎉",
          isLoaded: false,
        });
        console.log("[initAuth] success 🎉");
        console.log("[initAuth] authCode", authorizationCode);
        router.replace(`/?authCode=${authorizationCode}`);
      },
      (errorCode, errorDescription) => {
        /*
          Logic to handle the error received from the native app 
          after failed authentication
        */

        //example
        setStatus({
          status: "init auth failed 😢",
          errorCode: errorCode,
          errorDesc: errorDescription,
          isLoaded: false,
        });
        console.log("[initAuth] failed 😢");
        console.log("[initAuth] error:", errorCode, errorDescription);
      }
    )
  }

  return (
    <div className="bg-cover bg-center h-screen bg-onboarding w-full flex flex-col justify-center items-center gap-5">
      <div className="font-bold pt-60 px-3">
        <div className="text-xl text-grey">Welcome to</div>
        <div className="text-6xl text-white">Chop.</div>
        <div className="text-xl text-grey">Explore the new world of fashion</div>
      </div>
      <button onClick={onInitAuth}>
        <div className="bg-white rounded-md px-8 py-3">
          Login with Paotang
          <div>{status.isLoaded? "isLoaded":"Done"}</div>
          {/* <a href="/landing"><div>to landing</div></a> */}
        </div>
      </button>

    </div>
  );
}
