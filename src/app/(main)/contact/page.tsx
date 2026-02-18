"use client";


// import "./style.css";
import Link from "next/link";
import Image from "next/image";
import img1 from "@/public/img/ppc-agencey-2.png";
import img2 from "@/public/img/blog_01.webp";
import { FacebookIcon, InstagramIcon, LinkedinIcon, Mail, MapPin, MessageCircle, Phone, XIcon, YoutubeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import BarSection from "@/src/components/BarSection.tsx/page";
import { Label } from "@/components/ui/label";




const Page = () => {
  const handleSubmit = () => {
    console.log();
  };



  return (
    <>
      {/* <Banner title="Contact Us" /> */}
      <BarSection/>
 
        <div className="max-w-7xl items-center justify-center content-center  mx-2 md:mx-0 lg:mx-auto text-black ">
          {/* top part */}
          <div className="my-5 lg:my-10">
            <div className="lg:flex ">


              <div className="relative lg:w-1/3 h-64  bg-cover bg-center flex flex-col items-center justify-center content-center lg:p-5 overflow-hidden rounded-t-xl md:rounded-t-none md:rounded-l-xl lg:rounded-l-xl xl:rounded-l-xl xxl:rounded-l-xl border ">
                <div className="absolute inset-0 -z-10 ">
                  <Image
                    src={img1}
                    alt="Background"
                    fill
                    className=" "
                    priority
                  />
                </div>
                <div className="absolute inset-0 bg-black opacity-60 " />


                <div className="absolute text-center text-white space-y-4 flex flex-col items-center">
                  <div className="mb-2">
                    <MapPin/>
                  </div>
                  <h3 className="">PHILIPPINE OFFICE</h3>
                  <p className="mt-2">6021 Argao, Cebu, Philippines</p>
                  <p className="mt-2">eugenia@nsintbd.com</p>
                </div>
              </div>


              <div className="relative w-[400px] lg:w-1/3  h-[300px] -ml-3 lg:-mt-[22px]  rounded-lg flex flex-col items-center justify-center content-center p-5 text-black">
                <div className="absolute inset-0 opacity-50" />
                <div className="relative z-10 text-center flex flex-col items-center justify-center space-y-4">
                  <div className="">
                    <MapPin/>
                  </div>
                  <h3 className="">DHAKA OFFICE</h3>
                  <p className="mt-2">
                    House-376/5, East Kazipara, Mirpur, Dhaka-1216
                  </p>
                  <p className="mt-2">info@nsintbd.com</p>
                </div>
              </div>

              <div className="relative lg:w-1/3 h-64 bg-cover bg-center flex flex-col items-center justify-center content-center lg:p-5 overflow-hidden rounded-b-xl md:rounded-b-none md:rounded-r-xl lg:rounded-r-xl xl:rounded-r-xl xxl:rounded-r-xl border ">
                <div className="absolute inset-0 -z-10 ">
                  <Image
                    src={img2}
                    alt="Background"
                    fill
                    className=""
                    priority
                  />
                </div>
                <div className="absolute inset-0 bg-black opacity-70 " />
                <div className="absolute text-center text-white space-y-4 flex flex-col items-center">
                  <div className="">
                    <MapPin/>
                  </div>


                  <h3 className="">FRANCE OFFICE</h3>
                  <p className="mt-2">
                    1 Rue Sarrail, 93800 Epinay-sur-Seine, France.
                  </p>
                  <p className="mt-2">m.ziani@nsintbd.com</p>
                </div>
              </div>
            </div>
          </div>


          {/* middle part */}
          <div className="lg:max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:gap-10 mx-auto  px-1 md:px-8 lg:px-10 py-1 md:py-5 lg:py-5  text-gray-800  justify-center ">
            <div className="p-2 lg:p-12 shadow-lg border border-white rounded-lg " >
              <div onSubmit={handleSubmit}>
                <div className="space-y-3 lg:space-y-8 " data-aos="fade-up-right">
                  <div>
                    <Label className="mb-2">Name</Label>
                    <Input
                      name="name"
                      className="text-black "
                      type="email" 
                      placeholder="name"
                      
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email" 
                      placeholder="Email"
                      
                    />
                  </div>
                  <div>
                    <Input
                      name="phone"
                     
                   
                  
                    />
                  </div>
                  <div>
                    <Input
                      name="cname"
                      
                    />
                  </div>
                  <div>
                    <Input
                      name="sub"
                     
                    />
                  </div>


                  <div>
                    <Textarea
                      name="textarea"
                     
                      placeholder="Write Your Message"
        
                    />
                  </div>


                  <Button >Send Message</Button>
                </div>
              </div>
            </div>


            <div className="lg:w-full" >
              <div className="space-y-6 mt-10" >
                <div>
                  <h5 className="border-b-4 border-blue-700 inline-block pb-2">
                    Contact Us
                  </h5>
                </div>
                <h1 className=" text-gray-800">Get In Touch</h1>
                <p className="text-lg text-gray-600 text-justify">
                  We&apos;re always here to assist you with any questions or
                  support you need. Feel free to reach out to us through the
                  following options.
                </p>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-10" data-aos="fade-left">
                  <div className="flex items-center space-x-4">
                    <div className="p-4 bg-blue-700 text-white rounded-full">
                      <MapPin />
                    </div>
                    <div>
                      <h4 className="font-bold">Office Location</h4>
                      <p className="text-sm text-gray-600">
                        House-376/5, East Kazipara, Mirpur, Dhaka, Bangladesh.
                      </p>
                    </div>
                  </div>


                  <div className="flex items-center space-x-4 mt-[10px]">
                    <div className="p-4 bg-blue-700 text-white rounded-full">
                      <Mail />
                    </div>
                    <div>
                      <h4 className="font-bold">Email</h4>
                      <p className="text-sm text-gray-600">
                        contact@company.com
                      </p>
                    </div>
                  </div>


                  <div className="flex items-center space-x-4">
                    <div className="p-4 bg-blue-700 text-white rounded-full">
                      <Phone />
                    </div>
                    <div>
                      <h4 className="font-bold">Phone</h4>
                      <h5 className="text-sm text-gray-600">
                        +880 1917-847198
                      </h5>
                    </div>
                  </div>


                  <div className="flex items-center space-x-4 mt-[10px]">
                    <div className="p-4 bg-blue-700 text-white rounded-full">
                      <MessageCircle />
                    </div>
                    <div>
                      <h4 className="font-bold">Whatsapp</h4>
                      <p className="text-sm text-gray-600">+880 1917-847198</p>
                    </div>
                  </div>
                </div>


                <hr className="my-8 border-t-2 border-gray-300" />


                {/* Social Media  */}
                <h3 className=" text-gray-800">Our Social Media</h3>
                <div className="flex flex-wrap justify-start gap-2 mt-4 space-x-1 " data-aos="fade-left">
                  {/* fb */}
                  <Link href="https://facebook.com" className="">
                    <button className="p-2 bg-blue-600 text-white rounded-full">
                      <FacebookIcon />
                    </button>
                  </Link>


                  {/* x */}
                  <Link href="https://instagram.com" className="">
                    <button className="p-2 bg-black text-white rounded-full">
                      <XIcon />
                    </button>
                  </Link>


                  {/* youtube */}
                  <Link href="https://twitter.com" className="">
                    <button className="p-2 bg-red-600 text-white rounded-full">
                      <YoutubeIcon />
                    </button>
                  </Link>


                  {/* instagram */}
                  <Link href="https://twitter.com" className="">
                    <button className="p-2 bg-[#E1306C] text-white rounded-full">
                      <InstagramIcon />
                    </button>
                  </Link>


                  {/* LinkedIn */}
                  <Link href="https://twitter.com" className="">
                    <button className="p-2 bg-[#0A66C2] text-white rounded-full">
                      <LinkedinIcon />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
   
      <div className="shadow-md rounded border mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1075.1518268683578!2d90.42238324968673!3d23.820644750680454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c700ff992a63%3A0xbdcb1d9ae66b2d5c!2sSoftypi%20Technology!5e0!3m2!1sen!2sbd!4v1711790838610!5m2!1sen!2sbd"
          className="w-full h-64 md:h-[500px] lg:h-[600px]"
          style={{ border: "0" }}
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
};


export default Page;
