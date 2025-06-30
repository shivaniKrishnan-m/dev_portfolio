import "./globals.css";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Shivani M - QA Engineer | Web UI Designer",
  description:
    "Associate Software Engineer with 2 years of experience in manual, automation, and mobile testing. Passionate about crafting user-friendly UIs and ensuring seamless product quality through efficient testing strategies.",
  keywords:
    "QA Engineer, Test Automation, Selenium, Postman, Python, UI Design, Figma, Manual Testing, API Testing, Software Testing, Quality Assurance",
  authors: [{ name: "Shivani M" }],
  openGraph: {
    title: "Shivani M - QA Engineer | Web UI Designer",
    description:
      "Associate Software Engineer specializing in quality assurance, test automation, and UI design. Expert in Selenium, Postman, Python, and Figma.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivani M - QA Engineer | Web UI Designer",
    description:
      "QA Engineer specializing in test automation and user-friendly UI design.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
