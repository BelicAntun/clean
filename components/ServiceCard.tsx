import React from 'react';
import Image from 'next/image';

const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <div className="flex flex-col xs:flex-row gap-2 bg-white p-6 border rounded-lg shadow-md">
      <div className="flex flex-col flex-1 gap-3">
        <h2 className="text-xl text-blue-500 font-semibold mb-2">
          {service.title}
        </h2>
        <p className="text-gray-500 mb-2 italic">{service.price}</p>
        <ul className="list-disc text-gray-700 pl-5 flex flex-col gap-2">
          {service.services.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="flex  justify-center items-center">
        <Image
          src={service.image}
          alt={service.title}
          width={144}
          height={144}
          className="h-auto"
          priority
        />
      </div>
    </div>
  );
};

export default ServiceCard;

type Service = {
  title: string;
  price: string;
  services: string[];
  image: string;
};
