import axios from "axios";

export const GetCustomerProfile = async ({token}: {token: any}) => {
    console.log("token = " + token);
    try{
        return await axios.post(`https://paotang-openapi-sandbox-uat.th-service.co.in/v1/paotangid/get-customer-profile-sandbox`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
    }
    catch(error){
        console.error(error);
    }
}