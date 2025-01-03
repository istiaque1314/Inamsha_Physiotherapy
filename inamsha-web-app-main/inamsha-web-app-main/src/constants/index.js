
//icon
import {
    RxCrop,
    RxDesktop,
    RxPencil2,
    RxReader,
    RxRocket,
    RxAccessibility,
  } from "react-icons/rx";
  
  
  // image
  import Physiotherapy from "../assets/Physiotherapy.jpg";
  import Rehabitation from "../assets/Rehabitation.jpg";
  import Homecare from "../assets/Homecare.jpg";
  import KnotRelease from "../assets/KnotRelease.jpg";
  import Accessory1 from "../assets/Accessory1.jpg";
  import Nurse from "../assets/Nurse.jpg";
  
  export const ServiceData = [
    {
      icon: RxCrop,
      title: "Physiotherapy",
      content: "We offer personalized physiotherapy sessions designed to address your unique needs and goals as per your medical history.",
      backgroundImage: Physiotherapy,
    },
    {
      icon: RxPencil2,
      title: "Rehabilitation",
      content: "We offer comprehensive rehabilitation sessions to help you regain function, mobility, and independence following injury, surgery, or illness using a treatment plan.",
      backgroundImage: Rehabitation,
    },
    {
      icon: RxDesktop,
      title: "Home Care",
      content: "We have a group of skilled caregivers to offer personalized home care services to individuals in the comfort of their own homes.",
      backgroundImage: Homecare,
    },
    {
      icon: RxReader,
      title: "Knot releases",
      content: "We specialize in Knot Release sessions designed to alleviate muscle tension, reduce pain, and promote overall relaxation amongst our patients",
      backgroundImage: KnotRelease,
    },
    {
      icon: RxAccessibility,
      title: "Physiotherapy Accessories",
      content: "We offer a variety of physiotherapy accessories designed to enhance your therapy sessions and support your rehabilitation journey.",
      backgroundImage: Accessory1,
    },
    {
      icon: RxRocket,
      title: "Nurses",
      content: "We provide reliable and compassionate nursing services to support individuals in need of skilled medical care and assistance.",
      backgroundImage: Nurse,
    },
  ];