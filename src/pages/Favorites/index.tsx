import { Link } from "react-router-dom";
import { Logo } from "../../components/Logo";
import { Table } from "./Table";
import { ArrowLeft } from "@phosphor-icons/react";

export function Favorites() {
    return (
        <>
            <section className="flex flex-col antialiased bg-black h-screen px-4 pb-12 overflow-hidden"
                style={{
                    backgroundImage: `url('https://supabase.com/_next/image?url=%2Fimages%2Flaunchweek%2F8%2FLW8-gradient.png&w=1920&q=75')`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <span className="flex justify-center items-center pt-28">
                    <Link to="/">
                        <Logo />
                    </Link>
                </span>

                <div className="flex flex-col justify-center h-full">
                    <div className="w-full max-w-3xl mx-auto bg-white shadow-lg rounded-lg border border-gray-200">
                        <header className="flex items-center justify-between px-8 py-6 border-b border-gray-200">
                            <h2 className="font-semibold text-black">
                                Endereços salvos
                            </h2>

                            <Link
                                to='/'
                                className="flex items-center gap-x-2 text-xs text-black font-medium"
                            >
                                <ArrowLeft
                                    className="hover:bg-gray-100 rounded-full "
                                    color="black"
                                    size={16}
                                />
                                Voltar
                            </Link>
                        </header>

                        <div className="p-5">
                            <div className="overflow-x-auto">
                                <table className="table-auto w-full">
                                    <thead className="text-xs font-semibold uppercase rounded-sm text-gray-400 bg-gray-50">
                                        <tr>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Endereço</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Cep</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">UF</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-center">Excluir</div>
                                            </th>
                                        </tr>
                                    </thead>

                                    <Table />
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}