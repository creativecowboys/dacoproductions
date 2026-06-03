import "./globals.css";

export const metadata = {
  title: "Daco Productions | Full-Service Media & Production",
  description:
    "Daco Productions is a full-service media and production company specializing in audio visual consulting, film, graphics & media, and web & marketing.",
  openGraph: {
    title: "Daco Productions | Full-Service Media & Production",
    description:
      "Full-service media and production company. AV consulting, film, graphics & media, web & marketing.",
    url: "https://www.dacoproductions.com",
    siteName: "Daco Productions",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
