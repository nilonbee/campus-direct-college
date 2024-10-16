import Image from "next/image";
import parse from "html-react-parser";
import { SingleEventDetailBox } from "@/components/molecules";
import { IMapLocation, IDateLocation } from "@/types/events";
import {
  CarbonLocationIcon,
  FormKitDateTimeIcon,
} from "@/components/atoms/Icons";

interface SingleEventBoxProps {
  title: string;
  subtitle: string;
  image: string;
  description: string;
  dates: IDateLocation[];
  mapDetails: IMapLocation[];
  application_url: string;
}

export const SingleEventBox = ({
  title,
  subtitle,
  image,
  dates,
  mapDetails,
  description,
}: SingleEventBoxProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 mx-auto mb-6 w-full">
      <div className="col-span-1 flex justify-center py-4">
        <div className="p-4 bg-lightBlue bg-opacity-40 h-max rounded-md border border-boxBorder">
          <Image
            height={24}
            width={480}
            src={image}
            alt="event-img"
            className="rounded-md"
          />
          <p className="ml-6 py-3 font-semibold text-center">{title}</p>
        </div>
      </div>
      <div className="col-span-2 mt-6 ml-4">
        <div className="pb-4 text-lg font-semibold">{subtitle}</div>
        <div className="pb-4 text-sm">{parse(description)}</div>
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-2 pb-4 mt-8">
          <SingleEventDetailBox
            label="Location"
            value={mapDetails.map((item) => item.location_name)}
            icon={<CarbonLocationIcon />}
          />

          <SingleEventDetailBox
            label="Start Date"
            value={dates.map((item) => item.start_date)}
            icon={<FormKitDateTimeIcon />}
          />

          <SingleEventDetailBox
            label="End Date"
            value={dates.map((item) => item.end_date)}
            icon={<FormKitDateTimeIcon />}
          />
        </div>
        {/* <Link href={application_url}>
          <MainButton
            label="Register Now"
            btnStyle="Primary"
            btnSize="Medium"
            customStyle="w-[200px] mt-12"
          />
        </Link> */}
      </div>
    </div>
  );
};
