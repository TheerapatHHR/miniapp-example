import { NextResponse, NextRequest } from "next/server";
import axios from "axios";



export async function POST(request: NextRequest) {
    const header = await request.headers.get("Authorization");
    // const url = `${process.env.PAOTANG_API_URL}/v1/paotangpass/get-customer-profile-sandbox`;
    const url = `https://paotang-pass-sandbox-external-uat.th-service.co.in/v1/paotangpass/get-customer-profile-sandbox`;
    try {
        const resp = await  axios.post(url, {}, { headers: { Authorization: header } });
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
