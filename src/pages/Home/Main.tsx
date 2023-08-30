import { useState } from "react";
import { SearchInput } from "./SearchInput";
import { Button } from "./Button";
import { AddressModal } from "../../components/AddressModal";
import { fetchAddress } from "../../services/api";

import mapsImage from '../../assets/maps.svg'

type AddressProps = {
    cep?: string;
}

export function Main() {
    const [address, setAddress] = useState<AddressProps | null>();
    const [isModalOpen, setModalIsOpen] = useState(false);
    const [cepInputValid, setCepInputValid] = useState<true | null>(null);
    const [cepError, setCepError] = useState(false);

    const handleCepChange = async (cep: string) => {
        if (cep.length === 0 || cep.length < 8) {
            setCepInputValid(null);
            setAddress(null);
            setCepError(false);
            return;
        }

        try {
            const fetchedAddress = await fetchAddress(cep);
            if (!fetchedAddress) {
                setCepInputValid(null);
                setAddress(null);
                setCepError(true);
                return;
            }

            setCepInputValid(true);
            setAddress(fetchedAddress);
            setCepError(false);
        } catch (error) {
            setCepInputValid(null);
            setAddress(null);
            setCepError(true);
        }
    };

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div className="bg-gradient-to-bl from-black to-dark relative isolate overflow-hidden p-6 shadow-lg shadow-dark sm:rounded-3xl sm:px-16 md:pt-8 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
                viewBox="0 0 1024 1024"
                className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                aria-hidden="true"
            >
                <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                <defs>
                    <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                        <stop stopColor="#dc2626" />
                        <stop offset={1} stopColor="#c00" />
                    </radialGradient>
                </defs>
            </svg>

            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-tr from-lime-200 via-acid to-white">
                    Consulte dados de
                    <br />
                    CEP's nacionais
                </h2>

                <p className="mt-6 text-lg leading-8 text-white">
                    Utilize nosso serviço de buscas gratuitas e de alto desempenho. Realize consultas de Códigos de Endereçamento Postal <strong className="text-acid">CEP</strong> do Brasil.
                </p>

                <div className="mt-10 sm:gap-x-2 flex items-center justify-center lg:justify-start">
                    <SearchInput onFetchAddress={handleCepChange} />
                    <Button onClick={openModal} disabledButton={!cepInputValid} />
                </div>
                {cepError && (
                    <p className="text-primary-red text-xs pt-2">
                        CEP inválido ou não encontrado, verifique o CEP digitado.
                    </p>
                )}
            </div>

            <div className="relative mt-16 h-80 lg:mt-8">
                <img
                    className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                    src={mapsImage}
                    alt="App Location Map"
                    width={1824}
                    height={1080}
                />
            </div>

            <AddressModal isOpen={isModalOpen} onRequestClose={closeModal} address={address} />
        </div>
    )
}