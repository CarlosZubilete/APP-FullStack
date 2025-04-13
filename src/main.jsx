// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import App from './App.jsx'
import DigimonPage from './Component/DigimonPage.jsx'
import DigimonDetail from './Component/DigimonDetail.jsx'

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
          Component: DigimonDetail,
        }
      ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
