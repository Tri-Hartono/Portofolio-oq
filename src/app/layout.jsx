import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import localFont from 'next/font/local';
import LeftMenu from './components/LeftMenu';
import RightMenu from './components/RightMenu';
import Cursor from './components/Cursor';
import LoadingScreen from './components/LoadingScreen';
import LoadingScreenWithSpinner from './components/LoadingScreenWithSpinner';
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
const myFont = localFont({
    src: '../../public/assets/fonts/avantgarde/avgardo_3.ttf',
});

export const metadata = {
    title: 'Example Portfolio',
    description: 'Example Portfolio',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body
                className={`${myFont.className} antialiased w-screen overflow-x-hidden text-[#B7AB98]`}
            >
                <LoadingScreenWithSpinner />
                <LeftMenu />
                {children}
                <RightMenu />
            </body>
        </html>
    );
}
