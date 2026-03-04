import type {Metadata} from 'next';
import { Poppins, Nunito } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-nunito',
});

export const metadata: Metadata = {
  title: 'Shanmukha Online Classes | Building Strong Foundations',
  description: 'Premium online tuition platform for kids - Abacus, Handwriting, and Telugu classes.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${poppins.variable} ${nunito.variable}`}>
      <body className="font-body bg-background text-foreground" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
