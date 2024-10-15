import { InnerContainer, SectionHeader } from "@/components/atoms";
import { CountryBox, GridWrapperTwo } from "@/components/molecules";

export const CountrySection = () => {
  const countries = [
    {
      name: "UK",
      img: "country/uk.png",
      url: "/courses",
      country_id: 230,
    },
    {
      name: "Australia",
      img: "country/australia.png",
      url: "/courses",
      country_id: 13,
    },
    {
      name: "Canada",
      img: "country/canada.png",
      url: "/courses",
      country_id: 38,
    },
    {
      name: "Sri Lanka",
      img: "country/nz.jpg",
      url: "/courses",
      country_id: 157,
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
                countryId={country.country_id}
              />
            ))}
          </GridWrapperTwo>
        </div>
      </div>
    </InnerContainer>
  );
};
