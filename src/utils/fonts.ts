import { Montserrat } from 'next/font/google';
import localFont from 'next/font/local';

export const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});
export const albertText = localFont({
  src: '../../public/fonts/AlbertTextBold.otf',
  variable: '--font-albert-text',
});

export const arimo = localFont({
  src: '../../public/fonts/ArimoTextBold.ttf',
  variable: '--font-arimo-text',
});
