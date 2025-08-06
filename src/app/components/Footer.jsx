"use client";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  about,
  corporate,
  jobseekers,
  jobstores,
  resources,
  socials,
} from "@/lib/static";

const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-5 p-15">
      <div className="w-full lg:w-5/6 flex flex-col lg:flex-row justify-center items-center lg:items-start gap-30 p-10">
        <div className="">
          <Image
            src={"/jobstore_logo_blue.png"}
            alt="logo"
            width={150}
            height={150}
          />
          <div className="mt-5">
            <Select defaultValue={jobstores[0]}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Jobstore" />
              </SelectTrigger>
              <SelectContent>
                {jobstores.map((item) => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-15 lg:gap-30">
          <div className="flex gap-15 lg:gap-30">
            <div className="text-sm">
              <p className="font-bold mb-5">JOBSEEKERS</p>
              {jobseekers.map((item) => (
                <p key={item} className="cursor-pointer hover:text-blue-800">
                  {item}
                </p>
              ))}
            </div>
            <div className="text-sm">
              <p className="font-bold mb-5">CORPORATE</p>
              {corporate.map((item) => (
                <p key={item} className="cursor-pointer hover:text-blue-800">
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="flex gap-15 lg:gap-30">
            <div className="text-sm">
              <p className="font-bold mb-5">ABOUT</p>
              {about.map((item) => (
                <p key={item} className="cursor-pointer hover:text-blue-800">
                  {item}
                </p>
              ))}
            </div>
            <div className="text-sm">
              <p className="font-bold mb-5">ABOUT</p>
              {resources.map((item) => (
                <p key={item} className="cursor-pointer hover:text-blue-800">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-4/6 flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col lg:flex-row items-center gap-5 mt-5 lg:mt-0">
          <p className="text-sm font-semibold">
            © 2025 Jobstore. All rights reserved.{" "}
          </p>
          <div className="flex items-center gap-3">
            {socials.map((social, idx) => (
              <Image
                key={idx}
                src={`/${social}`}
                alt="social"
                width={25}
                height={25}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-5 my-5 lg:my-0">
          <Image
            src={"/icon_app_applestore_white.webp"}
            alt="app_store"
            width={120}
            height={120}
            className="cursor-pointer"
          />
          <Image
            src={"/icon_app_googleplaystore_white.webp"}
            alt="google_play"
            width={120}
            height={120}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
