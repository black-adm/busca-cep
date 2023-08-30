import { useContext } from "react";
import { SaveAddressContext } from "../context/SaveAddressContext";

export function useSaveAddress() {
    const context = useContext(SaveAddressContext);
    if (context === undefined) {
        throw new Error('useSaveAddress must be used within a SaveAddressProvider');
    }
    return context;
}