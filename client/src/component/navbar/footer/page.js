import Image from 'next/image'
import React from 'react'

const FooterNavbar = () => {
  return (
    <div className="font-serif">
      <div className=" border border-inherit bg-orange-400">
        <div className="p-4 m-4 gap-16 flex justify-center break-words bg-orange-400">
        <div className="flex flex-col">
          <p className="font-bold">Shop</p>
          <a href="#">Coupons</a>
          <a href="#">Money-back guarentee</a>
          <a href="#">Buying help</a>
        </div>
        <div className="flex flex-col">
          <p className="font-bold">Sell</p>
          <a href="#">Sell on website</a>
          <a href="#">Affilates</a>
          <a href="#">Learn to sell</a>
          <a href="#">Forums</a>
        </div>
        <div className="flex flex-col">
  <a className="font-bold ">Stay Connected</a>
  <div className="flex flex-row items-center gap-2">
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
      <Image src="/facebook.png" width={50} height={50}/>
    </a>
    <div className=" flex gap-4">
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
      <Image src="/instagram.jpg" width={30} height={50} className="border border-solid rounded-full"/>
    </a>
    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
      <Image src="/x.jpg" width={30} height={50} className="border border-solid rounded-full"/>
    </a>
    </div>
  </div>
</div>

        <div className="flex flex-col">
          <p className="font-bold">Help</p>
          <a href="#">Help center</a>
          <a href="#">Privacy setting</a>
        </div>
        </div>
        <div className="flex justify-center m-3 gap-7">
          <a href="#" className="hover:underline">Copyright@</a>
          <a href="#" className="hover:underline">Terms and Services</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Cookies</a>
        </div>  
      </div>
    </div>
  )
}

export default FooterNavbar