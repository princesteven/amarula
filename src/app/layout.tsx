import '@styles/globals.css';
import Footer from "./@footer";
import type {Metadata} from 'next';
import BottomNavigation from './@bottomNavigation/default';

export const metadata: Metadata = {
    title: 'Amarula Tree Hotel',
    description: 'Best camping, meals and accommodations with mother nature in the middle of Mikumi National Park',
    keywords: ['mikumi', 'tanzania national parks', 'amarula', 'amarula tree hotel', 'camping', 'mikumi accommodation'],
    applicationName: "Amarula Hotels and Lodge",
    authors: {
        name: "Prince Erick Steven"
    },
    icons: "/favicon.ico"
}

export default function RootLayout(props: {
    children: React.ReactNode,
    topNavigation: React.ReactNode,
    bottomNavigation: React.ReactNode,
    footer: React.ReactNode,
}) {
    return (
        <html lang="en">
        <body>
        <main className={"relative"}>
            {props.topNavigation}
            <div className="h-full flex flex-col justify-between">
                {props.children}
                {props.footer}
                <Footer />
                <BottomNavigation />
                {/*{props.bottomNavigation}*/}
            </div>
        </main>
        </body>
        </html>
    )
}
