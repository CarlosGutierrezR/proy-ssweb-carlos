import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
export type ProductoSSG = {
  id?: number;
  título: string;
  descripción?: string;
  precio: string | number;
  imagen: string;
};
type Props = {
  productos: ProductoSSG[];
};
const IMG_BASE = '/images';
export default function CarrouselSSG({ productos }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);
  if (!productos || productos.length === 0) {
    return (
      <section className="max-w-3xl mx-auto p-8">
        <div className="alert alert-warning">
          <span>No hay productos disponibles para la galería SSG.</span>
        </div>
      </section>
    );
  }
  return (
    <section className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-2 text-center">
        Galería SSG con React
      </h1>
      <p className="text-center opacity-70 mb-8">
        Este carrusel recibe los productos como props desde Astro.
        No consume la API en cliente.
      </p>
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {productos.map((producto, index) => (
              <article
                key={`${producto.título}-${index}`}
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
