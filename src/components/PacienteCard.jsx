const PacientCard = ({ pacient, setPacientUp, handleDelete }) => {
  const { petName, petOwner, email, alta, symptons, id } = pacient;

  return (
    <div className="mx-2 my-4 bg-indigo-100 p-4 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Codigo: <span className="font-normal normal-case">{id}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre mascota:{" "}
        <span className="font-normal normal-case">{petName}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre propietario:{" "}
        <span className="font-normal normal-case">{petOwner}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha de Alta: <span className="font-normal normal-case">{alta}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: <span className="font-normal normal-case">{symptons}</span>
      </p>

      <div className="flex justify-end my-2">
        <button
          type="button"
          className="px-5 py-2 mx-2 
          bg-blue-600 hover:bg-blue-800 
          transition-colors delay-100 rounded-lg 
          text-white font-bold"
          onClick={() => setPacientUp(pacient)}
        >
          Editar
        </button>
        <button
          type="button"
          className="px-5 py-2 mx-2 
        bg-red-600 hover:bg-red-800 
          transition-colors delay-100 rounded-lg 
        text-white font-bold"
          onClick={ () => handleDelete(id)}
        >
          
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default PacientCard;
