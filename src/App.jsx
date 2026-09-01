import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // Estados para guardar as tarefas da API e o status de carregamento
  const [tarefas, setTarefas] = useState([]);
  const [carregando, setCarregando] = useState(true);

  // useEffect com fetch (Requisição Assíncrona)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((resposta) => resposta.json())
      .then((dados) => {
        setTarefas(dados); // salva os dados vindos da API no estado
        setCarregando(false); // desativa a mensagem de carregando
      });
  }, []); // Array vazio: executa uma vez apenas ao abrir a tela

  return (
    <div className="container py-5">

      {/* Título */}
      <div className="text-center mb-5">
        <h2 className="fw-bold text-primary">
          Tarefas vindas da API
        </h2>

        <p className="text-secondary">
          Consumindo dados de JSONPlaceholder via fetch e useState
        </p>
      </div>

      {carregando ? (
        // Loading
        <div className="text-center">
          <div
            className="spinner-border text-primary"
            role="status"
          >
            <span className="visually-hidden">
              Carregando...
            </span>
          </div>

          <p className="mt-3 text-secondary">
            Carregando dados da API...
          </p>
        </div>
      ) : (
        // Lista de tarefas
        <div className="row g-4">
          {tarefas.map((item) => (
            <div className="col-12 col-md-6" key={item.id}>
              
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body">

                  <h5 className="card-title">
                    {item.title}
                  </h5>

                  <span
                    className={`badge ${
                      item.completed
                        ? "bg-success"
                        : "bg-warning text-dark"
                    }`}
                  >
                    {item.completed
                      ? "Concluída"
                      : "Pendente"}
                  </span>

                </div>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
