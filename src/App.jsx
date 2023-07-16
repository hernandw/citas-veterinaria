import { useState } from "react"
import Form from "./components/Form"
import Header from "./components/Header"
import PatientList from "./components/PatientList"

import "./index.css"


const App = () => {
  const [patients, setPatients] = useState([])
  const [error, setError] = useState(false)
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form patients={patients} setPatients={setPatients} error={error} setError={setError}/>
        <PatientList patients={patients} />
      </div>
    </div>
  );
}

export default App
