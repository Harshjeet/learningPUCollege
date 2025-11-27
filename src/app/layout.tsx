import type { Metadata } from 'next';
import { Inter, Playfair_Display, Source_Code_Pro } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '../context/LanguageContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const sourceCodePro = Source_Code_Pro({ subsets: ['latin'], variable: '--font-source-code' });

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
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${sourceCodePro.variable}`} suppressHydrationWarning>
      <body className="font-body bg-white">
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
