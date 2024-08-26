import axios from "axios";

export const GetCustomerProfile = async () => {
    // const token = localStorage.getItem("access_token");
    // try{
    //     return await axios.post(`https://paotang-openapi-sandbox-uat.th-service.co.in/v1/paotangid/get-customer-profile-sandbox`, {
    //         headers: {
    //             Authorization: `Bearer ${token}`,
    //         },
    //     })
    // }
    // catch(error){
    //     console.error(error);
    // }
    const token = localStorage.getItem("access_token");
    const url = `api/profile`;
    const headers = { 'Authorization': `Bearer ${token}`, }

    try {
        return await axios.post(url, { headers });
    } catch (error) {
        return error;
    }
}