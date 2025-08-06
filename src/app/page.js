"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IoSearchOutline } from "react-icons/io5";
import { FaFilter } from "react-icons/fa";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Autoplay from "embla-carousel-autoplay";
import { Separator } from "@/components/ui/separator";
import CountdownTimer from "@/components/ui/countdown-timer";
import { blogs, categories, jobList, locations } from "@/lib/static";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Home() {
  const contents = [
    {
      id: 0,
      content: (
        <div className="w-full h-full bg-[#39b54a] rounded-xl text-black p-5 cursor-pointer flex justify-center items-center">
          <Image
            src="/header_hrdcorp_claimable_training_programs_banner_april_1.webp"
            alt="hrdcorp_claimable_training_programs_banner_april_1"
            width={400}
            height={400}
          />
        </div>
      ),
    },
    {
      id: 1,
      content: (
        <div className="w-full h-full relative rounded-xl border cursor-pointer">
          <Image
            src="/header_my_banner.webp"
            alt="header_my_banner"
            fill
            className="object-cover rounded-xl"
          />
          <div className="absolute flex justify-center items-center w-full h-full">
            <p className="text-center text-black text-4xl font-bold">
              Government
              <br /> Job Vacancy
            </p>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full h-full">
      <div className="w-full flex flex-col lg:grid grid-cols-6 bg-[#f8f8f8] px-10">
        <div className="grid col-span-4 p-5 gap-5">
          <div className="bg-yellow-300 p-5 rounded-xl flex flex-col lg:flex-row gap-5 justify-around items-center">
            <CountdownTimer
              targetDate="2025-10-04T09:00:00"
              className="text-black"
              showLabels={true}
            />
            <Separator orientation="vertical" className={"hidden lg:block"} />
            <Image
              src="/mycareerfair_logo_heart_white.webp"
              alt="mycareerfair"
              width={1000}
              height={1000}
              className="w-1/2 lg:w-1/4"
            />
            <div className="text-black">
              <p className="text-lg font-bold">4 & 5 October 2025</p>
              <p>Sunway Pyramid Convention Centre (SPCC)</p>
            </div>
          </div>
          <div className="h-fit bg-blue-600 shadow-xl rounded-xl px-5">
            <div className="flex justify-between pt-5">
              <p className="text-white text-xl font-bold">
                Find your ideal job
              </p>
              <Button
                className={
                  "text-black bg-white cursor-pointer hover:text-black hover:bg-blue-500"
                }
              >
                Browse Jobs
              </Button>
            </div>
            <div className="flex gap-5 text-sm">
              <p className="cursor-pointer underline text-white">
                Trending Jobs
              </p>
              <p className="cursor-pointer underline text-white">
                Highest Paying Jobs
              </p>
              <p className="cursor-pointer underline text-white">Internship</p>
              <p className="cursor-pointer underline text-white">Recruiter</p>
            </div>
            <div className="w-full h-fit rounded-xl pt-4 pb-5 flex flex-col lg:flex-row gap-5">
              <Input
                className={"bg-white"}
                placeholder="What kind of job are you looking for?"
              />
              <Input
                className={"bg-white"}
                placeholder="Where do you want to work?"
              />
              <Button
                className={
                  "bg-white text-black cursor-pointer hover:text-black hover:bg-blue-500"
                }
              >
                <IoSearchOutline />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {jobList.map((job, idx) => (
              <div
                key={idx}
                className="max-h-40 md:max-h-30 bg-white shadow-lg/25 rounded-xl p-5 flex  items-center justify-between cursor-pointer"
              >
                <div className="truncate">
                  <p className="max-w-50 text-black text-sm lg:text-lg font-bold overflow-hidden text-ellipsis">
                    {job.title}
                  </p>
                  <p className="text-black text-sm overflow-hidden text-ellipsis whitespace-nowrap">
                    {job.company}
                  </p>
                  <p className="text-black text-sm overflow-hidden text-ellipsis whitespace-nowrap">
                    {job.pay}
                  </p>
                  <p className="text-black text-sm overflow-hidden text-ellipsis whitespace-nowrap">
                    {job.employmentType}
                  </p>
                </div>
                <Image
                  src={job.icon}
                  alt="job_logo"
                  width={100}
                  height={100}
                  className="w-10 lg:w-20"
                />
              </div>
            ))}
          </div>
          <div className="w-full text-black rounded-xl p-5">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">4</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
        <div className="col-span-2 p-5 flex flex-col gap-5">
          <div className="flex justify-center">
            <Carousel
              className="w-full"
              opts={{
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 2500,
                }),
              ]}
            >
              <CarouselContent className={"h-62"}>
                {contents.map((content) => (
                  <CarouselItem key={content.id}>
                    {content.content}
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <div className="border rounded-xl p-5 flex flex-col gap-5">
            <div className="flex gap-3 items-center">
              <FaFilter className="text-black" />
              <p className="text-black text-lg font-bold">Filter By</p>
            </div>
            <div className="flex flex-col gap-5">
              <Select>
                <SelectTrigger className="w-full rounded-full bg-white">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((item) => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full rounded-full bg-white">
                  <SelectValue placeholder="All Locations" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((item) => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="flex flex-col gap-2">
                <p className="text-black">Salary Range</p>
                <div className="flex items-center gap-2">
                  <Input
                    className={"bg-white p-5 rounded-full"}
                    placeholder="Min"
                  />
                  <p className="text-black">-</p>
                  <Input
                    className={"bg-white p-5 rounded-full"}
                    placeholder="Max"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="border rounded-xl p-5 flex flex-col gap-5">
            <div className="flex justify-between items-center">
              <p className="text-black text-lg font-bold">
                Check out our blog posts
              </p>
              <p className="text-sm text-black font-bold underline cursor-pointer">
                View All
              </p>
            </div>
            <div className="flex flex-col gap-5">
              {blogs.map((blog, idx) => (
                <div key={idx} className="bg-white rounded-xl flex">
                  <div className="w-1/2 flex flex-col gap-2 p-5">
                    <p className="text-black text-sm lg:text-lg font-bold">
                      {blog.title}
                    </p>
                    <p className="text-sm">{blog.date}</p>
                  </div>
                  <div className="w-1/2 h-auto relative">
                    <Image
                      src={blog.image}
                      alt="blog"
                      fill
                      className="object-cover rounded-r-xl"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
