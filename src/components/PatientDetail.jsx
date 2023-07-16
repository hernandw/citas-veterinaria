

const PatientDetail = ({ patient }) => {
    const { id, name, owner, email, symptoms, date } = patient;
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
        Fecha de Alta:{" "}
        <span className="font-normal normal-case">{date} </span>
      </p>
      <p className="mb-3 font-bold text-gray-700 uppercase">
        Sintomas: <span className="font-normal normal-case">{symptoms}</span>
      </p>
    </div>
  );
}

export default PatientDetail
