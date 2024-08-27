import axios from "axios";

export const InitialTransaction = async () => {
    const token = localStorage.getItem("pwpToken");
    const url = `api/transaction`;
    // const url = `https://oapi-2-legged-external-sandbox-gw-uat.arisetech.dev/pwp/v1/open-api/payment/deeplink`;
    const headers = { 'Authorization': `Bearer ${token}` }

    const paymentInfo = {
        'compCode': '86279',
        'paymentMethod': 'KTB-PT',
        'partnerTxnRef': generateUUID(),
        'amount': 100.10,
        'ref1value': '1',
    }

    const partnerInfo = {
        "deeplink": "https://miniapp-example-puce.vercel.app/"
    }


    const data = {
        'partnerTxnCreatedDt': '2024-04-09T06:24:05+07:00',
        'paymentInfo': paymentInfo,
        'partnerInfo': partnerInfo,
    }
    try {
        return await axios.post(url, data, { headers });
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

function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if(d > 0){//Use timestamp until depleted
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}