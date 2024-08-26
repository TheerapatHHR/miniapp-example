"use client"
import Image from "next/image";
import initAuth from "@/jsBridge/initAuth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from 'axios';
// import FetchCustomerBtn from "./fetchCustomerBtn";
import { GetAccessToken } from "./getAccessToken";
import { GetCustomerProfile } from "./getCustomerProfile";
import { GetPwpToken } from "./getPwpToken";

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
        let customerData;
        GetAccessToken().then((response) => {
            console.log("response token = "+response?.data.access_token);
            localStorage.setItem("access_token", response?.data.access_token);
            GetCustomerProfile().then((response) => {
                console.log(response);
            });
        });
        // console.log(JSON.parse(customerData || ''));
    }, [])

    const handlePwp = () => {
        GetPwpToken().then((response) => {
            console.log("pwp token = "+response?.data.access_token);
        })
    }


    return (
        <div className="bg-cover bg-center h-screen bg-[#141414]">
            {/* {status.isLoaded ? (
                <Image
                    className="animate-spin"
                    src={"/assets/icons/spinner.svg"}
                    width={16}
                    height={16}
                    alt="loading"
                />
            ) : ( */}
                <div>
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
                    <div>
                        {/* <button onClick={() => create()}>Fetch Customer</button> */}
                        {/* <FetchCustomerBtn /> */}
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
                    <button onClick={handlePwp}>pay with paotang</button>
                </div>
            {/* )
            } */}
        </div>

    );
}