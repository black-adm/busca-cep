import {
    GlobeHemisphereWest,
    MapPin,
    Star,
    XCircle
} from "@phosphor-icons/react";
import worldMapsImg from '../assets/worldMap.svg'
import { useSaveAddress } from "../hooks/useSaveAddress";

interface AddressModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    address: any | null;
}

export function AddressModal({ isOpen, onRequestClose, address }: AddressModalProps) {
    const { addAddress } = useSaveAddress();

    const handleSaveAddress = () => {
        addAddress(address);
        onRequestClose();
    }

    const handleModalClose = () => {
        onRequestClose();
    };

    if (!isOpen || address === null) {
        return null;
    }

    return (
        <>
            {isOpen && address !== null && (
                <div className="fixed inset-0 z-50 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen px-4 text-center md:items-center sm:block sm:p-0">
                        <div
                            onClick={handleModalClose}
                            className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-40"
                            aria-hidden="true"
                        />

                        <div
                            className="inline-block w-full max-w-xl p-8 my-20 overflow-hidden text-left transition-all transform bg-black rounded-lg shadow-xl 2xl:max-w-2xl"
                        >
                            <div className="flex items-center justify-between space-x-4">
                                <h1 className="flex items-center justify-center gap-x-2 text-lg sm:text-2xl font-bold text-white">
                                    Resultado da sua busca
                                    <img
                                        className="w-[28px] h-[28px] "
                                        src={worldMapsImg}
                                        alt="map"
                                    />
                                </h1>
                                <button
                                    onClick={handleModalClose}
                                    className="flex items-center text-white focus:outline-none hover:text-acid"
                                >
                                    <XCircle className="text-xl sm:text-3xl" />
                                </button>
                            </div>

                            <p className="mt-2 text-sm text-silver">
                                Se os dados retornados estiverem vazios, utilize o <strong className="text-bege">CEP</strong> da cidade.
                            </p>

                            <section className="mt-5">
                                <div className="flex max-h-[400px] w-full flex-col">

                                    <h3 className="my-2 px-4 text-[15px] font-medium text-white">
                                        Endereço encontrado
                                    </h3>

                                    <button className="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-dark">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-silver group-hover:bg-zinc-900">
                                            <span className="w-full items-center text-center text-xl font-medium text-black group-hover:text-acid">
                                                <div className="flex items-center justify-center w-full h-full">
                                                    <GlobeHemisphereWest weight="bold" />
                                                </div>
                                            </span>
                                        </div>
                                        <div className="flex flex-col items-start justify-between text-sm">
                                            <p className="font-semibold text-white">
                                                {address.logradouro}
                                            </p>
                                            <span className="font-light text-gray-300">
                                                {address.complemento}
                                            </span>
                                            <span className="font-light text-gray-300">
                                                {address.cep}
                                            </span>
                                        </div>
                                    </button>

                                    <button className="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-dark">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-silver group-hover:bg-zinc-900">
                                            <span className="w-full items-center text-center text-xl font-medium text-black group-hover:text-acid">
                                                <div className="flex items-center justify-center w-full h-full">
                                                    <MapPin weight="bold" />
                                                </div>
                                            </span>
                                        </div>
                                        <div className="flex flex-col items-start justify-between text-sm">
                                            <p className="font-semibold text-white">
                                                {address.bairro}
                                            </p>
                                            <span className="font-light text-gray-300">
                                                {address.localidade}
                                            </span>
                                            <span className="font-light text-gray-300">
                                                {address.uf}
                                            </span>
                                        </div>
                                    </button>
                                </div>
                                <div className="flex justify-center sm:justify-end mt-6">
                                    <button
                                        type="button"
                                        onClick={handleSaveAddress}
                                        className="flex items-center gap-x-2 px-6 py-2.5 text-sm font-semibold tracking-wide bg-acid text-dark transition-colors rounded-md hover:bg-bege focus:bg-bege"
                                    >
                                        Salvar nos favoritos
                                        <Star size={20} weight="bold" />
                                    </button>
                                </div>
                            </section>
                        </div>
                    </div >
                </div >
            )
            }
        </>
    )
}



