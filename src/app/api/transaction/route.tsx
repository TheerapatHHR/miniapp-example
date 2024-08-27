import { NextResponse, NextRequest } from "next/server";
import axios from "axios";



export async function POST(request: NextRequest) {
    const header = await request.headers.get("Authorization");
    // const header = await request.headers.get("Authorization");
    // const url = `${process.env.PAOTANG_API_URL}/v1/paotangpass/get-customer-profile-sandbox`;
    const url = `https://oapi-2-legged-external-sandbox-gw-uat.arisetech.dev/pwp/v1/open-api/payment/deeplink`;
    try {
        const resp = await  axios.post(url, request.body, { headers: { Authorization: header } });
        return NextResponse.json({
            ...resp.data
        });

    } catch (error: any) {
        return NextResponse.json({
            error: error.response.data,
            status: error.response.status,
        });
    }
}
