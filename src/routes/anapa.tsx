import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";
import { CITY_BY_SLUG } from "@/components/site/cities";
import { cityHead } from "@/components/site/city-head";

const city = CITY_BY_SLUG.anapa;

export const Route = createFileRoute("/anapa")({
  head: () => cityHead(city),
  component: () => <Index city={city} />,
});
