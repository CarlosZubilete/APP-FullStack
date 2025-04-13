// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import App from './App.jsx'
import DigimonPage from './Component/DigimonPage.jsx'
import DigimonDetail from './Component/DigimonDetail.jsx'
import InstrumentPage from './Component/InstrumentPage.jsx'
import AddInstrument from './Component/AddInstrument.jsx'
import EditInstrument from './Component/EditInstrument.jsx'
import DeleteInstrument from './Component/DeleteInstrument.jsx'


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
        },
        {
          path: '/instrumentsPage',
          Component: InstrumentPage
        },
        {
          path: '/addInstrument',
          Component: AddInstrument,
        },
        {
          path: '/editInstrument',
          Component: EditInstrument,
        },
        {
          path: '/deleteInstrument',
          Component: DeleteInstrument,
        }
        
      ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
