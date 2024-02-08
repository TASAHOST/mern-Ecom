import React from 'react'
const serviceList = [
  {
    id:1,
    title:"good na good goodddd",
    description:"we ma school na but me mai study",
    image:"/images/home/services/assurance.png"
  },
  {
    id:2,
    title:"it's not bad na good mai mak",
    description:"we mai go a school because am sick",
    image:"/images/home/services/fast-delivery.png"
  },
  {
    id:3,
    title:"ไม่รุ้เเล้วอ่ะ",
    description:"มันยาวเอางี้ไปแทนได้ไหมครับ อาจารย์",
    image:"/images/home/services/order.png"
  }
  ,{
    id:4,
    title:"พอ",
    description:"เย้",
    image:"/images/home/services/gift.png"
  }
]

const OurServices = () => {
  return (
  
    <div className="section-container my-16">
     <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2 ">
          <div className="text-left md:w-4/5 ">
            <p className="subtitle"> OUR STORY & SERVICES</p>
            <h2 className="title">OUR Journey and Services</h2>
            <p className="my-5 text-gray-600 leading-[30px]">
              "As a Software developer 5555 sdafasdf fffffsdf fjasdf saf dsd
              dsfsdf sdf sdf sdddddd"
            </p>
            <button className='btn bg-red font-semibold text-white px-8 py-3 rounded-full'>Explore</button>
          </div>
        </div>

        <div className="md:w-1/2">
          <div classname="grid sm:grid-cols-2 grid-cols-1 gap-8 items-center">
           {serviceList.map((service)=> (
            <div
             key={service.id}
             className='shadow-md rounded-sm py-5 px-4 text-center space-y-2 text-white cursor-pointer hover:border hover:border-indigo-600 transition-all duration-200'>
              <img src={service.image} alt="" className='mx-auto h-16' />
              <h5 className='pt-3 font-semibold'>{service.title}</h5>
              <p className='text-rose'>{service.description}</p>
            </div>
           ))}
          </div>
        </div>
      </div>
    </div>

  );
}

export default OurServices