import { Book, Caravan, Glasses, Globe, Map } from "lucide-react";
import { CiMedicalMask } from "react-icons/ci";
import {
  FaAmbulance,
  FaBurn,
  FaDna,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { FaHeartPulse } from "react-icons/fa6";
import { GiFirstAidKit } from "react-icons/gi";
import { IoBandage, IoBody } from "react-icons/io5";

export const healthInsurances = [
  { name: "Medicare", image: "/assets/health-insurances/Medicare.png" },
  {
    name: "Blue Cross Blue Shield",
    image: "/assets/health-insurances/Bluecross-Blueshield.png",
  },
  { name: "Aetna", image: "/assets/health-insurances/Aetna.png" },
  { name: "Meridian", image: "/assets/health-insurances/Meridian.png" },
  {
    name: "Railroad Medicare",
    image: "/assets/health-insurances/Railroad.png",
  },
  { name: "Ambetter", image: "/assets/health-insurances/Ambetter.png" },
];

export const goals = [
  {
    topic: "National Coverage",
    text: "Nationwide provision of wound care to all individuals in need of wound care services.",
    icon: Map,
  },
  {
    topic: "Educational Awareness",
    text: "Wound healing and prevention care education.",
    icon: Book,
  },
  {
    topic: "Mobile Aid",
    text: "Skilled mobile wound care service that is caring and brings comfort to patients.",
    icon: Caravan,
  },
  {
    topic: "Expert Personnel",
    text: "Elite skilled health care professionals who train and treat wounds.",
    icon: Glasses,
  },
  {
    topic: "Global Training",
    text: "Global wound care training and professional development Focused on wound care.",
    icon: Globe,
  },
];

export const services = [
  {
    icon: FaAmbulance,
    name: "Severe and Chronic Wound Care",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    backgroundUrl: "/assets/services/cardSvgs/card-1.svg",
    imageUrl: "/assets/services/chronic.jpg",
  },
  {
    icon: IoBody,
    name: "Diabetic Ulcer",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    backgroundUrl: "/assets/services/cardSvgs/card-1.svg",
    imageUrl: "/assets/services/diabetic.jpg",
    light: true,
  },
  {
    icon: FaDna,
    name: "Arterial Ulcer",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    backgroundUrl: "/assets/services/cardSvgs/card-6.svg",
    imageUrl: "/assets/services/arterial.jpg",
  },
  {
    icon: FaHeartPulse,
    name: "Venous Ulcers",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    backgroundUrl: "/assets/services/cardSvgs/card-6.svg",
    imageUrl: "/assets/services/venous.jpg",
  },
  {
    icon: GiFirstAidKit,
    name: "Pressure Ulcers",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    backgroundUrl: "/assets/services/cardSvgs/card-1.svg",
    imageUrl: "/assets/services/pressure.jpg",
  },
  {
    icon: CiMedicalMask,
    name: "Surgical Wound",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    backgroundUrl: "/assets/services/cardSvgs/card-1.svg",
    imageUrl: "/assets/services/surgical.jpg",
  },
  {
    icon: FaBurn,
    name: "Burns",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    backgroundUrl: "/assets/services/cardSvgs/card-1.svg",
    imageUrl: "/assets/services/burns.jpg",
    light: true,
  },
  {
    icon: IoBandage,
    name: "Traumatic Wound",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    backgroundUrl: "/assets/services/cardSvgs/card-6.svg",
    imageUrl: "/assets/services/traumatic.jpg",
  },
];

export const testimonials = [
  {
    image: "/assets/testimonials/t-avt-1.jpg",
    name: "Anne Smith",
    position: "Patient",
    message:
      "A well rounded software developer, Mr. Greg was able to handle so many areas in the development of my app.",
  },
  {
    image: "/assets/testimonials/t-avt-2.jpg",
    name: "Jane Doe",
    position: "Patient",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
  {
    image: "/assets/testimonials/t-avt-3.jpg",
    name: "Jhon Doe",
    position: "Patient",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
];

export const FAQS = [
  {
    question: "Patient referral FWI company?",
    answer:
      "Patient referral can be done by simply call us at 708-271-3537, or email referral form to footwoundinstitute7@gmailcom, or fill out our online referral form available on our website. FWI will respond to your request in 24-48 hours.",
  },
  {
    question: "Information needed to complete referral form",
    answer:
      "Patient’s demographic information, medical history insurance card information, medication, and wound care needs. All information provided will be used to provide a detailed plan of care for each patient. Please find referral form attached ",
  },
  {
    question: "Will testing and laboratory be done?",
    answer:
      "Yes we will provide laboratory testing of wound to make sure wound is not have an infection , we will also provide testing for Peripheral Arterial Disease  and diabetes a1c test.",
  },
  {
    question: "Does FWI offer Skin Grafting?",
    answer:
      "Yes we do offer skin grafting treatment, mostly these are  covered by insurance companies, skin grafting will provide an additional advantage to healing and is highly recommended for wound that qualifies.",
  },
  {
    question: "Do You Provide Wound care supplies for your patients?",
    answer:
      "Yes FWI provides wound care supplies, after initial evaluation is done, FWI skilled wound care expert will develop a plan of care and supplies will be shipped out to patients home withing 5-7 business days.",
  },
  {
    question: "What location does FWI cover?",
    answer:
      "Currently we cover the Chicago land area which includes the south, north and west area of Chicago city , inner city and suburb areas. We provide care in 24-48 hours after a referral is received. ",
  },
  {
    question: "Does FWI provide weekly care at home?",
    answer:
      "Yes FWI wound care services will be provided once a week in patients home, rehabilitation centers, skilled nursing care facilities, hospice care homes. We do provide wound care education and training to patients family and visiting nurse.",
  },
  {
    question:
      "Does FWI provide notes to skilled nursing rehabilitation center, hospice/palliative care centers and any other facilities who refer wound care patients?",
    answer:
      "Yes FWI will send weekly updated notes and plan of care for each patient wound care treatment, also a weekly tele communication update will be done with patients case manage at each facility.",
  },
];

export const gallery = [
  {
    image: "/assets/gallery/clean-wound-wraps.jpg",
    title: "Clean Wound Wraps",
  },
  {
    image: "/assets/gallery/debridement-of-wound.jpg",
    title: "Debridement Of Wound",
  },
  { image: "/assets/gallery/wound-swab.jpg", title: "Wound Swab" },
  {
    image: "/assets/gallery/foot-ulcer-treatment.jpg",
    title: "Foot Ulcer Treatment",
  },
  {
    image: "/assets/gallery/surgical-wound-care.png",
    title: "Surgical Wound Care",
  },
];

export const socials = [
  {
    name: "facebook",
    link: "https://facebook.com/",
    icon: FaFacebook,
  },
  {
    name: "instagram",
    link: "https://instagram.com/",
    icon: FaInstagram,
  },
];
