import logoj from '../../../public/Logoj.png'
import Image from 'next/image'
export default function Footer(){
    return(
        <div>
        <div className="w-[1920px] h-[461px] top-[5195px] left-[1px] pt-[140px] pb-8 px-[220px] flex justify-center bg-[#043873]">
            <div className="w-[1480px] h-[290px] flex justify-between">
                <div className="w-[295px] h-[169px] flex flex-col gap-4">
                    <div><Image src={logoj} alt='Image' className='w-[191px] h-[34px]'></Image></div>
                    <div className="text-justify">whitepace was created for the new ways we live and work. We make a better workspace around the world , whitepace was created for the new ways we live and work. We make a better workspace around the world</div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="text-xl font-bold">Products</div>
                    <ul className="flex flex-col gap-2">
                        <li className="text-[#FFE492]">Overwiew</li>
                        <li>Pricing</li>
                        <li>Customer Stories</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="text-xl font-bold">Resources</div>
                    <ul className="flex flex-col gap-2">
                        <li>Blog</li>
                        <li>Guides & Tutorials</li>
                        <li>Help Center</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="text-xl font-bold">Company</div>
                    <ul className="flex flex-col gap-2">
                        <li>About us</li>
                        <li>Careers</li>
                        <li>Media kit</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="flex justify-center bg-[#043873] pt-2 pb-6"><p className="opacity-50">©2021 Whitepace LLC.</p></div>
        </div>
    )
}