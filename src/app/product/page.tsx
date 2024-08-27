"use client";
import React from "react";
import { GetPwpToken } from "../landing/getPwpToken";
import { InitialTransaction } from "../landing/initialTransaction";
import { useRouter } from "next/router";

const Product = () => {
  const router = useRouter();

  const handlePwp = () => {
    GetPwpToken().then((response) => {
        console.log("pwp token = "+response?.data.data.access_token);
        localStorage.setItem("pwpToken", response?.data.data.access_token);
        InitialTransaction().then((response: any) => {
            console.log(response);
            localStorage.setItem('txnRefId', response?.data.txnRefId);
        })
    })
}

const openPwP = (
    ppoaTnxRefId: any,
    callbackError = (errorCode: any, errorDescription: any) => {
      console.error(`Error Code: ${errorCode}, Error Description: ${errorDescription}`);
    }
  ) => {
    if (window.JSBridge) {
      // Android
      window.bridge.openPwPCallbackError = callbackError;
      window.JSBridge.openPwP?.(ppoaTnxRefId);
    } else if (window.webkit) {
      // iOS
      window.bridge.openPwPCallbackError = callbackError;
      window.webkit.messageHandlers.observer.postMessage({
        name: 'openPwP',
        ppoaTnxRefId: ppoaTnxRefId
      });
    }
  };

  const handleOpenPwp = () => {
    const txnRefId = localStorage.getItem('txnRefId');
    openPwP(txnRefId, (errorCode, errorDescription) => {
        // Handle error
        router.push('/fail');
        console.error(`Error Code: ${errorCode}, Error Description: ${errorDescription}`);
      });
  }

  const handleClickBuyNow = async () => {
    await handlePwp();
    await handleOpenPwp();
    // await router.push('/success');
  };
  return (
    <div className="w-full h-screen bg-product bg-cover bg-center px-6 py-8">
      <div className="h-full flex flex-col justify-end">
        <div className="w-full flex flex-col bg-[#F9FAFB] opacity-80 rounded-xl p-6 gap-4">
          <h4 className="text-3xl font-bold text-black">Shirt</h4>
          <p className="text-sm text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            placerat risus non sapien posuere ultricies. Mauris hendrerit magna
            dolor, vel pulvinar elit aliquet sed.
          </p>
          <div className="flex flex-row justify-between">
            <p className="text-xl font-bold text-black">฿ 100.10</p>
            <button
              className="rounded-lg bg-black text-white px-4 py-2"
              onClick={() => handleClickBuyNow()}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;