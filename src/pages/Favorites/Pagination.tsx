import { ChangeEvent, useState } from "react";
import { useSaveAddress } from "../../hooks/useSaveAddress";

export function Pagination(props: any) {
    const [filter, setFilter] = useState('');

    const { page, setPage, limit, setLimit } = props;
    const { savedAddresses } = useSaveAddress();

    const handleLimitChange = (event: ChangeEvent<HTMLSelectElement>): void => {
        setPage(0);
        setLimit(parseInt(event.target.value));
    };

    const handlePageChange = (newPage: number): void => {
        setPage(newPage);
        setFilter('');
    };

    return (
        <>
            {filter === '' && (
                <div className="w-full flex justify-between items-center py-6">
                    <div className="flex space-x-6 sm:space-x-4 items-center">
                        <span className="text-xs sm:text-sm text-gray-700">Itens</span>
                        <select
                            value={limit}
                            onChange={handleLimitChange}
                            className="border rounded-md p-1 sm:px-2 sm:py-1 text-xs sm:text-sm focus:outline-none focus:ring focus:border-blue-300"
                        >
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                        </select>
                    </div>

                    <div className="flex items-center">
                        <span className="ml-4 sm:ml-0 text-xs sm:text-sm text-gray-700">
                            Página {page + 1} de {Math.ceil(savedAddresses.length / limit)}
                        </span>
                        <button
                            onClick={() => handlePageChange(page - 1)}
                            disabled={page === 0}
                            className={`ml-2 px-2 py-1 text-xs sm:text-sm rounded-md border ${page === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'
                                }`}
                        >
                            Anterior
                        </button>
                        <button
                            onClick={() => handlePageChange(page + 1)}
                            disabled={page === Math.ceil(savedAddresses.length / limit) - 1}
                            className={`ml-2 px-2 py-1 text-xs sm:text-sm rounded-md border ${page === Math.ceil(savedAddresses.length / limit) - 1
                                ? 'opacity-50 cursor-not-allowed'
                                : 'hover:bg-gray-200'
                                }`}
                        >
                            Próxima
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}