import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Pustaka Senja",
    description: "Ruang baca dan perpustakaan komunitas Pustaka Senja."
};

export default function RootLayout({ children }) {
    return (
        <html lang="id">
            <body className="min-h-screen flex flex-col bg-[#faf6f1] text-[#60483e]">
                <Navbar />
                <main className="flex-1 w-full max-w-6xl mx-auto px-6 py-10">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}