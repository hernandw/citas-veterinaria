

const PatientDetail = ({ patient, setPatient, deletePatient }) => {
  const { id, name, owner, email, symptoms, date } = patient;
  const handleDelete = () => {
    const res = confirm("Deseas eliminar este paciente?");
    if (res) {
      deletePatient(id);
    }
  }
  return (
    <div className="px-5 py-5 mb-5 bg-white rounded-lg shadow-md">
      <p className="mb-3 font-bold text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">{name}</span>
      </p>
      <p className="mb-3 font-bold text-gray-700 uppercase">
        Propietario: <span className="font-normal normal-case">{owner}</span>
      </p>
      <p className="mb-3 font-bold text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="mb-3 font-bold text-gray-700 uppercase">
        Fecha de Alta: <span className="font-normal normal-case">{date} </span>
      </p>
      <p className="mb-3 font-bold text-gray-700 uppercase">
        Sintomas: <span className="font-normal normal-case">{symptoms}</span>
      </p>
      <div className="flex justify-between">
        <button onClick={() => setPatient(patient)} className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
          Editar
        </button>
        <button onClick={handleDelete} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default PatientDetail
