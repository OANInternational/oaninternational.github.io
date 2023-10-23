import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/header/header.component";
import Footer from "@/components/footer/footer.component";

export const metadata: Metadata = {
  title: "OAN International",
  keywords: ["Nikki", "Benin", "ONG", "Nikarit"],
  description:
    "OAN International es una ONGD que tiene por objetivo la investigación de los recursos existentes y las vías de actuación para el desarrollo de la calidad de vida de la población beninesa de Nikki, así como la concienciación social de las desigualdades norte-sur que permitan generar un pensamiento crítico.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
