import axios from "axios";

export const GetCustomerProfile = async () => {

    const token = localStorage.getItem("access_token");
    const url = `api/profile`;
    const headers = { 'Authorization': `Bearer ${token}`, }

    try {
        return await axios.post(url, {} ,{ headers });
    } catch (error) {
        return error;
    }
}