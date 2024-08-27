"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { GetAccessToken } from "./getAccessToken";
import { GetCustomerProfile } from "./getCustomerProfile";
import { GetPwpToken } from "./getPwpToken";
import { InitialTransaction } from "./initialTransaction";

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
        GetAccessToken().then((response) => {
            console.log("response token = "+response?.data.access_token);
            localStorage.setItem("access_token", response?.data.access_token);
            GetCustomerProfile().then((response) => {
                console.log(response);
            });
        });
    }, [])

    const handleProduct = () => {
        router.push('/product');
    }

    // const handlePwp = () => {
    //     GetPwpToken().then((response) => {
    //         console.log("pwp token = "+response?.data.data.access_token);
    //         localStorage.setItem("pwpToken", response?.data.data.access_token);
    //         InitialTransaction().then((response: any) => {
    //             console.log(response);
    //             localStorage.setItem('txnRefId', response?.data.txnRefId);
    //         })
    //     })
    // }

    // const openPwP = (
    //     ppoaTnxRefId: any,
    //     callbackError = (errorCode: any, errorDescription: any) => {
    //       console.error(`Error Code: ${errorCode}, Error Description: ${errorDescription}`);
    //     }
    //   ) => {
    //     if (window.JSBridge) {
    //       // Android
    //       window.bridge.openPwPCallbackError = callbackError;
    //       window.JSBridge.openPwP?.(ppoaTnxRefId);
    //     } else if (window.webkit) {
    //       // iOS
    //       window.bridge.openPwPCallbackError = callbackError;
    //       window.webkit.messageHandlers.observer.postMessage({
    //         name: 'openPwP',
    //         ppoaTnxRefId: ppoaTnxRefId
    //       });
    //     }
    //   };

    //   const handleOpenPwp = () => {
    //     const txnRefId = localStorage.getItem('txnRefId');
    //     openPwP(txnRefId, (errorCode, errorDescription) => {
    //         // Handle error
    //         console.error(`Error Code: ${errorCode}, Error Description: ${errorDescription}`);
    //       });
    //   }


    return (
        <div className="bg-cover bg-center h-screen bg-[#141414]">
                <div>
                    <div className="text-white pt-10">
                        <div className="font-bold text-3xl">Hi, Aomsin</div>
                        <div>We have prepared <span className="text-primary">new products</span> for you</div>
                    </div>
                    <div className="text-grey flex flex-row justify-around p-5">
                        <div className="text-primary">All</div>
                        <div>Newest</div>
                        <div>Popular</div>
                        <div>Man</div>
                        <div>Woman</div>
                    </div>
                    <div>
                    </div>
                    <div className="grid grid-cols-2 text-white gap-4 p-5 h-[70vh]">
                        <div className="rounded-md flex justify-center" onClick={handleProduct}>
                            <Image
                                src={"/assets/materials/landing_item1.jpeg"}
                                className=""
                                width={100}
                                height={96}
                                alt="item1"
                            />
                        </div>
                        <div className="rounded-md flex justify-center">
                            <Image
                                src={"/assets/materials/landing_item2.png"}
                                className=""
                                width={100}
                                height={96}
                                alt="item2"
                            />
                        </div>
                        <div className="col-span-2 rounded-md flex justify-center">
                            <Image
                                src={"/assets/materials/landing_item3.png"}
                                className=""
                                width={100}
                                height={96}
                                alt="item3"
                            />
                        </div>
                        <div className="rounded-md flex justify-center">
                            <Image
                                src={"/assets/materials/landing_item4.png"}
                                className=""
                                width={100}
                                height={96}
                                alt="item4"
                            />
                        </div>
                        <div className="rounded-md flex justify-center">
                            <Image
                                src={"/assets/materials/landing_item5.png"}
                                className=""
                                width={100}
                                height={96}
                                alt="item5"
                            />
                        </div>
                        <div className="col-span-2 rounded-md flex justify-center">
                            <Image
                                src={"/assets/materials/landing_item6.png"}
                                className=""
                                width={100}
                                height={96}
                                alt="item6"
                            />
                        </div>
                    </div>
                    {/* <button onClick={handlePwp} className="text-white p-5">pay with paotang</button>
                    <button onClick={handleOpenPwp} className="text-white">openPwP</button> */}
                </div>
            {/* )
            } */}
        </div>

    );
}