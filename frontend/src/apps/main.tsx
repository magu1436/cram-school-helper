import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { RouterProvider } from 'react-router-dom';
import routesBasic from "./routes/routesBasic";

import "@/assets/index.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routesBasic} />
  </StrictMode>,
)
