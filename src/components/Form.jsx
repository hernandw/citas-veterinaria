import { useEffect, useState } from "react";
import Error from "./Error";
import getId from "../helpers/getId";

const Form = ({ patients, setPatients, error, setError, patient }) => {
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [email, setEmail] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [date, setDate] = useState("");

useEffect(() => {
  if(Object.keys(patient).length >0) {
    setName(patient.name);
    setOwner(patient.owner);
    setEmail(patient.email);
    setSymptoms(patient.symptoms);
    setDate(patient.date);
  }
}, [patient])  
  const id = getId();

  const getForm = (e) => {
    e.preventDefault();

    if ([name, owner, email, symptoms, date].includes("")) {
      setError(true);
      return
    } 
    setError(false);

     const objectPatient = {
       
       name,
       owner,
       email,
       symptoms,
       date,
     };
    if (patient.id) {
      objectPatient.id = patient.id;
      const patientUpdate = patients.map((p) => p.id === patient.id ? objectPatient : p);
      setPatients(patientUpdate);
    } else {
      objectPatient.id = getId()
       setPatients([...patients, objectPatient]);
       
    }

    setName("");
    setOwner("");
    setEmail("");
    setSymptoms("");
    setDate("");
  };
  return (
    <div className="p-5 md:w-1/2 lg:w-2/5">
      <h2 className="text-3xl font-bold text-center text-black">
        Seguimiento Pacientes
      </h2>
      <p className="mt-5 mb-5 text-lg text-center">
        Añade Pacientes y{" "}
        <span className="font-bold text-indigo-600">Administralos</span>
      </p>

      <form className="px-5 py-5 bg-white rounded-lg shadow-md">
        <>{error ? <Error /> : ""}</>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block font-bold text-gray-700 uppercase"
          >
            Nombre de la Mascota
          </label>
          <input
            id="name"
            type="text"
            placeholder="Nombre de la Mascota"
            className="w-full p-2 mt-2 placeholder-gray-400 border-2 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="owner"
            className="block font-bold text-gray-700 uppercase"
          >
            Nombre del Propietario
          </label>
          <input
            id="owner"
            type="text"
            placeholder="Nombre del Propietario"
            className="w-full p-2 mt-2 placeholder-gray-400 border-2 rounded-md"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block font-bold text-gray-700 uppercase"
          >
            Email del Propietario
          </label>
          <input
            id="email"
            type="text"
            placeholder="Email del Propietario"
            className="w-full p-2 mt-2 placeholder-gray-400 border-2 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="date"
            className="block font-bold text-gray-700 uppercase"
          >
            Fecha de Alta
          </label>
          <input
            id="date"
            type="date"
            className="w-full p-2 mt-2 placeholder-gray-400 border-2 rounded-md"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="symptoms"
            className="block font-bold text-gray-700 uppercase"
          >
            Síntomas
          </label>
          <textarea
            id="symptoms"
            className="w-full p-2 mt-2 placeholder-gray-400 border-2 rounded-md"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          />
        </div>

        <input
          type="submit"
          value={patient.id ? "Editar Paciente" : "Agregar Paciente"}
          className="w-full px-4 py-2 font-bold text-white bg-indigo-600 rounded cursor-pointer hover:bg-indigo-700"
          onClick={getForm}
        />
      </form>
    </div>
  );
};

export default Form;
