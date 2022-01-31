import { useState, useEffect } from "react";
import AlertsModal from "./AlertsModal";

const Form = ({ pacients, setPacients, pacientUp }) => {
  const [formData, setFormData] = useState({
    petName: "",
    petOwner: "",
    email: "",
    alta: "",
    symptons: "",
    id: "",
  });

  const [editForm, setEditForm] = useState(false);

  useEffect(() => {
    if (Object.keys(pacientUp).length > 0) {
      setFormData(pacientUp);
      setEditForm(true);
    }
  }, [pacientUp]);

  // DETECTA LOS ERRORES
  const [error, setError] = useState(false);

  // MANEJA EL SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(formData);

    if (Object.values(formData).includes("")) {
      setError(true);
      console.log("Hay uno o mas campos vacios");
    } else {
      setError(false);
      setPacients([...pacients, formData]);
      resetForm();
    }
  };

  // MANEJA EL EDITAR
  const handleEdit = (e) =>{
    e.preventDefault()

    console.log('handle edit')
    

    if (Object.values(formData).includes("")) {
      setError(true);
    } else {
      setError(false);
      setEditForm(false);
      const newList = pacients.map( (obj) => {
        return pacientUp.id === obj.id ? formData : obj
      })
      setPacients(newList)
      resetForm()
    }

  }

  // GENERA LOS ID
  const genId = () => {
    const numberId = Math.random().toString(36).substring(2);
    const dateId = Date.now().toString(36);

    return dateId + numberId;
  };

  // REINICIA EL FORMULARIO
  const resetForm = () => {
    setFormData({
      petName: "",
      petOwner: "",
      email: "",
      alta: "",
      symptons: "",
      id: "",
    });
  };

  return (
    <div className="md:w-full lg:w-2/5">
      <h2 className="font-black text-3xl text-center">
        Seguimiento de pacientes
      </h2>

      <p className="text-black font-bold text-lg text-center mb-6">
        Añade Pacientes y{" "}
        <span className="text-orange-500 font-bold text-lg">
          Administralos{" "}
        </span>
      </p>

      <form
        id="myForm"
        onSubmit={editForm ? handleEdit : handleSubmit}
        className="bg-white shadow-xl rounded-lg py-10 px-5 mb-7 sticky top-5"
      >
        {/* PET NAME */}
        <div className="mb-5">
          <label
            className="block text-gray-700 font-bold uppercase"
            htmlFor="petName"
          >
            Nombre Mascota:
          </label>
          <input
            type="text"
            name="petName"
            id="petName"
            placeholder="Nombre de la mascota"
            className="border-2 w-full h-10 px-3 mt-2 rounded-md"
            value={formData.petName}
            onChange={(e) =>
              setFormData({
                ...formData,
                petName: e.target.value,
              })
            }
          />
        </div>

        {/* OWNER */}
        <div className="mb-5">
          <label
            className="block text-gray-700 font-bold uppercase"
            htmlFor="petOwner"
          >
            Nombre Propietario:
          </label>
          <input
            type="text"
            name="petOwner"
            id="petOwner"
            placeholder="Nombre del propietario"
            className="border-2 w-full h-10 px-3 mt-2 rounded-md"
            value={formData.petOwner}
            onChange={(e) =>
              setFormData({
                ...formData,
                petOwner: e.target.value,
              })
            }
          />
        </div>

        {/* EMAIL */}
        <div className="mb-5">
          <label
            className="block text-gray-700 font-bold uppercase"
            htmlFor="email"
          >
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email del propietario"
            className="border-2 w-full h-10 px-3 mt-2 rounded-md"
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
          />
        </div>

        {/* DE ALTA */}
        <div className="mb-5">
          <label
            className="block text-gray-700 font-bold uppercase"
            htmlFor="alta"
          >
            Fecha de Alta:
          </label>
          <input
            type="date"
            name="alta"
            id="alta"
            placeholder="Fecha de alta"
            className="border-2 w-full h-10 px-3 mt-2 rounded-md"
            value={formData.alta}
            onChange={(e) =>
              setFormData({
                ...formData,
                alta: e.target.value,
              })
            }
          />
        </div>

        {/* SYMPTOMS */}
        <div className="mb-5">
          <label
            className="block text-gray-700 font-bold uppercase"
            htmlFor="symptons"
          >
            Sintomas:
          </label>
          <textarea
            className="border-2 w-full h-20 px-3 mt-2 resize-none rounded-md"
            name="symptoms"
            id="symptoms"
            cols="5"
            rows="10"
            placeholder="Describe los sintomas"
            value={formData.symptons}
            onChange={(e) =>
              setFormData({
                ...formData,
                symptons: e.target.value,
              })
            }
          ></textarea>
        </div>

        {error && <AlertsModal>No puede haber campos vacios</AlertsModal>}

        <input
          type="submit"
          value={editForm ? "Editar" : "Guardar"}
          className="w-full border-2 rounded-xl font-bold text-white h-10 bg-orange-700
                transition-colors delay-100 hover:ease-in-out hover:bg-orange-900 hover:cursor-pointer "
          onClick={() => {
            editForm
              ? ""
              : setFormData({
                  ...formData,
                  id: genId(),
                });
          }}
        />
      </form>
    </div>
  );
};

export default Form;
