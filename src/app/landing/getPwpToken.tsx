import axios from "axios";

export const GetPwpToken = async() => {
    // const authCode = localStorage.getItem("authCode");
    // const urlParams = new URLSearchParams(window.location.search);
    // const authCode = urlParams.get('authCode');
    const data = new URLSearchParams();
        // data.append('code', authCode || '');
        // data.append('grant_type', 'authorization_code');
        // data.append('redirect_uri', "https://miniapp-example-puce.vercel.app/");

        data.append('client_id', "ba6dcdbd-7ba5-4695-844d-e44f25ec47fb");
        data.append('client_secret', "6dd26b7c-e529-41d8-91f7-2c9fa2076ab5");
        // data.append('state', "testtest");

        try{
            return await axios.post(`https://oapi-2-legged-external-sandbox-gw-uat.arisetech.dev/oauth/authentication/api/v2/token`, data, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            })
        }
        catch(error){
            console.error(error);
        }
}