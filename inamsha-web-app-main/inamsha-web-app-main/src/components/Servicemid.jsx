
import React, { useCallback } from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const servicesData = [
  {
    name: "Physiotherapy and Rehabilitation",
    icon: (
      <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: [
      "Tailored treatment sessions.",
      "Rehabilitation programs.",
      "Personalized care by experts.",
      "Live consultations available.",
    ],
    duration: "Customized",
    aosDelay: "0",
  },
  {
    name: "Caregiver Service",
    icon: (
      <GiNotebook className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: [
      "Experienced caregivers available.",
      "Assistance with daily activities.",
      "In-home care services.",
      "Personalized attention to patient needs.",
    ],
    duration: "As needed",
    aosDelay: "500",
  },
  {
    name: "Physiotherapy Accessories",
    icon: (
      <SlNote className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "#",
    description: [
      "High-quality accessories for therapy.",
      "Equipment for home exercise programs.",
      "Customized solutions for different needs.",
      "Expert guidance on product selection.",
    ],
    duration: "N/A",
    aosDelay: "1000",
  },
];

const ServiceCard = React.memo(({ service, handleContact }) => {
  return (
    <div
      key={service.name}
      data-aos="fade-up"
      data-aos-delay={service.aosDelay}
      className="card text-center space-y-3 sm:space-y-6 p-4 sm:py-16 bg-slate-900  hover:bg-slate-800  duration-300 text-white  rounded-lg group"
    >
      <div className="grid place-items-center">{service.icon}</div>
      <h1 className="text-3xl font-bold">{service.name}</h1>
      {service.description.map((desc, index) => (
        <p key={index}>{desc}</p>
      ))}
      <p className="font-semibold text-2xl">Duration: {service.duration}</p>
      <button
        onClick={() => handleContact("916289213173")}
        className="primary-btn mt-4 group-hover:scale-105  px-6 py-3 rounded-md duration-200 bg-white hover:bg-gray-400 text-slate-900 "
      >
        Contact Us
      </button>
    </div>
  );
});

const Servicemid = () => {
  const handleContact = useCallback((phoneNumber) => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  }, []);

  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-white dark:text-white py-14 sm:min-h-[600px] sm:grid sm:place-items-center bg-white">
        <div className="container">
          <div className="pb-12">
            <h1
              data-aos="fade-up"
              className="text-3xl font-bold text-center sm:text-4xl"
            >
              Why <span className="text-primary">Choose</span> Us
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {servicesData.map((service) => (
              <ServiceCard
                key={service.name}
                service={service}
                handleContact={handleContact}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Servicemid;
