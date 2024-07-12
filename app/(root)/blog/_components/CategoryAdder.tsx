"use client";

import { createCategory } from "@/lib/actions/blog/category.actions";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

export default function CategoryAdder() {
  const [newCategory, setNewCategory] = useState("");

  const storeNewCategory = async (e: FormEvent) => {
    e.preventDefault();

    const categoryData = {
      slug: createCategorySlug(newCategory),
      title: newCategory,
    };

    try {
      const newCategory = await createCategory(categoryData);
      if (newCategory) {
        toast.success("Patient successfully referred!");
      } else {
        toast.error("Error referring patient");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const createCategorySlug = (title: string) => {
    return title.split(" ").join("-").toLowerCase();
  };

  return (
    <form onSubmit={(e) => storeNewCategory(e)}>
      <Input
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
      />
      <Button type="submit">ADD</Button>
    </form>
  );
}

// General Health and Wellness
// Disease Prevention
// Nutrition and Diet
// Exercise and Fitness
// Mental Health
// Women's Health
// Men's Health
// Children's Health
// Senior Health
// Chronic Illness Management
// Healthy Aging
// Pregnancy and Childbirth
// Alternative Medicine
// Medication Management
// Emergency Care
// Dental Health
// Skin Care
// Eye Care
// Allergies and Immunology
// Cancer Care
// Heart Health
// Digestive Health
// Respiratory Health
// Bone and Joint Health
// Rehabilitation and Physical Therapy
// Sleep Disorders
// Occupational Health
// Healthcare Technology
// Public Health Issues
// Healthcare Policy and Advocacy
