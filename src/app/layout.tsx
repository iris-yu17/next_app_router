import "./globals.css";
import "./layout.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TEST APP ROUTER",
  description: "test test",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={"layout"}>{children}</div>
      </body>
    </html>
  );
}
