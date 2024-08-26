import axios from "axios";

export const GetAccessToken = async() => {
    const authCode = localStorage.getItem("authCode");
    const data = new URLSearchParams();
        data.append('code', authCode || '');
        data.append('grant_type', 'authorization_code');
        data.append('redirect_uri', "https://miniapp-example-puce.vercel.app/");

        data.append('client_id', "ff0f19c7-7440-4e92-bdbf-8c49b641608d");
        data.append('client_secret', "KN9RwJEcm1cdnPPo3sPRxHbzbCJR0T");
        data.append('state', "testtest");

        try{
            return await axios.post(`https://paotang-id-external-uat.th-service.co.in/oauth2/token`, data, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            })
        }
        catch(error){
            console.error(error);
        }
}