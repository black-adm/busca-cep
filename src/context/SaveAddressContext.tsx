import React, { createContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

interface Address {
    logradouro: string;
    complemento: string;
    cep: string;
    bairro: string;
    localidade: string;
    uf: string;
}

interface SaveAddressContextType {
    savedAddresses: Address[];
    addAddress: (address: Address) => void;
    removeAddress: (index: number) => void;
}

export const SaveAddressContext = createContext<SaveAddressContextType | undefined>(
    undefined
);

export function SaveAddressProvider({ children }: { children: React.ReactNode }) {
    const savedAddressesFromLocalStorage = localStorage.getItem('savedAddresses');

    const initialSavedAddresses: Address[] =
        savedAddressesFromLocalStorage !== null
            ? JSON.parse(savedAddressesFromLocalStorage)
            : [];

    const [savedAddresses, setSavedAddresses] = useState<Address[]>(
        initialSavedAddresses
    );

    const addAddress = (address: Address) => {
        const newAddresses = [...savedAddresses, address];
        setSavedAddresses(newAddresses);
        localStorage.setItem('savedAddresses', JSON.stringify(newAddresses));

        toast.success('Endereço salvo com sucesso!', {
            position: 'bottom-right',
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            className: 'bg-white text-black font-medium',
            bodyClassName: 'text-base',
        });
    };

    const removeAddress = (index: number) => {
        const newAddresses = savedAddresses.filter((_, i) => i !== index);
        setSavedAddresses(newAddresses);
        localStorage.setItem('savedAddresses', JSON.stringify(newAddresses));
    };

    return (
        <>
            <SaveAddressContext.Provider
                value={{ savedAddresses, addAddress, removeAddress }}
            >
                {children}
            </SaveAddressContext.Provider>

            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    );
}

