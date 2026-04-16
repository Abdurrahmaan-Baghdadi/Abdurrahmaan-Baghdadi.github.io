import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdurrahmaan Baghdadi | Software Engineer & AI Researcher",
  description:
    "Graduate SWE at UT Austin building intelligent systems. Specializing in deep learning, multimodal AI, and full-stack development.",
  keywords: [
    "Software Engineer",
    "AI Researcher",
    "Machine Learning",
    "Full Stack Developer",
    "UT Austin",
    "React",
    "Python",
    "TypeScript",
  ],
  authors: [{ name: "Abdurrahmaan Baghdadi" }],
  creator: "Abdurrahmaan Baghdadi",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Abdurrahmaan Baghdadi | Software Engineer & AI Researcher",
    description:
      "Graduate SWE at UT Austin building intelligent systems. Specializing in deep learning, multimodal AI, and full-stack development.",
    siteName: "Abdurrahmaan Baghdadi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdurrahmaan Baghdadi | Software Engineer & AI Researcher",
    description:
      "Graduate SWE at UT Austin building intelligent systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#030B1A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <body className="antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
