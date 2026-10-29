import Hero from "@/components/site/Hero";
import Apartments from "@/components/site/Apartments";
import Service from "@/components/site/Service";
import Business from "@/components/site/Business";
import Showcase from "@/components/site/Showcase";
import Reviews from "@/components/site/Reviews";
import Faq from "@/components/site/Faq";
import Location from "@/components/site/Location";
import Booking from "@/components/site/Booking";
import Contacts from "@/components/site/Contacts";
import OtherCities from "@/components/site/OtherCities";
import { CityProvider } from "@/components/site/city-context";
import { CITIES, type City } from "@/components/site/cities";

const Index = ({ city = CITIES[0] }: { city?: City }) => {
  return (
    <CityProvider city={city}>
      <main className="bg-background text-foreground">
        <Hero />
        <Business />
        <Showcase />
        <Apartments />
        <Service />
        <Reviews />
        <Faq />
        <Location />
        <OtherCities />
        <Booking />
        <Contacts />
      </main>
    </CityProvider>
  );
};

export default Index;
