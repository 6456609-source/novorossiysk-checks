import Hero from "@/components/site/Hero";
import Apartments from "@/components/site/Apartments";
import Service from "@/components/site/Service";
import Business from "@/components/site/Business";
import Showcase from "@/components/site/Showcase";
import Reviews from "@/components/site/Reviews";
import Location from "@/components/site/Location";
import Booking from "@/components/site/Booking";
import Contacts from "@/components/site/Contacts";
import FloatingContacts from "@/components/site/FloatingContacts";

const Index = () => {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <Business />
      <Showcase />
      <Apartments />
      <Service />
      <Reviews />
      <Location />
      <Booking />
      <Contacts />
      <FloatingContacts />
    </main>
  );
};

export default Index;