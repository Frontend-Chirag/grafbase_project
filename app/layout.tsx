import Navbar from '@/components/shared/Navbar';
import './global.css';
import Footer from '@/components/shared/Footer';

export const metaData = {
    title: 'Dribble Clone',
    description: 'upload your Projects'
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body>
                <Navbar />
                <main>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}