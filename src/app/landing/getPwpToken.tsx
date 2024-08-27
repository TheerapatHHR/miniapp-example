import axios from "axios";

export const GetPwpToken = async () => {

    const data = new URLSearchParams();

    data.append('client_id', "ba6dcdbd-7ba5-4695-844d-e44f25ec47fb");
    data.append('client_secret', "6dd26b7c-e529-41d8-91f7-2c9fa2076ab5");

    try {
        return await axios.post(`https://oapi-2-legged-external-sandbox-gw-uat.arisetech.dev/oauth/authentication/api/v2/token`, data, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
    }
    catch (error) {
        console.error(error);
    }
}