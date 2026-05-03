import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MedCheck – Medication Interaction Checker",
  description: "Check supplement-medication interactions instantly. Stay safe with real-time alerts for dangerous drug interactions."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b0043197-c43f-4489-a4ab-a5451c067f49"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
