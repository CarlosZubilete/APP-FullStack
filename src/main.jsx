// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import App from './App.jsx'
// DIGIMONS:
import DigimonPage from './Component/DigimonPage.jsx'
import DigimonDetail from './Component/DigimonDetail.jsx'
// Instruments:
import InstrumentPage from '@feature/instruments/page/InstrumentPage.jsx'
import AddInstrument from '@feature/instruments/components/AddInstrument.jsx'
import EditInstrument from '@feature/instruments/components/EditInstrument.jsx'
import DeleteInstrument from '@feature/instruments/components/DeleteInstrument.jsx'


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
          path: '/instrumentsPage/new',
          Component: AddInstrument,
        },
        {
          path: '/instrumentsPage/:id/edit',
          Component: AddInstrument,
        },
        {
          path: '/instrumentsPage/:id/delete',
          Component: DeleteInstrument
        },
        {
          path: '/editInstrument',
          Component: EditInstrument,
        },
        {
          path: '/deleteInstrument',
          element: <p> This Component have been actualied</p>
        }
      ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
