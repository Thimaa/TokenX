import React from 'react'
import Image from 'next/image';

const Work = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10  px-4 xl:px-0">
      <h1 className="text-[36px] font-bold mt-10 dark:text-white">
        HOW IT WORKS
      </h1>
      <div className="flex xl:flex-row flex-col gap-4 mt-10">
        <div className="relative w-full xl:w-[800px] h-[328px] mt-5 bg-[#EFF1F5] dark:bg-[#010511] rounded-[16px]">
          <div className="w-full h-[200px]">
            <Image
              src="/Works/card1.png"
              alt="card 1"
              layout="fill"
              objectFit="cover"
              className="rounded-[16px]"
            />
          </div>
          <div className="absolute bottom-0 w-full px-8 rounded-b-[16px]">
            <h2 className="font-bold text-[24px] mb-1 dark:text-white">
              Create Project
            </h2>
            <p className="w-full sm:w-1/2 mb-5 dark:text-white">
              Tokenize your ideas and launch your projects with ease on TokenX
            </p>
          </div>
        </div>

        <div className="flex xl:flex-col flex-row w-full xl:w-auto h-full mt-5 bg-[#EFF1F5] rounded-[16px] dark:bg-[#010511]">
          <div className="relative max-w-full xl:max-w-[460px] h-[328px] px-8 rounded-[16px]">
            <div className="flex justify-end">
              <Image
                src="/Works/card2.png"
                alt="card 1"
                width={200}
                height={100}
                objectFit="cover"
                className="rounded-[16px]"
              />
            </div>
            <h2 className="font-bold text-[24px] mb-1 dark:text-white">
              Invest in Tokens
            </h2>
            <p className="w-full mb-5 dark:text-white">
              Buy and sell ERC20 tokens securely through our intuitive platform.
            </p>
          </div>
        </div>
      </div>

      <div className="flex xl:flex-row flex-col gap-4 ">
        <div className="flex flex-col justify-end text-right w-full xl:w-[460px] h-[328px] mt-5 bg-[#EFF1F5] rounded-[16px] dark:bg-[#010511]">
          <h2 className="font-bold text-[24px] mb-1 px-8 dark:text-white">
            Leverage Tokens
          </h2>
          <p className="w-full mb-5 text-right px-8 dark:text-white">
            Utilize your tokens to raise capital and boost your project’s
            potential.
          </p>
          <div className="flex justify-center">
            <Image
              src="/Works/card 3.png"
              alt="card 1"
              width={300}
              height={200}
              objectFit="cover"
            />
          </div>
        </div>

        <div className="flex flex-col h-full mt-5 bg-[#EFF1F5] rounded-[16px] dark:bg-[#010511]">
          <div className="w-full xl:w-[690px] h-[328px] px- py-7 bg-[#EFF1F5] rounded-[16px] dark:bg-[#010511]">
            <div className='px-8'>
              <h2 className="font-bold text-[24px] mb-1 dark:text-white">
                Manage Tokenomics
              </h2>
              <p className="w-full sm:w-[400px]  dark:text-white">
                Keep track of your digital assets and optimize their performance
                with our robust tools.
              </p>
            </div>
            <div className="flex justify-end">
              <Image
                src="/Works/card4.png"
                alt="card 1"
                width={350}
                height={200}
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work