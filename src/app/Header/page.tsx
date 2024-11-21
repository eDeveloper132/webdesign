import Logoj from "../../../public/Logoj.png"
import Image from "next/image";
export default function Header() {
    return (
        <nav className="w-[1920px] h-[92px] left-[1px] flex justify-between py-4 px-[220px] bg-[#043873]">
            <Image src={Logoj} alt="Image" className="w-[191px] h-[34px] justify-between my-3"></Image>
            <div className="w-[737.5px] h-[60px] gap-[60px] flex">
                <ul className="flex w-[549px] h-[23px] gap-[32px] py-4">
                    <li>Products</li>
                    <li>Solutions</li>
                    <li>Resources</li>
                    <li>Pricing</li>
                </ul>
                <button className="w-[126px] h-[60px] rounded-[8px] py-4 px-10 bg-yellow-200 text-black">Login</button>
            </div>
        </nav>
    );
}