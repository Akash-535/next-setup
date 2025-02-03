import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from 'next/head';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <Head>
        <title>Next Setup</title>
<meta name="title" content="Next Setup" />
<meta name="description" content="New setup with next js" />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://next-setup.vercel.app/" />
<meta property="og:title" content="Next Setup" />
<meta property="og:description" content="New setup with next js" />
<meta property="og:image" content="/meta-img.png" />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://next-setup.vercel.app/" />
<meta property="twitter:title" content="Next Setup" />
<meta property="twitter:description" content="New setup with next js" />
<meta property="twitter:image" content="/meta-img.png" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
