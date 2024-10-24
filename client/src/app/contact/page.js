import FooterNavbar from '@/component/navbar/footer/page';
import CustomNavbar from '@/component/navbar/header/page';
import { Input, Button, Textarea, CardBody, Card } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";

const Website = () => {
  return (
    
    <div className="flex flex-col font-serif bg-orange-400"><CustomNavbar/>
      <div className="flex flex-col font-serif lg:flex-row p-8  bg-orange-400">
        <Image
          src="https://imgs.search.brave.com/Me3qtPcpYRq9drnYiGoWb6GXRM9_xuvOwjLMpeqDJkg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/Y29udGFjdC11cy1p/bWFnZS5qcGc_d2lk/dGg9MTAwMCZmb3Jt/YXQ9cGpwZyZleGlm/PTAmaXB0Yz0w"
          alt="Contact Us"
          width={600}
          height={600}
          className="m-3 border border-solid border-zinc-300 rounded-lg shadow-lg"
        />
        <div className="flex flex-col justify-center p-6 bg-white shadow-lg rounded-lg w-full max-w-lg">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Get In Touch</h2>
          <label className="p-1 font-serif text-base text-gray-600">Full Name</label>
          <Input
            isRequired
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Enter your Full Name"
            className="mb-4"
            width="100%"
          />
          <label className="p-1 font-serif  text-base text-gray-600">Email</label>
          <Input
            isRequired
            id="email"
            name="email"
            type="email"
            placeholder="Enter your Email"
            className="mb-4"
            width="100%"
          />
          <label className="p-1 font-serif text-base text-gray-600">Message</label>
          <Textarea
            isRequired
            id="message"
            name="message"
            placeholder="Type your message here..."
            className="mb-4"
            width="100%"
            rows={5}
          />
          <Button className="mt-4 w-full bg-orange-600">Submit</Button>
        </div>
      </div>

      <div className="flex flex-row  font-serif justify-center gap-4 p-8">
        <Card className="p-4 m-4 w-60 h-45 border border-inherit break-words">
          <div className="flex justify-center">
            <p className="text-6xl"><IoCallOutline/>
            </p>
          </div>
          <p className="flex justify-center font-bold">Talk to the sales</p>
          <p className="m-1 p-3">Just pick up a phone to chat with a member of the team</p>
          <p className="m-1 font-medium">+977 980000000</p>
        </Card>

  <Card className="p-4 m-4 w-60 h-45 border border-inherit break-words">
    <div className="flex justify-center">
        <p className="text-6xl"><CiLocationOn/></p>
    </div>
    <p className="flex justify-center font-bold">Find Us</p>
    <p className="m-1 p-3">Visit our nearest office for direct assistance</p>
    <p className="m-1 font-medium">Location</p>
  </Card>

  
  <Card className="p-4 m-4 w-60 h-45 border border-inherit break-words">
    <div className="flex justify-center">
        <p className="text-6xl"><HiOutlineMail /></p>
    </div>
    <p className="flex justify-center font-bold">Email Us</p>
    <p className="m-1 p-3">Send us an email and we’ll get back to you shortly</p>
    <p className="m-1 font-medium">info@example.com</p>
  </Card>
</div>
<FooterNavbar/>
</div>
  );
};

export default Website;
