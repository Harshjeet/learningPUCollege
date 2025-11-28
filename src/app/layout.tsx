import type { Metadata } from 'next';
import { Urbanist, Roboto } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '../context/LanguageContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';

const urbanist = Urbanist({ 
  subsets: ['latin'], 
  variable: '--font-urbanist',
  display: 'swap',
});

const roboto = Roboto({ 
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'], 
  variable: '--font-roboto',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Learners PU College | Excellence in Education',
  description: 'Empowering students to achieve their dreams through innovative teaching methodologies, world-class facilities, and personalized mentorship programs.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${urbanist.variable} ${roboto.variable}`} suppressHydrationWarning>
      <body className="font-sans bg-white">
        <LanguageProvider>
          <Navbar />
          <FloatingContact />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
