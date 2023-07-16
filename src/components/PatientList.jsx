import PatientDetail from "./PatientDetail";


const PatientList = ({patients}) => {
  return (
    <div className="p-5 md:w-1/2 lg:w-3/5">
      <h2 className="text-3xl text-center text-black">Listado de Pacientes</h2>
      <p className="mt-5 mb-5 text-lg text-center">
        Administra tus{" "}
        <span className="font-bold text-indigo-600">Pacientes y Citas</span>
      </p>
      
      {patients.length > 0 ? (
        patients.map((patient) => (
          <PatientDetail key={patient.id} patient={patient} />
        ))
      ): <p>No hay pacientes</p>}
    </div>
  );
}

export default PatientList
