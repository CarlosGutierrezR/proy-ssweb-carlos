import { Perritos } from '../components/Perritos'
import { Cuadros } from '../components/Cuadros'

export default function Tarea9() {
  return (
    <section id="center" className="flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold underline mb-4">Práctica de React</h1>
      <div className="flex flex-col md:flex-row gap-12 items-start justify-center w-full">
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold">Perritos</h2>
          <Perritos />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold">Cuadros (Tienda)</h2>
          <Cuadros />
        </div>
      </div>
    </section>
  )
}
