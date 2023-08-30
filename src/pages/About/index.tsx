import { Link } from "react-router-dom";
import {
    ArrowLeft,
    Code,
    Handshake,
    MicrosoftOutlookLogo
} from "@phosphor-icons/react";
import { Skills } from "./Skills";

export function About() {
    return (
        <div className="about overflow-x-hidden">
            <section>
                <div className="mx-auto max-w-7xl px-8 py-12 lg:pt-20">
                    <div className="mx-auto max-w-xl">
                        <div className="flex items-center gap-x-2 mx-auto pb-10 text-white text-xs font-medium">
                            <Link to='/'>
                                <ArrowLeft
                                    className="hover:bg-zinc-950 rounded-full "
                                    color="white"
                                    size={16}
                                />
                            </Link>
                            Voltar
                        </div>
                        <div>
                            <div className="md:flex md:items-center md:justify-between md:space-x-5">
                                <div className="flex items-center space-x-5">
                                    <div className="flex-shrink-0">
                                        <div className="relative">
                                            <img
                                                className="h-16 w-16 lg:h-24 lg:w-24 rounded-full border border-white/10"
                                                src="https://media.licdn.com/dms/image/C4D03AQG2xgc2M2Nrgw/profile-displayphoto-shrink_800_800/0/1655141735409?e=1696464000&v=beta&t=ODXQajRTsW43IcNOCSReYlY2uUCb__jFx1jmW7P6BqI"
                                                alt="Perfil logo"
                                            />

                                            <span
                                                className="absolute inset-0 rounded-full shadow-inner"
                                                aria-hidden="true"
                                            />
                                        </div>
                                    </div>

                                    <div className="pt-1.5 space-y-2">
                                        <h1 className="lg:text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-acid to-lime-200">
                                            Matheus Roberto Madureira
                                        </h1>

                                        <h3 className="flex items-center gap-x-2 text-sm font-light text-white">
                                            <Code size={16} />
                                            Web Developer Freelancer
                                        </h3>

                                        <p>
                                            <a
                                                className="flex items-center gap-x-2 text-xs text-silver underline hover:no-underline hover:text-link-blue duration-200"
                                                href="#"
                                                target="_blank"
                                            >
                                                <MicrosoftOutlookLogo size={16} weight="fill" className="text-white" />
                                                black.adm7@gmail.com
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-20 sm:mt-24 text-sm font-medium">
                                <h2 className="flex items-center gap-x-2 text-white">
                                    Sobre mim
                                    <Handshake size={16} />
                                </h2>
                                <div className="text-silver font-light space-y-3 mt-3">
                                    <p>
                                        Desenvolvedor Junior com experiência em tecnologias Web desde a <strong>UI/UX</strong> com <strong>Front-end</strong>, até a infraestrutura e o <strong>Backend</strong> das aplicações.
                                    </p>

                                    <p>
                                        Atualmente estudo e soluciono problemas com estrutura de dados e algoritmos. Buscando sempre fortificar a base da computação para obter <strong>raciocínio lógico</strong> sobre problemas reais do mercado.
                                    </p>

                                    <p>
                                        Antes da área de tecnologia, já trabalhei em diversos setores do mercado, como vendas, logística, varejo e serviços gerais. Toda experiência acumulada me ajudou a ser um profissional mais <strong>comunicativo</strong> e <strong>disciplinado</strong>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-screen h-auto bg-white"
                style={{
                    backgroundImage: `url('https://tailwindcss.com/_next/static/media/7-dark@tinypng.22f91747.png')`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="mx-auto max-w-7xl px-8 py-4">
                    <div className="mx-auto max-w-xl pb-6">
                        <Skills />
                    </div>
                </div>
            </section>

        </div>
    )
}