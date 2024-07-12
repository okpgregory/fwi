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
import { referralFormInitialData } from "@/data/constants";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaSpinner } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Dropdown from "./Dropdown";
import { Toaster, toast } from "sonner";
import { createReferral } from "@/lib/actions/referrals.actions";
import { PatientReferralSchema } from "@/utils/validator";
import { sendReferralEmail } from "@/lib/actions/resend.actions";

export type ReferralType = z.infer<typeof PatientReferralSchema>;

export default function ReferralForm() {
  const router = useRouter();

  const form = useForm<ReferralType>({
    resolver: zodResolver(PatientReferralSchema),
    defaultValues: referralFormInitialData,
  });

  async function onSubmit(values: ReferralType) {
    try {
      const referredPatient = await createReferral(values);
      if (referredPatient) {
        await sendReferralEmail({ referralData: values });
        form.reset();
        router.push("/referral/success");
      }
    } catch (error) {
      console.log(error);
      toast.error("Patient Referral Failed!");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-10 bg-slate-300 p-8 rounded-xl"
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
                      className="input-field"
                      placeholder="First Name"
                      {...field}
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
                      className="input-field"
                      placeholder="Last Name"
                      {...field}
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
                  <Input className="input-field" placeholder="" {...field} />
                </FormControl>
                <FormDescription className="text-slate-700">
                  example@example.com
                </FormDescription>
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
                  <Input
                    className="input-field"
                    placeholder="(000) 000-0000"
                    {...field}
                  />
                </FormControl>
                <FormDescription className="text-slate-700">
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
                  <Input className="input-field" placeholder="" {...field} />
                </FormControl>
                <FormDescription className="text-slate-700">
                  Street Address
                </FormDescription>
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
                    <Input className="input-field" placeholder="" {...field} />
                  </FormControl>
                  <FormDescription className="text-slate-700">
                    City
                  </FormDescription>
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
                    <Input className="input-field" placeholder="" {...field} />
                  </FormControl>
                  <FormDescription className="text-slate-700">
                    State / Province
                  </FormDescription>
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
                  <Input className="input-field" placeholder="" {...field} />
                </FormControl>
                <FormDescription className="text-slate-700">
                  Postal / Zip Code
                </FormDescription>
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
                  <div className="flex justify-center h-[54px]  items-center w-full overflow-hidden bg-gray-50 px-4 py-3 rounded-full ">
                    <Image
                      src="/assets/icons/calendar.svg"
                      alt="calendar"
                      width={24}
                      height={24}
                      className="filter-gray"
                    />
                    <DatePicker
                      selected={field.value}
                      onChange={(date: Date | null) => field.onChange(date)}
                      placeholderText="MM-dd-yyyy"
                      dateFormat="MM/dd/yyyy"
                      wrapperClassName="datePicker"
                    />
                  </div>
                </FormControl>
                <FormDescription className="text-slate-700">
                  Date
                </FormDescription>
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
                  <Input className="input-field" placeholder="" {...field} />
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
            name="powerOfAttorney"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-lg font-semibold mb-4">
                  Power of Attorney
                </FormLabel>
                <FormControl>
                  <Dropdown
                    values={["Yes", "No"]}
                    onChangeHandler={field.onChange}
                    className="w-full input-field ring-0 outline-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="powerOfAttorneyEmail"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-lg font-semibold mb-4">
                  Power of Attorney Email
                </FormLabel>
                <FormControl>
                  <Input className="input-field" placeholder="" {...field} />
                </FormControl>
                <FormDescription className="text-slate-700">
                  example@example.com
                </FormDescription>
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
                <Input className="input-field" placeholder="" {...field} />
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
                  <Input className="input-field" placeholder="" {...field} />
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
                  <Input className="input-field" placeholder="" {...field} />
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
                  <Input className="input-field" placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="durationOfWound"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-lg font-semibold mb-4">
                  Duration of Wound
                </FormLabel>
                <FormControl>
                  <Input className="input-field" placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* MEDICAL PROVIDER COMPANY NAME */}
        <FormField
          control={form.control}
          name="medicalProviderCompanyName"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-lg font-semibold mb-4">
                Medical Provider Company Name
              </FormLabel>
              <FormControl>
                <Input className="input-field" placeholder="" {...field} />
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
                      className="input-field"
                      placeholder="First Name"
                      {...field}
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
                      className="input-field"
                      placeholder="Last Name"
                      {...field}
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
                  <Input className="input-field" placeholder="" {...field} />
                </FormControl>
                <FormDescription className="text-slate-700">
                  example@example.com
                </FormDescription>
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
                  <Input
                    className="input-field"
                    placeholder="(000) 000-0000"
                    {...field}
                  />
                </FormControl>
                <FormDescription className="text-slate-700">
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
                  <Input className="input-field" placeholder="" {...field} />
                </FormControl>
                <FormDescription className="text-slate-700">
                  Street Address
                </FormDescription>
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
                    <Input className="input-field" placeholder="" {...field} />
                  </FormControl>
                  <FormDescription className="text-slate-700">
                    City
                  </FormDescription>
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
                    <Input className="input-field" placeholder="" {...field} />
                  </FormControl>
                  <FormDescription className="text-slate-700">
                    State / Province
                  </FormDescription>
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
                  <Input className="input-field" placeholder="" {...field} />
                </FormControl>
                <FormDescription className="text-slate-700">
                  Postal / Zip Code
                </FormDescription>
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
                  onChangeHandler={field.onChange}
                  className="w-full input-field outline-none ring-0"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-fit mx-auto"
          size="lg"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? (
            <>
              <FaSpinner className="animate-spin mr-4" />
              <span>Submitting...</span>
            </>
          ) : (
            "Refer a Patient Now"
          )}
        </Button>
        <Toaster richColors />
      </form>
    </Form>
  );
}
