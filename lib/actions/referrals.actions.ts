"use server";

import { handleError } from "@/utils";
import { connectToDatabase } from "@/lib/database";
import { Referral } from "../database/models/Referral";
import { ReferralType } from "@/components/form/ReferralForm";

export const createReferral = async (referralData: ReferralType) => {
  try {
    await connectToDatabase();
    const newReferral = await Referral.create(referralData);
    return JSON.parse(JSON.stringify(newReferral));
  } catch (error) {
    handleError(error);
  }
};

export const getReferral = async (referralData: ReferralType) => {
  try {
    await connectToDatabase();
    const referral = await Referral.create(referralData);
    return JSON.parse(JSON.stringify(referral));
  } catch (error) {
    handleError(error);
  }
};

export const getReferrals = async () => {
  try {
    await connectToDatabase();
    const referrals = await Referral.find();
    return JSON.parse(JSON.stringify(referrals));
  } catch (error) {
    handleError(error);
  }
};

export const updateReferral = async (referralData: ReferralType) => {
  try {
    await connectToDatabase();
    const referral = await Referral.create(referralData);
    return JSON.parse(JSON.stringify(referral));
  } catch (error) {
    handleError(error);
  }
};

export const deleteReferral = async (referralData: ReferralType) => {
  try {
    await connectToDatabase();
    const referral = await Referral.create(referralData);
    return JSON.parse(JSON.stringify(referral));
  } catch (error) {
    handleError(error);
  }
};
