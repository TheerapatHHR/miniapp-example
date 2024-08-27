"use client"
import Image from "next/image";

export default function Fail() {

    return (
        <div className="bg-cover bg-center h-screen bg-[#141414] flex flex-col justify-center ">
            <div className=" justify-center align-middle text-white flex font-bold text-3xl">
                Unsuccessfully Checkout!
            </div>
            <div className="justify-center align-middle flex">
                <Image
                    src={"/assets/materials/checkout_unsuccess.png"}
                    className=""
                    width={500}
                    height={100}
                    alt="item1"
                />
            </div>
            <a href="/landing" className="justify-center align-middle flex">
                <div className="py-5 px-20 bg-white text-black rounded-md w-fit text-2xl font-bold">Back to Home</div>
            </a>

        </div>
    );
}