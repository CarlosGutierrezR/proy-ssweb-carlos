import { useEffect, useState } from 'react';
import useSWR from 'swr';
import Spinner from './Spinner';

type Producto = {
  id: number;
  título: string;
  descripción: string;
  precio: string;
  imagen: string;
};

const API_URL = 'http://localhost:3000/api/productos';
const IMG_BASE = 'http://localhost:3000/public/imagenes';

const fetcher = async (url: string): Promise<Producto[]> => {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
};

export function Cuadros() {
  const { data, error, isLoading, mutate } = useSWR<Producto[]>(API_URL, fetcher);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (data && data.length > 0) {
      setIdx(Math.floor(Math.random() * data.length));
    }
  }, [data]);

  const recargar = () => {
    if (data && data.length > 0) {
      setIdx(Math.floor(Math.random() * data.length));
    }
    mutate();
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center gap-4 mt-6">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center gap-4 mt-6">
        <p className="text-red-600 text-center max-w-xs">
          Error al cargar la tienda: {String((error as Error).message ?? error)}
        </p>
        <button
          onClick={recargar}
          className="px-4 py-2 bg-green-500 text-white font-semibold rounded-md shadow hover:bg-green-600 transition-colors"
        >
          Reintentar
        </button>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return <p className="mt-6">No hay productos disponibles.</p>;
  }

  const producto = data[idx] ?? data[0];

  return (
    <div className="flex flex-col items-center gap-4 mt-6">
      <img
        src={`${IMG_BASE}/${producto.imagen}`}
        alt={producto.título}
        className="w-64 h-64 object-contain bg-gray-100 rounded-lg shadow-lg p-2"
      />
      <p className="text-sm text-gray-700 text-center max-w-xs">{producto.título}</p>
      <p className="font-bold">{producto.precio} €</p>
      <button
        onClick={recargar}
        className="px-4 py-2 bg-green-500 text-white font-semibold rounded-md shadow hover:bg-green-600 transition-colors"
      >
        ¡Otro cuadro!
      </button>
    </div>
  );
}
