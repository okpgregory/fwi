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
import Dropdown from "./Dropdown";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
        className="flex flex-col gap-10"
      >
        {/* PATIENT NAME */}
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

        {/* PATIENT EMAIL AND PHONE */}
        <div className="flex flex-col sm:flex-row gap-4">
          <FormField
            control={form.control}
            name="patientEmail"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-lg font-semibold mb-4">
                  Patient Email
                </FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormDescription>example@example.com</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="patientPhone"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-lg font-semibold mb-4">
                  Patient Phone
                </FormLabel>
                <FormControl>
                  <Input placeholder="(000) 000-0000" {...field} />
                </FormControl>
                <FormDescription>
                  Please enter a valid phone number.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* PATIENT ADDRESS */}
        <div className="flex flex-col gap-4">
          <span className="text-lg font-semibold mb-4">Patient Address</span>
          <FormField
            control={form.control}
            name="patientAddress.streetAddress"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormDescription>Street Address</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col sm:flex-row gap-4">
            <FormField
              control={form.control}
              name="patientAddress.city"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormDescription>City</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="patientAddress.stateOrProvince"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormDescription>State / Province</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="patientAddress.postalOrZipCode"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormDescription>Postal / Zip Code</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* PATIENT BIRTHDAY AND PRIMARY CARE PROVIDER */}
        <div className="flex flex-col sm:flex-row gap-4">
          <FormField
            control={form.control}
            name="patientBirthday"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-lg font-semibold mb-4">
                  Patient Birthday
                </FormLabel>
                <FormControl>
                  <div className="flex justify-center border border-black/40 items-center h-10 w-full overflow-hidden rounded-md bg-blue-50 px-3 py-2">
                    <Image
                      src="/assets/icons/calendar.svg"
                      alt="calendar"
                      width={24}
                      height={24}
                      className="filter-grey"
                    />
                    <DatePicker
                      selected={field.value}
                      onChange={(date) => field.onChange(date)}
                      dateFormat="MM/dd/yy"
                      wrapperClassName="datePicker"
                    />
                  </div>
                </FormControl>
                <FormDescription>Date</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="patientPrimaryCareProvider"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-lg font-semibold mb-4">
                  Patient Primary Care Provider
                </FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* POWER OF ATTORNEY SELECT AND EMAIL */}
        <div className="flex flex-col sm:flex-row gap-4">
          <FormField
            control={form.control}
            name="patientBirthday"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-lg font-semibold mb-4">
                  Power of Attorney
                </FormLabel>
                <FormControl>
                  <Dropdown
                    values={["Yes", "No"]}
                    onChangeHandler={() => {}}
                    className="w-full"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="patientPrimaryCareProvider"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-lg font-semibold mb-4">
                  Patient Primary Care Provider
                </FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* PATIENT INSURANCE PROVIDER */}
        <FormField
          control={form.control}
          name="patientInsuranceProvider"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-lg font-semibold mb-4">
                Patient Insurance Provider
              </FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* PATIENT INSURANCE ID NUMBER AND MEDICARE ID NUMBER */}
        <div className="flex flex-col sm:flex-row gap-4">
          <FormField
            control={form.control}
            name="patientInsuranceIdNumber"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-lg font-semibold mb-4">
                  Patient Insurance ID Number
                </FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="medicareIdNumber"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-lg font-semibold mb-4">
                  Medicare ID Number
                </FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* DIAGNOSIS AND DURATIONOF WOUND */}
        <div className="flex flex-col sm:flex-row gap-4">
          <FormField
            control={form.control}
            name="diagnosis"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-lg font-semibold mb-4">
                  Diagnosis
                </FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="patientPhone"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-lg font-semibold mb-4">
                  Duration of Wound
                </FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* MEDICAL PROVIDER COMPANY NAME */}
        <FormField
          control={form.control}
          name="patientInsuranceProvider"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-lg font-semibold mb-4">
                Medical Provider Company Name
              </FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* MEDICALP ROVIDER NAME */}
        <div>
          <span className="text-lg font-semibold mb-4 block">
            Medical Provider Name
          </span>
          <div className="flex gap-4">
            <FormField
              control={form.control}
              name="medicalProviderName.firstName"
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
              name="medicalProviderName.lastName"
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

        {/* MEDICAL PROVIDER EMAIL AND PHONE */}
        <div className="flex flex-col sm:flex-row gap-4">
          <FormField
            control={form.control}
            name="medicalProviderEmail"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-lg font-semibold mb-4">
                  Medical Provider Email
                </FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormDescription>example@example.com</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="medicalProviderPhone"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-lg font-semibold mb-4">
                  Medical Provider Phone
                </FormLabel>
                <FormControl>
                  <Input placeholder="(000) 000-0000" {...field} />
                </FormControl>
                <FormDescription>
                  Please enter a valid phone number.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* MEDICAL PROVIDER ADDRESS */}
        <div className="flex flex-col gap-4">
          <span className="text-lg font-semibold mb-4">
            Medical Provider Address
          </span>
          <FormField
            control={form.control}
            name="medicalProviderAddress.streetAddress"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormDescription>Street Address</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col sm:flex-row gap-4">
            <FormField
              control={form.control}
              name="medicalProviderAddress.city"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormDescription>City</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="medicalProviderAddress.stateOrProvince"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormDescription>State / Province</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="medicalProviderAddress.postalOrZipCode"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormDescription>Postal / Zip Code</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* MEDICAL PROVIDER TYPE */}
        <FormField
          control={form.control}
          name="medicalProviderType"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-lg font-semibold mb-4">
                Medical Provider Type
              </FormLabel>
              <FormControl>
                <Dropdown
                  values={["Facility", "Provider"]}
                  onChangeHandler={() => {}}
                  className="w-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-fit mx-auto">
          Refer a Patient Now
        </Button>
      </form>
    </Form>
  );
}
