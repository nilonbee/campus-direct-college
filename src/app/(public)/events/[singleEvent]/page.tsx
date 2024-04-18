import {
  ContainerLayout,
  Hero,
  InnerContainer,
  SectionHeader,
} from "@/components/atoms";
import GMap from "@/components/molecules/Maps";
import convertArrayToObjectArray from "@/utils/convertArray";

import { SingleEventBox } from "@/components/molecules";
import { IDateLocation, IEvent, IMapLocation } from "@/types/events";
import { getEventBySlug } from "@/utils/api-requests";

const SingleEventPage = async ({ params }: any) => {
  const response = await getEventBySlug(params.singleEvent);
  const {
    title,
    description,
    cover_url,
    map_locations,
    dates_n_locations,
    meta_description,
  } = response?.event as IEvent;
  const mapDetails: IMapLocation[] = convertArrayToObjectArray(map_locations);
  const dates: IDateLocation[] = convertArrayToObjectArray(dates_n_locations);

  return (
    <>
      <Hero />
      <ContainerLayout>
        <div className="my-12">
          <SectionHeader
            title="Canada Application Week"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          architecto placeat non"
          />
        </div>
        <InnerContainer>
          <SingleEventBox
            title={title}
            subtitle={meta_description}
            image={`${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/${cover_url}`}
            dates={dates}
            mapDetails={mapDetails}
            description={description}
          />
          <div className="my-12">
            <SectionHeader
              title="Location Map"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          architecto placeat non"
            />
          </div>
          <div className="p-4 mx-auto my-12 bg-lightBlue bg-opacity-40 rounded-md border border-boxBorder">
            <GMap mapData={mapDetails} />
          </div>
        </InnerContainer>
      </ContainerLayout>
    </>
  );
};

export default SingleEventPage;