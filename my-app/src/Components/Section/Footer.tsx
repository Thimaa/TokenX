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
            <h1>info.tokenX@gmail.com</h1>
            <h2>+005 765 1862 8822</h2>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-[20px] font-semibold text-gray-900 uppercase dark:text-white">
                Links
              </h2>
              <ul className="text-white text-[16px]">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">
                    Project
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    How It works
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="mb-4 hover:underline"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div className="grid col-start-4">
              <h2 className="mb- text-[20px] font-semibold text-gray-900 uppercase dark:text-white">
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
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Flowbite™
            </a>
            . All Rights Reserved.
          </span>
        </div>
        <hr className="flex justify-start w-[1380px] border " />
      </div>
    </footer>
  );
};

export default Footer;
