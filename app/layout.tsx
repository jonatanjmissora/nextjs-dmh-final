import type { Metadata } from "next";
import { Archivo, Archivo_Narrow, Inter, Roboto, Roboto_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import { cookies } from "next/headers";

const archivo = Roboto({ subsets: ["latin"], weight: ["100", "300", "400", "500", "700", "900"] });

export const metadata: Metadata = {
  title: 'DMH | Digital Money House',
  description: 'Tu nueva billetera virtual!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const username = cookies().get("username")?.value ?? ""

  return (
    <html lang="en">
      <body className={`${archivo.className} flex flex-col h-screen relative`}>
        <Navbar username={username} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
