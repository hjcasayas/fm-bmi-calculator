import { HeroComponent } from '@/components/hero.component';

import localFont from "next/font/local";
import '../global.css';

const inter = localFont({ src: '../assets/fonts/Inter-VariableFont_slnt,wght.ttf', display: 'swap', variable: '--inter-font' });

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>BMI Calculator</title>
      </head>
      <body className={`${inter.variable} font-sans min-h-screen bg-[#ffffff]`}>
        <div className='h-[640px] bg-gradient-to-br from-[#ffffff] via-[#D6E6FE] to-[#D6FCFE] absolute top-0 left-0 right-0 -z-50'></div>
        <main className='px-6 py-8'>
          <div className='mb-12'>
            <HeroComponent />
          </div>
          <div>{children}</div>
        </main>
      </body>
    </html>);
};

export default AppLayout;
