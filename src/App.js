import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import "./style.css";

import api from "./services/cepSearchApi";
import ErrorComponent from "./components/ErrorComponent";

function App() {
  const [input, setInput] = useState("");
  const [cep, setCep] = useState({});
  const [hasError, setHasError] = useState(false);

  async function handleSearch() {
    if (input === "") {
      alert("Preencha com algum CEP!");
      return;
    }

    try {
      const response = await api.get(input);
      setCep(response.data);
    } catch {
      setHasError(true);
    } finally {
      setInput("");
    }
  }

  return (
    <div className="container">
      <h1 className="title">CEPSEARCH</h1>

      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite seu cep..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="buttonSearch">
          <FiSearch size={25} color="#fff" onClick={handleSearch} />
        </button>
      </div>

      {hasError && <ErrorComponent />}

      {Object.keys(cep).length > 0 && (
        <main className="main">
          <h2>CEP: {cep.cep}</h2>
          <span>{cep.street}</span>
          <span>{cep.neighborhood}</span>
          <span>
            {cep.city} - {cep.state}
          </span>

          {cep.location.coordinates.latitude !== null && (
            <span>
              Lat: {cep.location.coordinates.latitude} | Long:{" "}
              {cep.location.coordinates.longitude}
            </span>
          )}
        </main>
      )}
    </div>
  );
}

export default App;
