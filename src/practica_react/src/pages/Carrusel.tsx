import { useCallback } from 'react'
import useSWR from 'swr'
import useEmblaCarousel from 'embla-carousel-react'
import Spinner from '../components/Spinner'

type Producto = {
  id: number
  título: string
  descripción: string
  precio: string
  imagen: string
}

const API_URL = 'http://localhost:3000/api/productos?desde=1&hasta=10'
const IMG_BASE = 'http://localhost:3000/public/imagenes'

const fetcher = async (url: string): Promise<Producto[]> => {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return res.json()
}

export default function Carrusel() {
  const { data, error, isLoading } = useSWR<Producto[]>(API_URL, fetcher)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  if (isLoading) {
    return (
      <div className="flex justify-center mt-10">
        <Spinner />
      </div>
    )
  }

  if (error) {
    return (
      <p className="text-red-600 text-center mt-10">
        Error al cargar productos: {String((error as Error).message ?? error)}
      </p>
    )
  }

  if (!data || data.length === 0) {
    return <p className="text-center mt-10">No hay productos disponibles.</p>
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Carrusel de la Tienda
      </h1>

      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {data.map((producto) => (
              <div
                className="flex-[0_0_100%] min-w-0 px-4"
                key={producto.id}
              >
                <div className="flex flex-col items-center">
                  <img
                    src={`${IMG_BASE}/${producto.imagen}`}
                    alt={producto.título}
                    className="h-80 object-contain bg-base-200 rounded-lg shadow"
                  />
                  <p className="mt-3 text-center font-semibold max-w-md">
                    {producto.título}
                  </p>
                  <p className="text-base-content/70">{producto.precio} €</p>
                </div>
              </div>
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
    </div>
  )
}
