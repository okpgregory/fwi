import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import Sidebar from "@/components/Sidebar";
import Write from "@/components/Write";
import { ReactNode } from "react";

export default function Page() {
  return (
    <div>
      <div className="flex">
        <div className="hidden md:block h-screen w-[300px]">
          <Sidebar />
        </div>
        <MaxWidthWrapper className="py-20">
          <Write />
        </MaxWidthWrapper>
      </div>
    </div>
  );
}

// const storePost = async (post: PostPost) => {
//   await createPost(post);
// };

// const posts: PostPost[] = [
//   {
//     slug: "understanding-arthritis-symptoms-treatment",
//     desc: "Learn about the different types of arthritis, their symptoms, and effective treatment strategies to manage this condition.",
//     img: "https://plus.unsplash.com/premium_photo-1661779330191-e8697c93726b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGlzZWFzZSUyMHByZXZlbnRpb258ZW58MHx8MHx8fDA%3D",
//     category: "668784308ea3cbbfcaaa60fa",
//     title: "Understanding Arthritis: Symptoms and Treatment Options",
//   },
//   {
//     slug: "importance-of-regular-dental-check-ups",
//     desc: "Discover why regular dental check-ups are crucial for maintaining oral health and preventing dental problems.",
//     img: "https://images.unsplash.com/photo-1631596577204-53ad0d6e6978?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGVudGFsJTIwaGVhbHRofGVufDB8fDB8fHww",
//     category: "668784c18ea3cbbfcaaa6116",
//     title: "The Importance of Regular Dental Check-up",
//   },
//   {
//     slug: "managing-diabetes-diet-lifestyle-tipss",
//     desc: "Explore dietary recommendations and lifestyle changes to effectively manage diabetes and improve overall health.",
//     img: "https://images.unsplash.com/photo-1593491034932-844ab981ed7c?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlhYmV0ZXN8ZW58MHx8MHx8fDA%3D",
//     category: "668785358ea3cbbfcaaa6130",
//     title: "Managing Diabetes: Diet and Lifestyle Tips",
//   },
//   {
//     slug: "understanding-mental-health-common-disorders",
//     desc: " Gain insights into common mental health disorders, symptoms, and available support options for those affected.",
//     img: "https://images.unsplash.com/photo-1564121211835-e88c852648ab?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVudGFsJTIwaGVhbHRofGVufDB8fDB8fHww",
//     category: "668784528ea3cbbfcaaa6100",
//     title:
//       "Understanding Mental Health: Common Disorders and Support Options",
//   },
//   {
//     slug: "Coping with Stress: Effective Strategies for Wellness",
//     desc: " Explore practical tips and techniques to manage stress effectively and improve overall wellness.",
//     img: "https://images.unsplash.com/photo-1713428856201-ef439a082cad?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RyZXNzJTIwbWFuYWdlbWVudHxlbnwwfHwwfHx8MA%3D%3D",
//     category: "668783738ea3cbbfcaaa60f6",
//     title: "Coping with Stress: Effective Strategies for Wellness",
//   },
// ];

// posts.forEach((post) => createPost(post));
