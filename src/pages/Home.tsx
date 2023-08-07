import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";

export function Home() {
    return (
        <div className="h-screen w-full bg-black"
            style={{
                backgroundImage: `url('https://supabase.com/_next/image?url=%2Fimages%2Flaunchweek%2F8%2FLW8-gradient.png&w=1920&q=75')`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <Header />
            <div className="mx-auto max-w-7xl py-6 sm:px-24 sm:py-16 lg:px-10">
                <Main />
            </div>
            <Footer />
        </div>
    )
}