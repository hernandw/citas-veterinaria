

const PatientDetail = () => {
  return (
    <div className="px-5 py-5 mb-5 bg-white rounded-lg shadow-md">
      <p className="mb-3 font-bold text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">Hook</span>
      </p>
      <p className="mb-3 font-bold text-gray-700 uppercase">
        Propietario: <span className="font-normal normal-case">Maria</span>
      </p>
      <p className="mb-3 font-bold text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">maria@gmail.com</span>
      </p>
      <p className="mb-3 font-bold text-gray-700 uppercase">
        Fecha de Alta:{" "}
        <span className="font-normal normal-case">15 de Julio de 2023</span>
      </p>
      <p className="mb-3 font-bold text-gray-700 uppercase">
        Sintomas: <span className="font-normal normal-case">Solo Duerme</span>
      </p>
    </div>
  );
}

export default PatientDetail
