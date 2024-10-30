import CustomNavbar from '@/component/navbar/header/page';
import React from 'react';
import Product from '../page';
import FooterNavbar from '@/component/navbar/footer/page';


const productDetail=[
{ price:"199.00", image:"https://imgs.search.brave.com/2ht0u4aAE02jDF1Tadp0LDQmWsydZ39b-1jRT3DpdaY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5nb2F0LmNvbS90/cmFuc2Zvcm0vdjEv/YXR0YWNobWVudHMv/cHJvZHVjdF90ZW1w/bGF0ZV9hZGRpdGlv/bmFsX3BpY3R1cmVz/L2ltYWdlcy8wNzkv/NTk3LzI1NC9vcmln/aW5hbC8xMzU2M18w/MS5qcGcuanBlZz9h/Y3Rpb249Y3JvcCZ3/aWR0aD03NTA"
}
]
const size=[40,41,42,43,44,45,46]
const Thumbnail=[
{image:"https://imgs.search.brave.com/QtX-izwgOIVHIG8wTK7e7ddaxrYUUzkZURdzLOkSJdM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zbmVh/a2VybmV3cy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjMv/MDIvam9yZGFuLTEt/aGktODUtYmxhY2st/d2hpdGUtYnE0NDIy/LTAwMS1zdG9yZS1s/aXN0LTEuanBn"},
{image:"https://imgs.search.brave.com/EuSUsFBmdYV1RUFzmAqiIlnWaKfXWhGdOWm8CyP0VHM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zbmVh/a2VybmV3cy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjIv/MTAvYWlyLWpvcmRh/bi0xLWhpLTg1LWJs/YWNrLXdoaXRlLUJR/NDQyMi0wMDEtMS5q/cGc"},
{image:"https://imgs.search.brave.com/01tEirfNpqioQiXfUD06_WfV68FHAdcOtVrlYJEW30c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9haXIt/am9yZGFuLTEtaGln/aC1oZXJvLTE2NzYw/NDI4NTQuanBnP2Ny/b3A9MC41eHc6MXho/O2NlbnRlcix0b3Am/cmVzaXplPTY0MDoq"},
]

const ProductPage = () => {
  return (
    <div className="font-mono">
      <CustomNavbar/>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full p-8 bg-gray-200 rounded-lg shadow-md flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <div className="mb-6">
            {productDetail.map((item,index)=>(
 <img
 key={index}
 src={item.image}
 className="w-full h-auto rounded-lg"
/>
            ))}
          </div>
          <div className="flex gap-4">
          {Thumbnail.map((item,index)=>(
            <img
            key={index}
            src={item.image}
            className="w-24 h-24 object-cover rounded-lg cursor-pointer border-2 border-gray-300"
          />
          ))}
          </div>
        </div>
        
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">Shoes Reebok Zig Kinetica 3</h2>
          
          <div className="flex items-center mb-4">
            <span className="text-yellow-500 text-xl">★★★★★</span>
            <p className="ml-2 text-sm text-gray-500">(42 reviews)</p>
          </div>
          {productDetail.map((item,index)=>(
          <p className="text-2xl font-semibold mb-6">
          ${item.price}
          </p>
          ))}
          
          <div className="mb-4">
            <p className="text-lg font-medium mb-2">Color:</p>
            <div className="flex gap-3">
              <span className="w-8 h-8 rounded-full border border-gray-300 bg-white cursor-pointer"></span>
              <span className="w-8 h-8 rounded-full border border-gray-300 bg-black cursor-pointer"></span>
              <span className="w-8 h-8 rounded-full border border-gray-300 bg-gray-500 cursor-pointer"></span>
            </div>
          </div>
          
          <div className=" flex mb-4 gap-2">
            <p className="text-lg font-medium mb-2">Size:</p>
            <div className="grid grid-cols-4 gap-2">
<div className="grid grid-cols-4 gap-2 w-80">
  {size.map((item, index) => (
    <button
      key={index}
      className=" h-15 flex items-center justify-center text-lg font-semibold rounded-md border border-gray-300 bg-white"
    >
      {item}
    </button>
  ))}
</div>

            </div>
          </div>
          
          <div className="mb-4">
            <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors">
              Add to Cart
            </button>
            <p className="text-sm text-gray-500 mt-2">Free delivery on orders over $50.00</p>
          </div>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto p-8 bg-gray-100 mt-8 rounded-lg">
        <h3 className="text-2xl font-bold mb-4">Related Products</h3>
        <Product/>
      </div>
      <FooterNavbar/>
  </div>
  );
};

export default ProductPage;
