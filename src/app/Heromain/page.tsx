import Image from 'next/image'
import logo from '../../../public/cleaned_pnaj.jpg'
export default function Hero(){
    return(
        <div className="bg-white w-[1920px]">
        <div className="w-[1920px] h-[829px] top-[92px] left-[1px] py-[140px] px-[220px] bg-[#043873] flex gap-[60px]">
            <div className="space-y-12 w-[656px] h-[361px] py-28">
                <p className="text-6xl font-bold">GET MORE DONE WITH WHITEPACE</p>
                <p className="text-2xl">Protect management softwares that enables your teams to collaborate, plan, analyze, and manage everyday tasks</p>
                <button className="bg-[#4F9CF9] w-[219px] h-[63px] rounded-[8px] p-5 text-lg">Try Whitepace Free</button>
            </div>
            <div className="w-[824px] h-[549px] bg-[#C4DEFD]"></div>
        </div>
        <div className="w-[1920px] h-[1100px] top-[921px] left-[1px] py-[140px] px-[220px]">
            <div className="w-[1480px] h-[547px] flex">
                <div className=" space-y-12 w-[672px] h-[411px] py-32">
                    <p className="text-6xl font-bold text-black">Project Management</p>
                    <p className="text-2xl text-black">Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
                    <button className="w-[201px] h-[63px] rounded-[6px] py-[20px] px-[40px] text-lg bg-[#4F9CF9] text-white">Get Started</button>
                </div>
                <div className="w-[748px] h-[547px] bg-[#C4DEFD]">

                </div>
            </div>
        </div>
        <div className="w-[1920px] h-[1100px] top-[921px] left-[1px] py-[140px] px-[220px] flex gap-[100px]">
            <div className="w-[748px] h-[547px]">
                <Image src={logo} alt='Image' height={547} width={748}></Image>
            </div>
            <div className="space-y-12 w-[672px] h-[411px] py-52">
                    <p className="text-6xl font-bold text-black">Work Together</p>
                    <p className="text-2xl text-black">With Whitepace share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and shate the URL with others.</p>
                    <button className="w-[201px] h-[63px] rounded-[6px] py-[20px] px-[40px] text-lg bg-[#4F9CF9] text-white">Try it now</button>
                </div>

        </div>
        <div className="w-[1920px] h-[829px] top-[92px] left-[1px] py-[140px] px-[220px] bg-[#043873] flex gap-[60px]">
            <div className="space-y-12 w-[656px] h-[361px] py-32">
                <p className="text-6xl font-bold">Use as Extension</p>
                <p className="text-2xl">Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.</p>
                <button className="bg-[#4F9CF9] w-[219px] h-[63px] rounded-[8px] p-5 text-lg">Lets Go</button>
            </div>
            <div className="w-[824px] h-[549px] bg-[#C4DEFD]"></div>
        </div>
        <div className="w-[1920px] h-[900px] top-[921px] left-[1px] py-[140px] px-[220px] flex gap-[100px]">
        <div className="w-[748px] h-[547px] bg-[#C4DEFD]">

</div>
            <div className="space-y-8 w-[672px] h-[411px] py-32">
                    <p className="text-6xl font-bold text-black">Customize it to your needs</p>
                    <p className="text-2xl text-black">Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.</p>
                    <button className="w-[201px] h-[63px] rounded-[6px] py-[20px] px-[40px] text-lg bg-[#4F9CF9] text-white">Lets Go</button>
                </div>

        </div>
        <div className='w-[1921px] h-[574px] top-[4080px] left-[1px] py-[140px] px-[220px] bg-[#043873]'>
            <div className='w-[1481px] h-[294px] flex flex-col gap-20'>
                <div className='flex flex-col w-full h-[171px] gap-8'>
                <div className='font-bold text-6xl mx-auto'>Your work, everywhere you are</div>
                <div className='text-xl text-justify mx-auto'>Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</div>
                </div>
                <div className='w-[195px] h-[63px] rounded-lg py-5 px-14 mx-auto bg-[#4F9CF9]'>Try Taskey</div>
            </div>

        </div>
        <div className='w-[1922px] h-[538px] top-[4654px] py-[140px] px-[220px] text-black flex flex-col gap-40'>
            <div className='w-full h-[87px] text-6xl font-bold flex justify-center'>
                <div>Our sponsors</div>
            </div>
            <div className='w-[1482px] h-[71px] flex justify-between text-3xl font-bold'>
                <div className='flex'><img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiNuvdA60X9tQmlPWSA2qd2ZojccIVAes_HA&s'} alt='Apple' height={50}></img><p className='py-3'>Apple</p></div>
                <div className='flex'> <img src="data:image/png;base64,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" alt="Microsoft" height={50} /><p className='py-3'>Microsoft</p></div>
                <div className='flex'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2tgAc1eEDKaJ0rl1e5XNITgQ2sOdWGxCIeA&s" alt="Slack"/><p className='py-3'>Slack</p></div>
                <div className='flex'><img src="data:image/png;base64,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" alt="Google" /><p className='py-3'>Google</p></div>
            </div>
        </div>
        </div>
    )
}