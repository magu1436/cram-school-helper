import reactLogo from '@/assets/react.svg'
import viteLogo from '/vite.svg'
import '@/apps/App.css'
import {ClassDetailsPage} from "@/features/classDetails"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <ClassDetailsPage />
    </>
  )
}

export default App
