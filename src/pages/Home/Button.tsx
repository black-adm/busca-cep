import { MagnifyingGlass } from "@phosphor-icons/react";

interface DataButtonProps {
    onClick: () => void;
    disabledButton: boolean;
}

export function Button({ onClick, disabledButton }: DataButtonProps) {

    const handleButtonClick = () => {
        onClick();
    };

    return (
        <div className="flex items-center justify-center w-full mx-3 sm:mx-0">
            <button
                type="button"
                onClick={handleButtonClick}
                disabled={disabledButton}
                className="disabled:cursor-not-allowed disabled:opacity-30 rounded-md bg-acid py-2.5 w-full text-sm font-semibold text-dark transition-colors hover:bg-bege focus:bg-bege"
            >
                <span className="flex items-center justify-center gap-x-2">
                    Buscar dados
                    <MagnifyingGlass size={16} weight="bold" />
                </span>
            </button>
        </div>

    )
}