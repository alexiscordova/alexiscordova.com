import "@/styles/globals.css";
import type { Metadata } from "next";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Alexis Córdova | Portfolio",
  description:
    "Personal portfolio website showcasing web development and design work",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <footer>
          <p>
            © {new Date().getFullYear()} Alexis Córdova. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
