import { useState } from "react"

import InputMask from 'react-input-mask'

import { MapPin } from "@phosphor-icons/react";

interface CepInputProps {
    onFetchAddress: (cep: string) => void;
}

export function SearchInput({ onFetchAddress }: CepInputProps) {

    const [cep, setCep] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputCep = e.target.value;
        setCep(inputCep);
        onFetchAddress(inputCep);
    };

    return (
        <>
            <div className="flex flex-col w-full max-w-sm items-center">
                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <MapPin size={16} />
                    </div>

                    <InputMask
                        mask='99999-999'
                        maskChar=''
                        value={cep}
                        placeholder="Digite o CEP"
                        inputMode="numeric"
                        onChange={handleInputChange}
                        className="block pl-8 w-full rounded-md border-0 py-2 px-4 text-dark shadow-sm placeholder:text-gray-700 placeholder:text-xs sm:text-sm sm:leading-6 focus:border-2 focus:border-silver outline-none"
                    />
                </div>
            </div>
        </>

    )
}