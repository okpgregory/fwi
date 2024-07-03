import Image from "next/image";
import ReferralForm from "./ReferralForm";
import MaxWidthWrapper from "./shared/MaxWidthWrapper";
import { Button, buttonVariants } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import Link from "next/link";

export default function Referral() {
  return (
    <MaxWidthWrapper>
      <div id="referral" className="grid lg:grid-cols-2 gap-8">
        <div className="relative w-full flex items-center justify-center h-[400px] aspect-square">
          <Image
            src="/assets/referral.jpg"
            fill
            objectFit="cover"
            alt="vision"
          />
        </div>
        <div>
          <h3 className="text-blue-900 text-4xl sm:text-6xl md:text-7xl text-pretty tracking-wider font-light">
            Referral Process
          </h3>
          <p className="mt-6 max-w-prose leading-8 text-lg text-muted-foreground font-medium">
            FWI accepts Medicare Part B provider we are focused on providing
            care to patients with chronic wounds , non-healing wounds, foot
            ulcers, foot wounds, surgical wounds, trauma wounds and any kind of
            wound not responding to traditional care. FWI is able to manage
            wounds with high skilled wound care experts wounds, you can depend
            on us to ensure that wound heals effectively.
            <span className="block">
              Click here for referral form ( please complete and send )
            </span>
          </p>
          <Dialog>
            <DialogTrigger asChild className="mt-6">
              <Button>FILL OUT THE REFERRAL FORM</Button>
            </DialogTrigger>
            <DialogContent className="h-[80vh] overflow-y-scroll py-8 px-4">
              <DialogHeader>
                <DialogTitle>
                  <Link className={buttonVariants()} href="/referral">
                    Refer Patient Now
                  </Link>
                </DialogTitle>
              </DialogHeader>
              <ReferralForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
