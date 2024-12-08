import Navbar from '@/components/Navbar';
import './globals.css';
import { ReactNode } from 'react';
import Footer from '@/components/Footer';


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Nike</title>
      </head>
      <body>
       
        <Navbar/>
        <main className='min-h-screen'>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
