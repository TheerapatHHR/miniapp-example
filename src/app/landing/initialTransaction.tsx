import axios from "axios";

export const InitialTransaction = async () => {
    const token = localStorage.getItem("pwpToken");
    const url = `api/transaction`;
    const headers = { 'Authorization': `Bearer ${token}`, }

    const paymentInfo = {
        'compCode': '86279',
        'paymentMethod': 'KTB-PT',
        'partnerTxnRef': '{{$uuid}}',
        'amount': '100.10',
        'ref1value': '1',
    }

    const partnerInfo = {
        "deeplink": "https://partner.url.com/paymentResult?ref=abc&destination=miniapp&miniAppUUID={miniAppUUID}"
    }


    const data = {
        'partnerTxnCreatedDt': '2024-04-09T06:24:05+07:00',
        'paymentInfo': paymentInfo,
        'partnerInfo': partnerInfo,
    }
    try {
        return await axios.post(url, data, { headers });
    } catch (error) {
        return error;
    }
}