import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  MetaFunction,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Stylesheet from "~/styles/index.css";

// noinspection JSUnusedGlobalSymbols
export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: Stylesheet,
  },
];

const theme = extendTheme({
  colors: {
    gray: {
      "100": "#f7fafc",
      "200": "#edf2f7",
      "300": "#e2e8f0",
      "400": "#cbd5e0",
      "500": "#a0aec0",
      "600": "#969696",
      "700": "#343434",
      "800": "#181818",
      "900": "#101010",
    },
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
});

export const meta: MetaFunction = () => {
  const title = "Koding";
  const description =
    "An experienced software engineer with 7+ years of experience in the gaming industry.";
  return {
    title,
    description,
    "og:title": title,
    "og:image": "/assets/banner.webp",
    "og:color": "#101010",
    "og:type": "object",
    "og:site_name": title,
    "og:url": "https://koding.dev",
    "twitter:card": "summary_large_image",
    "twitter:site": "@KodingDev_",
    "twitter:description": description,
    "twitter:image": "/assets/banner.webp",
  };
};

export default function App() {
  // noinspection HtmlRequiredTitleElement
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ChakraProvider theme={theme}>
          <Outlet />
        </ChakraProvider>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
