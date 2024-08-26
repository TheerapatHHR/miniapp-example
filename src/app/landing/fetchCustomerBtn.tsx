"use client"
import { FetchCustomer } from "./fetchCustomer";

export default function FetchCustomerBtn() {
    
  return <button onClick={FetchCustomer} className="text-white">Click Me</button>;
}
