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

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "FWI - Home",
  description: "On a mission to Heal Wounds",
  navItems: [
    {
      label: "Referral",
      href: "/referral",
    },
    { label: "Blog", href: "/blog" },
  ],
  links: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
  },
  healthInsurances: [
    { name: "Medicare", image: "/assets/health-insurances/Medicare.png" },
    {
      name: "Blue Cross Blue Shield",
      image: "/assets/health-insurances/Bluecross-Blueshield.png",
    },
    { name: "Aetna", image: "/assets/health-insurances/Aetna.png" },
    { name: "Meridian", image: "/assets/health-insurances/Meridian.png" },
    {
      name: "Railroad Medicare",
      image: "/assets/health-insurances/RailRoad.png",
    },
    { name: "Ambetter", image: "/assets/health-insurances/Ambetter.png" },
  ],
  goals: [
    "Nationwide provision of wound care to all individuals in need of wound care services.",
    ,
    "Wound healing and prevention care education.",
    ,
    "Skilled mobile wound care service that is caring and brings comfort to patients.",
    ,
    "Elite skilled health care professionals who train and treat wounds.",
    ,
    "Global wound care training and professional development Focused on wound care.",
    ,
  ],
  services: [
    {
      icon: FaAmbulance,
      name: "Severe and Chronic Wound Care",
      text: "Delivering compassionate expertise for severe and chronic wound care, ensuring healing and comfort for every patient.",
      imageUrl: "/assets/services/chronic.jpg",
    },
    {
      icon: IoBody,
      name: "Diabetic Ulcer",
      text: "Specializing in comprehensive diabetic ulcer care, ensuring effective treatment and improved quality of life.",
      imageUrl: "/assets/services/diabetic.jpg",
      light: true,
    },
    {
      icon: FaDna,
      name: "Arterial Ulcer",
      text: "Delivering comprehensive care for arterial ulcers, prioritizing vascular health and specialized treatment to promote effective healing.",
      imageUrl: "/assets/services/arterial.jpg",
    },
    {
      icon: FaHeartPulse,
      name: "Venous Ulcers",
      text: "Offering specialized care for venous ulcers, promoting healing and vascular health with tailored treatment plans.",
      imageUrl: "/assets/services/venous.jpg",
    },
    {
      icon: GiFirstAidKit,
      name: "Pressure Ulcers",
      text: "Providing dedicated care for pressure ulcers, emphasizing prevention, treatment, and comfort for optimal healing.",
      imageUrl: "/assets/services/pressure.jpg",
    },
    {
      icon: CiMedicalMask,
      name: "Surgical Wound",
      text: "Expertly managing surgical wounds with personalized care plans to promote rapid healing and minimize complications.",
      imageUrl: "/assets/services/surgical.jpg",
    },
    {
      icon: FaBurn,
      name: "Burns",
      text: "Delivering specialized care for burns, focusing on pain relief, wound management, and scar minimization for comprehensive recovery.",
      imageUrl: "/assets/services/burns.jpg",
      light: true,
    },
    {
      icon: IoBandage,
      name: "Traumatic Wound",
      text: "Offering expert care for traumatic wounds, ensuring rapid healing and optimal recovery through specialized treatment plans.",
      imageUrl: "/assets/services/traumatic.jpg",
    },
  ],
  testimonials: [
    {
      image: "/assets/testimonials/t-avt-1.jpg",
      name: "Sarah T.",
      position: "Patient",
      message:
        "I can't thank Foot and Wound Institute enough for their exceptional care. After struggling with chronic foot ulcers, I finally found relief and healing through their specialized treatments. The team's expertise and personalized approach made all the difference in my recovery journey. Highly recommend!",
    },
    {
      image: "/assets/testimonials/t-avt-2.jpg",
      name: "Dr. Emily S.",
      position: "Referring Physician",
      message:
        "As a healthcare professional myself, I can attest to the quality of care provided by Foot and Wound Institute. Their team goes above and beyond to ensure every patient receives the best possible treatment. I confidently refer my patients knowing they are in good hands.",
    },
    {
      image: "/assets/testimonials/t-avt-3.jpg",
      name: "Mark J",
      position: "Patient",
      message:
        "Choosing Foot and Wound Institute was the best decision I made for my diabetic foot care. The staff's compassion and dedication were evident from my first visit. They not only treated my wounds effectively but also educated me on preventive care. Thanks to them, I'm back on my feet, literally!",
    },
  ],
  FAQS: [
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
  ],
  gallery: [
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
  ],
  socials: [
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
  ],
};
