import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./providers";
import MainNav from "./main/common/nav/mainNav";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Abdulrahman Ali",
  description: "My Personal App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full bg-white">
      <body className="h-full">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
