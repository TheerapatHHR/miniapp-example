"use client";
import Image from "next/image";
import { useEffect } from "react";
import initAuth from "@/jsBridge/initAuth";
import { useState } from "react";
import { useRouter } from "next/navigation";

type status = {
    status: string;
    errorCode?: string;
    errorDesc?: string;
    isLoaded: boolean;
};

export default function Landing() {

    const router = useRouter();
    const [status, setStatus] = useState<status>({
        status: "starting to init auth...",
        isLoaded: true,
    });


    useEffect(() => {
        // initAuth(

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
    }, [])

    return (
        <div className="bg-cover bg-center h-screen bg-[#141414]">
            <div className="text-white">
                <div>Hi, Aomsin</div>
                <div>We have prepared <span className="text-primary">new products</span> for you</div>
            </div>
            <div className="text-grey flex flex-row justify-around">
                <div>All</div>
                <div>Newest</div>
                <div>Popular</div>
                <div>Man</div>
                <div>Woman</div>
            </div>
            <div className="grid grid-cols-2 text-white gap-4 p-5">
                <div className="rounded-md">
                    <Image
                        src={"/assets/materials/landing_item1.jpeg"}
                        className="w-ful h-full"
                        width={100}
                        height={96}
                        alt="item1"
                    />
                </div>
                <div className="rounded-md">
                    <Image
                        src={"/assets/materials/landing_item2.png"}
                        className=""
                        width={96}
                        height={96}
                        alt="item2"
                    />
                </div>
                <div className="col-span-2 rounded-md">
                    <Image
                        src={"/assets/materials/landing_item3.png"}
                        className=""
                        width={96}
                        height={96}
                        alt="item3"
                    />
                </div>
                <div className="rounded-md">
                    <Image
                        src={"/assets/materials/landing_item4.png"}
                        className=""
                        width={96}
                        height={96}
                        alt="item4"
                    />
                </div>
                <div className="rounded-md">
                    <Image
                        src={"/assets/materials/landing_item5.png"}
                        className=""
                        width={96}
                        height={96}
                        alt="item5"
                    />
                </div>
                <div className="col-span-2 rounded-md">
                    <Image
                        src={"/assets/materials/landing_item6.png"}
                        className=""
                        width={96}
                        height={96}
                        alt="item6"
                    />
                </div>
            </div>
        </div>

    );
}