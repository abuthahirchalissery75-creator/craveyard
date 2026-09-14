import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 font-display text-5xl text-cream">Lost in the smoke</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          That page has drifted off the menu.
        </p>
        <div className="mt-8">
          <Link to="/" className="btn-gold">Return to Craveyard</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl text-cream">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">Please try again.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-gold">Try again</button>
          <a href="/" className="btn-ghost">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
  meta: [
    // Basic
    {
      charSet: "utf-8",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },

    // SEO
    {
      title: "Craveyard — Premium Mandi & Arabian Restaurant in Kochi ",
    },
    {
      name: "description",
      content:
        "Craveyard is a premium mandi and Arabian restaurant in Edachira, Kochi, serving authentic mandi, alfaham, shawaya and more in a cinematic dining experience.",
    },
    {
      name: "author",
      content: "Craveyard",
    },
    {
      name: "robots",
      content: "index, follow",
    },

    // Theme
    {
      name: "theme-color",
      content: "#090909",
    },

    // Canonical
    {
      property: "og:site_name",
      content: "Craveyard",
    },

    // Open Graph
    {
      property: "og:title",
      content: "Craveyard — Premium Mandi & Arabian Restaurant in Kochi",
    },
    {
      property: "og:description",
      content:
        "Authentic mandi, alfaham, shawaya and Arabian flavours in Edachira, Kochi.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://craveyard.shop/",
    },
    {
      property: "og:image",
      content: "https://craveyard.shop/craveyard-og.jpg",
    },
    {
      property: "og:image:alt",
      content: "Craveyard — Premium Mandi & Arabian Restaurant",
    },

    // Twitter / X
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Craveyard — Premium Mandi & Arabian Restaurant in Kochi",
    },
    {
      name: "twitter:description",
      content:
        "Authentic mandi, alfaham, shawaya and Arabian flavours in Edachira, Kochi.",
    },
    {
      name: "twitter:image",
      content: "https://craveyard.shop/craveyard-og.jpg",
    },
  ],

  links: [
    // Canonical URL
    {
      rel: "canonical",
      href: "https://craveyard.shop/",
    },

    // Favicon
    {
      rel: "icon",
      href: "/craveyard.logo1.png",
      type: "image/png",
    },

    {
      rel: "apple-touch-icon",
      href: "/craveyard.logo1.png",
    },

    // Fonts
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=Inter:wght@300;400;500;600&display=swap",
    },

    // App CSS
    {
      rel: "stylesheet",
      href: appCss,
    },
  ],

  // Structured data
  scripts: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Craveyard",
        alternateName: "Craveyard Restaurant",
        url: "https://craveyard.shop/",
      }),
    },

    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Restaurant",
        name: "Craveyard",
        image: [
          "https://craveyard.shop/craveyard.logo1.png",
        ],
        url: "https://craveyard.shop/",
        servesCuisine: [
          "Arabian",
          "Mandi",
          "Middle Eastern",
          "Masala Shawai",
          "Shawai",
          "Shawarma",
          "Chinese",
          "Alfaham"
        ],

        sameAs: [
      "https://www.instagram.com/hungercraveyard/"
    ],

        address: {
          "@type": "PostalAddress",
          streetAddress: "Thalakkottu moola ,Edachira, Kakkanadu , Kochi",
          addressLocality: "Edachira",
          addressRegion: "Kerala",
          postalCode: "682030",
          addressCountry: "IN",
        },

        telephone: "6238575390",

        priceRange: "$$",

        // Add your real hours here
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "01:00 PM",
            closes: "01:00 AM",
          },
        ],
      }),
    },
  ],
}),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
