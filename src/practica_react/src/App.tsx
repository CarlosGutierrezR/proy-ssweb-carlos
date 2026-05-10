import './App.css'
import { Routes, Route, NavLink } from 'react-router-dom'
import Portada from './pages/Portada'
import Tarea9 from './pages/Tarea9'
import Carrusel from './pages/Carrusel'

function App() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'tab tab-active' : 'tab'

  return (
    <div className="min-h-screen flex flex-col">
      <header className="navbar bg-base-200 shadow-sm">
        <div className="flex-1 px-4 text-xl font-bold">
          Tienda Prado · React
        </div>
        <nav role="tablist" className="tabs tabs-bordered">
          <NavLink to="/" end className={linkClass}>
            Portada
          </NavLink>
          <NavLink to="/tarea9" className={linkClass}>
            Tarea 9
          </NavLink>
          <NavLink to="/carrusel" className={linkClass}>
            Carrusel
          </NavLink>
        </nav>
      </header>

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Portada />} />
          <Route path="/tarea9" element={<Tarea9 />} />
          <Route path="/carrusel" element={<Carrusel />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
