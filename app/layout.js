import { Inter } from "next/font/google";
import "../globals.css";
import "bootstrap/dist/css/bootstrap.css";
import BootstrapJs from "@/components/BootstrapJs";
import Header from "@/components/Header";
import Provider from "@/components/Provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Promptopia Sample",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <div className="main">
            <Header />
            {children}
          </div>
          <BootstrapJs />
        </Provider>
      </body>
    </html>
  );
}
