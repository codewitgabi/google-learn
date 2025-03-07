import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import { Theme } from "@radix-ui/themes";
import { Toaster } from "sonner";
import AuthSessionProvider from "@/components/AuthSessionProvider";
import "@xyflow/react/dist/style.css";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  style: ["normal"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Complete Nextjs Learn and Playground",
  description: "Walk through of building nextjs applications the right way.",
  openGraph: {
    title: "Nextjs Playground [codewitgabi]",
    description:
      "While learning nextjs can become quite simple and basic for a developer with experience with react, there is a proper way to do things the nextjs way. That is what this project is all about.",
    url: "https://next-playground-red.vercel.app",
    type: "website",
    siteName: "Nextjs Playground by codewitgabi",
  },
  keywords: [
    "codewitgabi",
    "nextjs",
    "playground",
    "learn nextjs",
    "nextjs walk through",
  ],
  creator: "Gabriel Michael Ojomakpene aka codewitgabi",
  metadataBase: new URL("https://next-playground-red.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.className} antialiased`}>
      <head>
        <meta name="google-adsense-account" content="ca-pub-3282358136257954" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3282358136257954"
          crossOrigin="anonymous"
        ></script>
      </head>

      <body>
        <AuthSessionProvider>
          <Theme>{children}</Theme>
        </AuthSessionProvider>

        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
