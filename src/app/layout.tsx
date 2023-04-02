import { Nanum_Gothic } from 'next/font/google';
import TanstackQueryProvider from '@/contexts/TanstackQueryProvider';
import Header from '@/components/common/Header';
import { BLOG_TITLE } from '@/constants/common';
import './globals.css';

const gothic = Nanum_Gothic({
  weight: '400',
  subsets: ['latin'],
});

export const metadata = {
  title: BLOG_TITLE,
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={gothic.className}>
      <body>
        <TanstackQueryProvider>
          <Header />
          <section
            className="flex flex-col w-full max-w-screen-xl mx-auto
       max-w-2 py-4"
          >
            {children}
          </section>
        </TanstackQueryProvider>
      </body>
    </html>
  );
}
