import PageHeader from "@/components/page-header";
import Image from "next/image";

import fernLogo from "../../../public/fern-logo.svg";
import coconutLogo from "../../../public/coconut-logo.svg";
import vimrLogo from "../../../public/vimr-logo.webp";
import growthStreetLogo from "../../../public/growth-street-logo.png";
import letoLogo from "../../../public/leto-logo.webp";
import brightBlueConsultingLogo from "../../../public/brightblue-consulting-logo.jpeg";

function WorkCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border bg-white dark:bg-white shadow">
      <div className="p-6">
        <div className="flex place-content-center">
          <div className="flex flex-col items-center space-y-4">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default function WorkPage() {
  return (
    <>
      <PageHeader title="Work and Projects" />
      <div className="mt-10 grid grid-cols-1 gap-8">
        <WorkCard>
          <Image className="my-3" src={fernLogo} height={90} />
          <p className="leading-7 text-gray-600">
            User research made easy. A UX research ops platform that helps
            companies to be more productive doing research with their customers
          </p>
        </WorkCard>
        <WorkCard>
          <Image className="my-3" src={coconutLogo} height={50} />
          <p className="leading-7 text-gray-600">
            An accounting and tax platform for freelancers and self-employed
          </p>
        </WorkCard>
        <WorkCard>
          <Image src={vimrLogo} height={130} />
          <p className="leading-7 text-gray-600">
            A cash-management solution for businesses wanting to unlock higher
            credit limits through smarter insights
          </p>
        </WorkCard>
        <WorkCard>
          <Image src={growthStreetLogo} height={90} />
          <p className="leading-7 text-gray-600">
            Fast and flexible overdrafts for growing businesses
          </p>
        </WorkCard>
        <WorkCard>
          <Image src={letoLogo} height={90} />
          <p className="leading-7 text-gray-600">
            Startup studio building innovative technology products
          </p>
        </WorkCard>
        <WorkCard>
          <Image src={brightBlueConsultingLogo} height={90} />
          <p className="leading-7 text-gray-600">
            Predictive modelling and data science consultancy to help optimise
            spend and improve ROI
          </p>
        </WorkCard>
      </div>
    </>
  );
}
