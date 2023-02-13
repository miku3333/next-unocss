import { ReactNode } from 'react';
import './globals.css';
import '../styles/uno.css';

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <html lang='en'>
            <head />
            <body>{children}</body>
        </html>
    );
}

export default RootLayout;
