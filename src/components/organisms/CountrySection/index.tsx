import { InnerContainer, SectionHeader } from "@/components/atoms";
import { CountryBox, GridWrapperTwo } from "@/components/molecules";

export const CountrySection = () => {
  const countries = [
    {
      name: "UK",
      img: "campus-direct-college/country-images/UK.png",
      url: "/pathway",
      // country_id: 230,
    },
    {
      name: "Australia",
      img: "campus-direct-college/country-images/Australia.png",
      url: "/pathway",
      // country_id: 13,
    },
    {
      name: "Canada",
      img: "campus-direct-college/country-images/Canada.png",
      url: "/pathway",
      // country_id: 38,
    },
    {
      name: "New Zealand",
      img: "campus-direct-college/country-images/New-Zealand.png",
      url: "/pathway",
      // country_id: 157,
    },
  ];

  return (
    <InnerContainer>
      <div className="mt-20 mb-20">
        <div className="flex flex-col justify-center items-center relative bg-transparent w-full">
          <SectionHeader
            title="Start Your Education Journey"
            description="Choose from a range of study pathways based on your preference and complete in"
          />

          <GridWrapperTwo>
            {countries.map((country, index) => (
              <CountryBox
                key={index}
                country={country.name}
                img={country.img}
                // countryId={country.country_id}
              />
            ))}
          </GridWrapperTwo>
        </div>
      </div>
    </InnerContainer>
  );
};
