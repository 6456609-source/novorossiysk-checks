import type {ReactNode} from "react";
import {HeadContent, Outlet, Scripts, createRootRoute} from "@tanstack/react-router";
import {Toaster} from "@/components/ui/toaster";
import {Toaster as Sonner} from "@/components/ui/sonner";
import {TooltipProvider} from "@/components/ui/tooltip";
import {PLATFORM_META, PLATFORM_SCRIPTS} from "@/platform/scripts.gen";
import {HMR_CLIENT} from "@/platform/dev-hmr";
import NotFound from "@/pages/NotFound";
import appCss from "@/index.css?url";

const TITLE = "+7 (996) 532-32-43 Гостиничные чеки Краснодар. Чеки, документы за проживание.";
const DESCRIPTION =
    "Гостиничные чеки  в Краснодаре: Выдаём чеки и полный пакет документов за проживание для отчёта о командировке в Краснодаре. Чеки Краснодар. ";
const KEYWORDS =
    "документы за проживание Краснодар, чек за проживание Краснодар, гостиничные чеки Краснодар, отчётные документы командировка, чеки для командировки Краснодар, отчётные документы гостиница Краснодар, чек гостиницы для бухгалтерии Краснодар, документы для авансового отчёта Краснодар, справка о проживании Краснодар, кассовый чек за проживание Краснодар";
const SITE_URL = "https://gostinichnie-cheki.ru/";

const LODGING_LD = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "@id": "https://gostinichnie-cheki.ru/#business",
    "name": "Краснодар Люкс — апартаменты посуточно",
    "description": "Апартаменты посуточно в Краснодаре. Чеки и полный пакет документов за проживание для отчёта о командировке.",
    "url": "https://gostinichnie-cheki.ru/",
    "telephone": "+7 996 532-32-43",
    "email": "hello@novoros-lux.ru",
    "image": "https://cdn.poehali.dev/projects/***/files/98eefa68-1a3e-40da-bab9-812503b66b57.jpg",
    "priceRange": "4900-13900 RUB",
    "currenciesAccepted": "RUB",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Привокзальная пл., 1",
        "addressLocality": "Краснодар",
        "addressRegion": "Краснодарский край",
        "addressCountry": "RU",
    },
    "geo": {"@type": "GeoCoordinates", "latitude": 45.0341, "longitude": 38.9562},
    "checkinTime": "14:00",
    "checkoutTime": "12:00",
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59",
    },
    "amenityFeature": [
        {"@type": "LocationFeatureSpecification", "name": "Бесплатный Wi-Fi", "value": true},
        {"@type": "LocationFeatureSpecification", "name": "Парковка", "value": true},
        {"@type": "LocationFeatureSpecification", "name": "Кондиционер", "value": true},
        {"@type": "LocationFeatureSpecification", "name": "Бесконтактное заселение 24/7", "value": true},
        {"@type": "LocationFeatureSpecification", "name": "Документы для отчёта о командировке", "value": true},
    ],
};

const FAQ_LD = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Какие документы за проживание в Краснодаре вы выдаёте?",
            "acceptedAnswer": {"@type": "Answer", "text": "Полный пакет отчётных документов гостиницы: кассовый чек за проживание, счёт на оплату, счёт-фактуру, акт оказанных услуг, договор, справку о проживании и квитанцию (БСО)."},
        },
        {
            "@type": "Question",
            "name": "Подойдут ли гостиничные чеки для бухгалтерии?",
            "acceptedAnswer": {"@type": "Answer", "text": "Да. Чек гостиницы для бухгалтерии и остальные документы оформляются для отчёта о командировке и подходят для сдачи в бухгалтерию организации."},
        },
        {
            "@type": "Question",
            "name": "Можно ли получить документы для авансового отчёта?",
            "acceptedAnswer": {"@type": "Answer", "text": "Да, выдаём документы для авансового отчёта одним пакетом: чек за проживание в Краснодаре, справку о проживании и закрывающие документы."},
        },
        {
            "@type": "Question",
            "name": "Как заказать чеки для командировки в Краснодаре?",
            "acceptedAnswer": {"@type": "Answer", "text": "Позвоните по номеру +7 (996) 532-32-43 или оставьте заявку на сайте. Уточним даты проживания и подготовим отчётные документы командировки."},
        },
        {
            "@type": "Question",
            "name": "Выдаёте ли вы справку о проживании?",
            "acceptedAnswer": {"@type": "Answer", "text": "Да, справка о проживании в Краснодаре входит в пакет документов вместе с кассовым чеком за проживание."},
        },
    ],
};

const METRIKA = `(function (m, e, t, r, i, k, a) {
    m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) };
    m[i].l = 1 * new Date();
    for (var j = 0; j < document.scripts.length; j++) { if (document.scripts[j].src === r) { return; } }
    k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
ym(101026698, "init", { trustedDomains: ["poehali.dev"], clickmap: true, trackLinks: true, accurateTrackBounce: true, webvisor: true, trackHash: true });`;
const OG_IMAGE = "https://cdn.poehali.dev/intertnal/img/phl2/og-main-2.webp";

export const Route = createRootRoute({
    head: () => ({
        meta: [
            {charSet: "utf-8"},
            {name: "viewport", content: "width=device-width, initial-scale=1.0"},
            {title: TITLE},
            {name: "description", content: DESCRIPTION},
            {name: "keywords", content: KEYWORDS},
            {name: "author", content: "poehali.dev"},
            {name: "yandex-verification", content: "cc5123edc4e2f5a3"},
            {property: "og:url", content: SITE_URL},
            {property: "og:type", content: "website"},
            {property: "og:site_name", content: "Гостиничные чеки Краснодар"},
            {property: "og:title", content: TITLE},
            {property: "og:description", content: DESCRIPTION},
            {property: "og:image", content: OG_IMAGE},
            {property: "og:image:width", content: "1200"},
            {property: "og:image:height", content: "630"},
            {name: "twitter:image", content: OG_IMAGE},
            ...PLATFORM_META,
        ],
        links: [
            {rel: "stylesheet", href: appCss},
            {rel: "icon", type: "image/svg+xml", href: "/favicon.svg"},
            {rel: "canonical", href: SITE_URL},
            {rel: "preconnect", href: "https://fonts.googleapis.com"},
            {rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous"},
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Unbounded:wght@500;700;800;900&family=IBM+Plex+Sans+Condensed:wght@400;500;600&display=swap",
            },
        ],
        // IMPORTANT: DO NOT REMOVE PLATFORM SCRIPTS AND THE DEV HMR CLIENT!
        scripts: [
            ...(import.meta.env.DEV ? [{children: HMR_CLIENT}] : []),
            ...PLATFORM_SCRIPTS,
            {src: "https://cdn.poehali.dev/intertnal/js/inspector-min.js"},
            {type: "application/ld+json", children: JSON.stringify(LODGING_LD)},
            {type: "application/ld+json", children: JSON.stringify(FAQ_LD)},
            {children: METRIKA},
        ],
    }),
    component: RootComponent,
    notFoundComponent: NotFound,
});

function RootComponent() {
    return (
        <RootDocument>
            <TooltipProvider>
                <Toaster/>
                <Sonner/>
                <Outlet/>
            </TooltipProvider>
        </RootDocument>
    );
}

function RootDocument({children}: { children: ReactNode }) {
    return (
        <html lang="ru">
        <head>
            <HeadContent/>
        </head>
        <body>
        {children}
        <noscript>
            <div><img src="https://mc.yandex.ru/watch/101026698" style={{position: "absolute", left: "-9999px"}} alt=""/></div>
        </noscript>
        <Scripts/>
        </body>
        </html>
    );
}
