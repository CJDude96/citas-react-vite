import Form from "./components/Form";
import Header from "./components/Header";
import PacientList from "./components/PacientList";
import { useState,useEffect } from "react";

function App() {
  const [pacients, setPacients] = useState([]);

  const [pacientUp, setPacientUp] = useState({});

  useEffect( () => {
    const getLocalStorage = () => {
      const pacientsLocalS = JSON.parse(localStorage.getItem('pacients')) ?? [];
      setPacients(pacientsLocalS)
    }
    getLocalStorage()
  }, [])

  useEffect( () => {
    localStorage.setItem('pacients', JSON.stringify(pacients))
  }, [pacients])

  const handleDelete = (id) => {
    const verifDel = confirm("¿Desea eliminar el paciente?");

    if (verifDel) {
      const newList = pacients.filter((obj) => obj.id != id);

      setPacients(newList);
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <Header />
      <div className="mt-12 md:flex">
        <Form
          pacients={pacients}
          setPacients={setPacients}
          pacientUp={pacientUp}
        />
        <PacientList
          pacients={pacients}
          setPacientUp={setPacientUp}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default App;
