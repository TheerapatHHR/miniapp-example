import axios from "axios";

export const InitialTransaction = async () => {
    const token = localStorage.getItem("pwpToken");
    const url = `api/transaction`;
    // const url = `https://oapi-2-legged-external-sandbox-gw-uat.arisetech.dev/pwp/v1/open-api/payment/deeplink`;
    const headers = { 'Authorization': `Bearer ${token}` }

    try {
        return await axios.post(url, {}, { headers });
    } catch (error: any) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
          console.log(error.config);
        return error;
    }
}
