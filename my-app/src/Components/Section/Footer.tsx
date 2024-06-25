import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0243EA]">
      <div className="mx-auto w-full max-w-screen-xl p-4 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Image
              src="/Footer/footer.png"
              width={230}
              height={66}
              alt="logo"
            />
            <h1 className="text-[16px] text-white mb-3 mt-8">
              info.tokenX@gmail.com
            </h1>
            <h2 className="text-[16px] text-white">+005 765 1862 8822</h2>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-[20px] font-semibold text-white  dark:text-white">
                Links
              </h2>
              <ul className="text-white text-[16px]">
                <li className="mb-4">
                  <a className="hover:underline">Project</a>
                </li>
                <li className="mb-4">
                  <a className="hover:underline">How It works</a>
                </li>
                <li>
                  <a className="mb-4 hover:underline">FAQ</a>
                </li>
              </ul>
            </div>

            <div className="grid col-start-4">
              <h2 className="mb- text-[20px] font-semibold text-white">
                Social Media
              </h2>
              <div className="flex justify-center gap-4">
                <div>
                  <Image
                    src="/Icon/Twitter.png"
                    width={30}
                    height={30}
                    alt=""
                  />
                </div>
                <div>
                  <Image
                    src="/Icon/Instagram.png"
                    width={30}
                    height={30}
                    alt=""
                  />
                </div>
                <div>
                  <Image
                    src="/Icon/Linkedin.png"
                    width={30}
                    height={35}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="border my-6 w-full" />
        <div className="sm:flex sm:items-center sm:justify-around">
          <div className="flex gap-2" >
            <Image src="/Icon/c.png" width={24} height={20} alt="logo" />
            <h1 className="text-white">TokenX,Inc</h1>
          </div>

          <h1 className="text-white">Terms</h1>
          <h1 className="text-white">Privacy Policy</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
