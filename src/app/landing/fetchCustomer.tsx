'use server'

import initAuth from "@/jsBridge/initAuth";
import axios from 'axios';

export async function FetchCustomer(){

    let accessToken = ''
        initAuth(

            (authorizationCode: string) => {
                /*
                  Logic to handle the authorization code received from the native app
                  after successful authentication
                */

                //example
                // setStatus({
                //     status: "init auth success 🎉",
                //     isLoaded: false,
                // });
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
                                // "Access-Control-Allow-Credentials": "true",
                                // "Access-Control-Allow-Origin": "*",
                                // "Access-Control-Allow-Methods": "GET,DELETE,PATCH,POST,PUT",
                                // "Access-Control-Allow-Headers": "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
                                'Authorization': 'Bearer ' + accessToken,
                            }
                        };

                        axios.request(config)
                            .then((response) => {
                                // console.log(JSON.stringify(response.data));
                                console.log(response.data);
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
                // setStatus({
                //     status: "init auth failed 😢",
                //     errorCode: errorCode,
                //     errorDesc: errorDescription,
                //     isLoaded: false,
                // });
                console.log("[initAuth] failed 😢");
                console.log("[initAuth] error:", errorCode, errorDescription);
            }
        )
    }