import axios, { AxiosInstance } from 'axios';

interface Address {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export const fetchAddress = async (cep: string): Promise<Address | null> => {

  const api: AxiosInstance = axios.create({
    baseURL: "https://viacep.com.br/ws/"
  });

  try {
    const response = await api.get<Address>(`${cep}/json/`);
    if (response.status === 200) {
      return response.data;
    }
    throw new Error('Erro ao buscar CEP');
  } catch (error) {
    throw new Error('Erro ao buscar CEP');
  }
};
