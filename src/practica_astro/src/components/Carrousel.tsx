import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

type Producto = {
  id: number;
  título: string;
  descripción: string;
  precio: string;
  imagen: string;
};

const API_URL = 'http://localhost:3000/api/productos?desde=1&hasta=10';
const IMG_BASE = 'http://localhost:3000/public/imagenes';

export default function Carrousel() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    let cancelled = false;

    async function loadProductos() {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();

        if (!cancelled) {
          setProductos(data);
        }
      } catch (err) {
        if (!cancelled) {
          setError(String((err as Error).message ?? err));
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    loadProductos();

    return () => {
      cancelled = true;
    };
  }, []);

  if (isLoading) {
    return (
      <section className="max-w-3xl mx-auto p-8 text-center">
        <span className="loading loading-spinner loading-lg" />
        <p className="mt-4">Cargando productos desde la API...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="max-w-3xl mx-auto p-8">
        <div className="alert alert-error">
          <span>Error al cargar productos: {error}</span>
        </div>
        <p className="mt-4 text-sm opacity-70">
          Verifica que el backend Express esté corriendo en http://localhost:3000.
        </p>
      </section>
    );
  }

  if (productos.length === 0) {
    return (
      <section className="max-w-3xl mx-auto p-8">
        <div className="alert alert-warning">
          <span>No hay productos disponibles para mostrar.</span>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-2 text-center">
        Carrousel Astro Island
      </h1>

      <p className="text-center opacity-70 mb-8">
        Componente React hidratado con Astro mediante <code>client:load</code>.
      </p>

      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {productos.map((producto) => (
              <article
                key={producto.id}
                className="flex-[0_0_100%] min-w-0 px-4"
              >
                <div className="card bg-base-100 border shadow-sm">
                  <figure className="bg-base-200 p-6">
                    <img
                      src={`${IMG_BASE}/${producto.imagen}`}
                      alt={producto.título}
                      className="h-80 w-full object-contain"
                    />
                  </figure>

                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{producto.título}</h2>
                    <p className="font-bold">{producto.precio} €</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={scrollPrev}
          aria-label="Anterior"
          className="btn btn-circle btn-primary absolute top-1/2 left-2 -translate-y-1/2"
        >
          ‹
        </button>

        <button
          type="button"
          onClick={scrollNext}
          aria-label="Siguiente"
          className="btn btn-circle btn-primary absolute top-1/2 right-2 -translate-y-1/2"
        >
          ›
        </button>
      </div>
    </section>
  );
}
