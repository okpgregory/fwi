"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PatientReferralSchema } from "@/utils/validator";
import { referralFormInitialData } from "@/data/constants";

export default function PatientReferralForm() {
  const form = useForm<z.infer<typeof PatientReferralSchema>>({
    resolver: zodResolver(PatientReferralSchema),
    defaultValues: referralFormInitialData,
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof PatientReferralSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 flex flex-col gap-4"
      >
        <div>
          <span className="text-lg font-semibold mb-4 block">Patient Name</span>
          <div className="flex gap-4">
            <FormField
              control={form.control}
              name="patientName.firstName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="First Name"
                      {...field}
                      className="input-field"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="patientName.lastName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="Last Name"
                      {...field}
                      className="input-field"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <Button type="submit">Refer a Patient Now</Button>
      </form>
    </Form>
  );
}
