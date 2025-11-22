import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Entreprises maritimes en Algérie",
  description:
    "Répertoire exploratoire des organisations algériennes liées aux activités maritimes, portuaires et côtières."
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
