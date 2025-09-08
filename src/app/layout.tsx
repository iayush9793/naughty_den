import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

// Initialize the Inter and Roboto Mono fonts
const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Single, combined metadata export
export const metadata: Metadata = {
  title: 'Naughty Den',
  description: 'A global community for creators and photo seekers.',
  icons: {
    icon: '/favicon.png', // Correct favicon path
  },
};

// Single, combined RootLayout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}