import { useState } from 'react'
import { Link } from 'react-router-dom'

type Tab = 'about' | 'tasks'

export default function Portada() {
  const [tab, setTab] = useState<Tab>('about')

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Portada</h1>

      <div role="tablist" className="tabs tabs-bordered mb-6">
        <a
          role="tab"
          className={`tab ${tab === 'about' ? 'tab-active' : ''}`}
          onClick={() => setTab('about')}
        >
          Sobre el proyecto
        </a>
        <a
          role="tab"
          className={`tab ${tab === 'tasks' ? 'tab-active' : ''}`}
          onClick={() => setTab('tasks')}
        >
          Ir a las tareas
        </a>
      </div>

      {tab === 'about' && (
        <div className="space-y-3 text-base">
          <p>
            SPA con Vite + React + Tailwind + DaisyUI para las tareas 9 y 10
            de la asignatura SSBW.
          </p>
          <p>
            La página de Tarea 9 muestra dos componentes: uno consume una API
            externa de imágenes de perros, y el otro consume la API REST del
            backend en{' '}
            <code className="bg-base-200 px-1 rounded">
              http://localhost:3000/api
            </code>
            .
          </p>
          <p>
            La página de Carrusel utiliza Embla Carousel para mostrar varios
            productos de la tienda con controles anterior/siguiente.
          </p>
        </div>
      )}

      {tab === 'tasks' && (
        <div className="flex flex-col gap-4">
          <Link to="/tarea9" className="btn btn-primary">
            Tarea 9 · Perritos + Cuadros
          </Link>
          <Link to="/carrusel" className="btn btn-secondary">
            Tarea 10 · Carrusel de la tienda
          </Link>
        </div>
      )}
    </div>
  )
}
