import "./globals.css";
import { Inter, Lora } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });

export const metadata = {
  title: "Pustaka Senja | Ruang Baca Komunitas",
  description: "Katalog ruang baca dan perpustakaan komunitas Pustaka Senja.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${inter.variable} ${lora.variable}`}>
      <body className="flex min-h-screen flex-col bg-slate-50 font-sans text-slate-900 antialiased">
        <Navbar />
        <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}