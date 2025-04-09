// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import App from './App.jsx'
import DigimonPage from './Component/DigimonPage.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
      children:[
        {
          index: true,
          element: <h1>Hi! I'm Index</h1>,
        },
        {
          path: '/digimonsPage',
          Component: DigimonPage
        },
        {
          path: '/digimonsPage/:name',
          element: <p>Soy un detalle de digimon</p>,
        }
      ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
