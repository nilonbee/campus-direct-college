import {
  ContainerLayout,
  Hero,
  InnerContainer,
  SectionHeader,
} from "@/components/atoms";
import { EventBox, GridWrapper } from "@/components/molecules/";
import { InterestedSection } from "@/components/organisms";
import { IEvent } from "@/types/events";
import { getEvents } from "@/utils/api-requests";
import { GoogleTagManager } from "@next/third-parties/google";

export const revalidate = 10;

export const metadata = {
  title: "Events - Campus Direct | Your Trusted Education Partner",
  description:
    "Campus Direct is a leading education consultancy in Sri Lanka, providing expert advice and guidance to students who wish to study abroad.",
  keywords: "study abroad, education consultancy, campus direct",
  canonical: "https://www.campusdirect.io/events",
  url: "https://www.campusdirect.io/events",
};

const EventsPage = async () => {
  const events = await getEvents();
  return (
    <>
      <GoogleTagManager gtmId="GTM-M9SGVQTL" />
      <Hero />
      <ContainerLayout>
        <div className="my-12">
          <SectionHeader
            title="Events"
            description="Providing you with information and opportunities."
          />
        </div>
        <InnerContainer>
          <div className="mb-12">
            <GridWrapper>
              {events?.map((item: IEvent) => (
                <EventBox
                  key={item.id}
                  title={item.title}
                  image={item.cover_url}
                  slug={item.slug}
                />
              ))}
            </GridWrapper>
          </div>
        </InnerContainer>
      </ContainerLayout>
      <InterestedSection />
    </>
  );
};

export default EventsPage;
