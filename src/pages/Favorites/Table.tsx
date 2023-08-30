import { Trash } from "@phosphor-icons/react";

export function Table() {
    return (
        <tbody className="text-sm divide-y divide-gray-100">
            <tr>
                <td className="p-2 whitespace-nowrap">
                    <div className="flex items-center">
                        <div className="font-medium text-black">
                            Rua Not Found, 404
                        </div>
                    </div>
                </td>

                <td className="p-2 whitespace-nowrap">
                    <div className="text-left">127.0.0.1</div>
                </td>

                <td className="p-2 whitespace-nowrap">
                    <div className="text-left font-medium text-green-500">
                        JS
                    </div>
                </td>

                <td className="p-2 whitespace-nowrap">
                    <div className="flex justify-center items-center">
                        <Trash
                            size={20}
                            className="cursor-pointer hover:text-primary-red focus:text-primary-red"
                        />
                    </div>
                </td>
            </tr>
        </tbody>
    )
}