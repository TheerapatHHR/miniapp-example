"use client";
import Image from "next/image";
import { useEffect } from "react";
import initAuth from "@/jsBridge/initAuth";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from 'axios';

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
    let accessToken = '';

    useEffect(() => {
        initAuth(

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
                // router.replace(`/?authCode=${authorizationCode}`);

                const data = new URLSearchParams();
                data.append('code', authorizationCode);
                data.append('grant_type', 'authorization_code');
                data.append('redirect_uri', "https://miniapp-example-puce.vercel.app/");

                data.append('client_id', "ff0f19c7-7440-4e92-bdbf-8c49b641608d");
                data.append('client_secret', "KN9RwJEcm1cdnPPo3sPRxHbzbCJR0T");
                data.append('state', "testtest");

                axios.post(`https://paotang-id-external-uat.th-service.co.in/oauth2/token`, data, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                })
                    .then((response) => {
                        // Handle successful response
                        console.log(response.data);
                        accessToken = response.data.access_token;
                    })
                    .catch((error) => {
                        // Handle error
                        console.error(error);
                    })
                    .then(() => {
                        // axios.post(`https://paotang-openapi-sandbox-uat.th-service.co.in/v1/paotangid/get-customer-profile-sandbox`, {
                        //     headers: {
                        //       Authorization: `Bearer ${accessToken}`,
                        //     },
                        //   }).then((response) => {
                        //     // Handle successful response
                        //     console.log(response.data);
                        //   })
                        //   .catch((error) => {
                        //     // Handle error
                        //     console.error(error);
                        //   });
                        let config = {
                            method: 'post',
                            maxBodyLength: Infinity,
                            url: 'https://paotang-openapi-sandbox-uat.th-service.co.in/v1/paotangid/get-customer-profile-sandbox',
                            headers: {
                                "Access-Control-Allow-Credentials": "true",
                                "Access-Control-Allow-Origin": "*",
                                "Access-Control-Allow-Methods": "GET,DELETE,PATCH,POST,PUT",
                                "Access-Control-Allow-Headers": "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
                                'Authorization': 'Bearer ' + accessToken,
                            }
                        };

                        axios.request(config)
                            .then((response) => {
                                console.log(JSON.stringify(response.data));
                            })
                            .catch((error) => {
                                console.log(error);
                            });
                    })
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
    }, [])

    return (
        <div className="bg-cover bg-center h-screen bg-[#141414]">
            {status.isLoaded ? (
                <Image
                    className="animate-spin"
                    src={"/assets/icons/spinner.svg"}
                    width={16}
                    height={16}
                    alt="loading"
                />
            ) : (
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
            )
            }
        </div>

    );
}