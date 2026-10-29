import { cityFaq, type City } from "./cities";
import { PHONE } from "./nav";

const OG_IMAGE = "https://cdn.poehali.dev/intertnal/img/phl2/og-main-2.webp";
const BUSINESS_PHOTO =
  "https://cdn.poehali.dev/projects/172e5f49-d13c-4e4d-b3f0-0f10ceeb28de/files/98eefa68-1a3e-40da-bab9-812503b66b57.jpg";

export const cityHead = (c: City) => {
  const lodging = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "@id": `${c.url}#business`,
    name: `${c.brand} — апартаменты посуточно`,
    description: `Апартаменты посуточно ${c.nameIn}. Чеки и полный пакет документов за проживание для отчёта о командировке.`,
    url: c.url,
    telephone: PHONE.replace(/[()]/g, "").replace(/\s+/g, " "),
    email: "hello@novoros-lux.ru",
    image: BUSINESS_PHOTO,
    priceRange: "4900-13900 RUB",
    currenciesAccepted: "RUB",
    address: {
      "@type": "PostalAddress",
      streetAddress: c.address,
      addressLocality: c.name,
      addressRegion: "Краснодарский край",
      addressCountry: "RU",
    },
    ...(c.geo ? { geo: { "@type": "GeoCoordinates", ...c.geo } } : {}),
    checkinTime: "14:00",
    checkoutTime: "12:00",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    amenityFeature: [
      "Бесплатный Wi-Fi",
      "Парковка",
      "Кондиционер",
      "Бесконтактное заселение 24/7",
      "Документы для отчёта о командировке",
    ].map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: cityFaq(c).map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return {
    meta: [
      { title: c.title },
      { name: "description", content: c.description },
      { name: "keywords", content: c.keywords },
      { property: "og:url", content: c.url },
      { property: "og:site_name", content: `Гостиничные чеки ${c.name}` },
      { property: "og:title", content: c.title },
      { property: "og:description", content: c.description },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: c.url }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(lodging) },
      { type: "application/ld+json", children: JSON.stringify(faq) },
    ],
  };
};
