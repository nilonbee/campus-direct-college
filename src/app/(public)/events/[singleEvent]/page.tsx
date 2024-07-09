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
import { getEventBySlug, getEvents } from "@/utils/api-requests";
import { rootImagePath } from "@/utils/rootImagePath";

export async function generateStaticParams() {
  const events = (await getEvents()) as IEvent[];
  return events.map((event: IEvent) => ({
    singleEvent: event.slug,
  }));
}
interface EventPageProps {
  params: { singleEvent: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({ params }: EventPageProps) {
  const response = await getEventBySlug(params.singleEvent);
  const { meta_title, meta_description, meta_keywords, cover_url } =
    response?.event as IEvent;
  return {
    title: `${meta_title} - Campus Direct`,
    description: meta_description,
    keywords: meta_keywords,
    canonical: `https://www.campusdirect.io/events/${params.singleEvent}`,
    url: `https://www.campusdirect.io/events/${params.singleEvent}`,
    openGraph: {
      title: `${meta_title} - Campus Direct`,
      description: meta_description,
      url: `https://www.campusdirect.io/events/${params.singleEvent}`,
      images: [
        {
          url: rootImagePath(cover_url as string),
          width: 800,
          height: 600,
        },
      ],
      siteName: "Campus Direct",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      handle: "@Campus_DirectUK",
      site: "@Campus_DirectUK",
      cardType: "summary_large_image",
    },
  };
}

const SingleEventPage = async ({ params }: EventPageProps) => {
  const response = await getEventBySlug(params.singleEvent);
  const {
    title,
    description,
    cover_url,
    map_locations,
    application_url,
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
          <SectionHeader title={title} description={meta_description} />
        </div>
        <InnerContainer>
          <SingleEventBox
            application_url={application_url}
            title={title}
            subtitle={meta_description}
            image={rootImagePath(cover_url as string)}
            dates={dates}
            mapDetails={mapDetails}
            description={description}
          />
          {/* <div className="my-12">
            <SectionHeader
              title={map_locations[0].location_name}
              description={""}
            />
          </div> */}
          <div className="p-4 mx-auto my-12 bg-lightBlue bg-opacity-40 rounded-md border border-boxBorder">
            <GMap mapData={mapDetails} />
          </div>
          <div className="p-4 mx-auto my-12 bg-lightBlue bg-opacity-40 rounded-md border border-boxBorder">
            <iframe
              src={application_url}
              width="100%"
              height="800px"
              title="Application"
              id="application_form"
              style={{ border: "none" }}
            ></iframe>
          </div>
        </InnerContainer>
      </ContainerLayout>
    </>
  );
};

export default SingleEventPage;
