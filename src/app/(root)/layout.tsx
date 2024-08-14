import type { Metadata } from "next";

import MobileNav from "@/components/MobileNav";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CssBaseline } from "@mui/material";
import Background from "@/components/Background";
import StoreProvider from "../providers/storeProvider";


export const metadata: Metadata = {
  title: "Loris Media",
  description: "Loris Media porfolio page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<>
<CssBaseline>
  <StoreProvider>
<Navbar/>
      <main className="overflow-hidden relative">
        <Background/>
       
        {children}
 
        </main>
           <Footer/>
           </StoreProvider>
           </CssBaseline>
           </>
  );
}
