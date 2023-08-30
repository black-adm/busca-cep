import { useState } from "react";
import { useSaveAddress } from "../../hooks/useSaveAddress";
import { Trash } from "@phosphor-icons/react";
import { Pagination } from "./Pagination";

export function Table() {
    const [page, setPage] = useState<number>(0);
    const [limit, setLimit] = useState<number>(5);
    const { savedAddresses, removeAddress } = useSaveAddress();

    const limitResults = savedAddresses.slice(page * limit, page * limit + limit);

    return (
        <tbody className="text-sm divide-y divide-gray-100">
            {limitResults.map((address, index) => (
                <tr key={index}>
                    <td className="p-2 whitespace-nowrap">
                        <div className="font-medium text-black">
                            {address.logradouro}&nbsp;{address.complemento}
                        </div>
                    </td>

                    <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{address.cep}</div>
                    </td>

                    <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-green-500">{address.uf}</div>
                    </td>

                    <td className="p-2 whitespace-nowrap">
                        <div className="flex justify-center items-center">
                            <Trash
                                size={20}
                                className="cursor-pointer hover:text-primary-red focus:text-primary-red"
                                onClick={() => removeAddress(index)}
                            />
                        </div>
                    </td>
                </tr>
            ))}

            <Pagination
                page={page}
                setPage={setPage}
                savedAddresses={savedAddresses}
                limit={limit}
                setLimit={setLimit}
            />
        </tbody>
    );
}
