import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import { routes } from './routes/routes'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={<route.component />} />
        ))}
      </Routes>
    </div>
  )
}

export default App
