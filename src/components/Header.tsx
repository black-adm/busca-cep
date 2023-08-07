import { Logo } from "./Logo";
import {
    Info,
    Star,
} from "@phosphor-icons/react";

export function Header() {
    return (
        <header className="pt-2">
            <nav className="w-full p-3 lg:px-12">
                <div className="flex justify-center items-center space-x-8 lg:space-x-16">
                    <a href="/">
                        <Logo />
                    </a>

                    <nav className="flex items-center gap-x-6 text-xs text-white font-bold">
                        <a
                            href='/sobre'
                            className="flex items-center gap-x-1 hover:text-bege"
                        >
                            <Info size={16} className="text-acid" />
                            Sobre
                        </a>

                        <a
                            href="/contato"
                            className="flex items-center gap-x-1 hover:text-bege"
                        >
                            <Star size={16} className="text-acid" />
                            Favoritos
                        </a>
                    </nav>
                </div>
            </nav>
        </header>
    )
}