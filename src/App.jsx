import { useEffect, useState } from "react"
import Form from "./components/Form"
import Header from "./components/Header"
import PatientList from "./components/PatientList"

import "./index.css"


const App = () => {
  const [patients, setPatients] = useState(
    JSON.parse(localStorage.getItem("pacientes")) ?? []
  );
  const [error, setError] = useState(false)
  const [patient, setPatient] = useState({})

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(patients))
  })
  const deletePatient = (id) => {
    setPatients(patients.filter((p) => p.id !== id))
  }
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form
          patients={patients}
          setPatients={setPatients}
          error={error}
          setError={setError}
          patient={patient}
          setPatient={setPatient}
          
        />
        <PatientList patients={patients} setPatient={setPatient} patient={patient} deletePatient={deletePatient} />
      </div>
    </div>
  );
}

export default App
