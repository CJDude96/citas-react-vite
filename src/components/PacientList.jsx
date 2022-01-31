import PacientCard from "./PacienteCard";


const PacientList = ({ pacients, setPacientUp, handleDelete }) => {

  return (
    <div className="md:w-full lg:w-3/5">
      <h2 className="font-black text-3xl text-center">Listado de pacientes</h2>
      <p className="text-black font-bold text-lg text-center mb-6">
        Administra tus{" "}
        <span className="text-orange-500 font-bold text-lg">
          Pacientes y citas{" "}
        </span>
      </p>

      <div className="bg-white shadow-xl rounded-lg py-2 px-5 mb-10 mx-3">
        {pacients.length
          ? pacients.map((pacient) => (
              <PacientCard key={pacient.id} pacient={pacient} setPacientUp={setPacientUp}  handleDelete={handleDelete} />
            ))
          : <p className="font-bold text-center text-xl my-4">No hay pacientes registrados</p>}
      </div>
    </div>
  );
};

export default PacientList;
