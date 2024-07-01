import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { FAQS } from "@/data/constants";
import MaxWidthWrapper from "./shared/MaxWidthWrapper";
import SectionTitle from "./shared/SectionTitle";

export default function FAQs() {
  return (
    <MaxWidthWrapper className="py-20">
      <SectionTitle text="Faqs" />
      <p className="font-bold tracking-[8px] w-full text-center leading-8 text-sm text-blue-600 mb-16">
        Find answers to commonly asked questions about our foot and wound care
        institute.
      </p>
      <Accordion type="single" collapsible className="w-full">
        {FAQS.map((question, i) => (
          <AccordionItem key={i} value={`item-${i + 1}`}>
            <AccordionTrigger className="text-lg text-left text-blue-950">
              {question.question}
            </AccordionTrigger>
            <AccordionContent className="text-xl font-light">
              {question.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </MaxWidthWrapper>
  );
}
