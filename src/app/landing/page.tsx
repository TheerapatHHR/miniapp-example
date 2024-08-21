"use client";
import Image from "next/image";


export default function Landing() {
    return (
        <div className="bg-cover bg-center h-screen bg-[#141414]">
            <div className="text-white">
                <div>Hi, Aomsin</div>
                <div>We have prepared <span className="text-primary">new products</span> for you</div>
            </div>
            <div className="text-grey flex flex-row justify-around">
                <div>All</div>
                <div>Newest</div>
                <div>Popular</div>
                <div>Man</div>
                <div>Woman</div>
            </div>
            <div className="grid grid-cols-2 text-white gap-4 p-5">
                <div className="rounded-md">
                    <Image
                        src={"/assets/materials/landing_item1.jpeg"}
                        className="w-ful h-full"
                        width={100}
                        height={96}
                        alt="item1"
                    />
                </div>
                <div className="rounded-md">
                    <Image
                        src={"/assets/materials/landing_item2.png"}
                        className=""
                        width={96}
                        height={96}
                        alt="item2"
                    />
                </div>
                <div className="col-span-2 rounded-md">
                    <Image
                        src={"/assets/materials/landing_item3.png"}
                        className=""
                        width={96}
                        height={96}
                        alt="item3"
                    />
                </div>
                <div className="rounded-md">
                    <Image
                        src={"/assets/materials/landing_item4.png"}
                        className=""
                        width={96}
                        height={96}
                        alt="item4"
                    />
                </div>
                <div className="rounded-md">
                    <Image
                        src={"/assets/materials/landing_item5.png"}
                        className=""
                        width={96}
                        height={96}
                        alt="item5"
                    />
                </div>
                <div className="col-span-2 rounded-md">
                    <Image
                        src={"/assets/materials/landing_item6.png"}
                        className=""
                        width={96}
                        height={96}
                        alt="item6"
                    />
                </div>
            </div>
        </div>

    );
}