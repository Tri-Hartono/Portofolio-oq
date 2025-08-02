// import { Geist, Geist_Mono } from 'next/font/google';
import { Poppins } from 'next/font/google';
import './globals.css';
import localFont from 'next/font/local';
import LeftMenu from './components/LeftMenu';
import RightMenu from './components/RightMenu';
import Cursor from './components/Cursor';
import LoadingScreen from './components/LoadingScreen';
import LoadingScreenWithSpinner from './components/LoadingScreenWithSpinner';
import { CursorProvider } from './components/CursorContext';

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const myFont = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

// const myFont = localFont({
//     src: '../../public/assets/fonts/avantgarde/avgardo_3.ttf',
// });

export const metadata = {
    title: 'Example Portfolio',
    description: 'Example Portfolio',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en' suppressHydrationWarning>
            <body
                className={`${myFont.className} bg-custome-dark antialiased w-screen overflow-x-hidden text-white relative`}
                suppressHydrationWarning
            >
                <div
                    className='w-[20%] h-full absolute left-0 top-0 z-0 pointer-events-none'
                    style={{
                        backgroundImage:
                            'linear-gradient(to right, rgba(1,18,56,0.6), rgba(1,18,56,0))',
                        backdropFilter: 'blur(2px)',
                        WebkitBackdropFilter: 'blur(2px)', // for Safari
                    }}
                ></div>
                <LoadingScreenWithSpinner />
                <Cursor />

                {/* <CursorProvider> */}
                <LeftMenu />
                {children}
                <RightMenu />
                <div
                    className='w-[20%] h-full absolute right-0 top-0 z-0 pointer-events-none'
                    style={{
                        backgroundImage:
                            'linear-gradient(to left, rgba(1,18,56,0.6), rgba(1,18,56,0))',
                        backdropFilter: 'blur(2px)',
                        WebkitBackdropFilter: 'blur(2px)',
                    }}
                ></div>

                {/* </CursorProvider> */}
            </body>
        </html>
    );
}
