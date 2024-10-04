import Image from "next/image";

export default function Home() {
  
  return (
    <div className="bg-slate-50 shadow-lg min-h-screen p-12">
      <div className="justify-center text-center">
        <div className="p-3">
          <Image className="rounded mx-auto" src="/ismail.jpg" alt="ismail" width="150" height="150" />
          <div>
            <h1 className="font-semibold text-2xl">Ismail Hossain Bijoy</h1>
            <h1 className="text-justify mx-auto sm:w-5/4 md:w-5/4 lg:w-2/4 xl:w-2/4 2xl:w-2/4 3xl:w-2/4">Hi there, I am Bijoy. I am a chemist. I have more than 2 years of experience in analytical chemistry. Currently I am working in a college as a assistant researcher in field of organic chemistry. My interest in organic chemistry and computational chemistry.</h1>
          </div>
        </div>
        <div>
          <div id="chemistry" className="justify-center mx-auto h-48 bg-blue-400 m-1 p-3 rounded-md sm:w-5/4 md:w-5/4 lg:w-2/4 xl:w-2/4 2xl:w-2/4 3xl:w-2/4">
            <h1>Research Project for my MS Thesis.</h1>
          </div>
          <div id="dna" className="justify-center mx-auto h-48 bg-blue-400 m-1 p-3 rounded-md sm:w-5/4 md:w-5/4 lg:w-2/4 xl:w-2/4 2xl:w-2/4 3xl:w-2/4">
            <h1 className="text-slate-50">Genetical modified vegetable impact on human body. I did this research with a local phamaceutical company.</h1>
            
          </div>
        </div>
      </div>
    </div>
  );
}
