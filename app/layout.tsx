import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';
import Container from './container';

const font = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
});

export const metadata: Metadata = {
  title: 'FAC⏰DO',
  description: 'HWG~ FACTODO~',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Container>{children}</Container>
      </body>
    </html>
  );
}
