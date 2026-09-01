import { useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  //Estados para guardar as tarefas da API e o status de carregamento
  const [tarefas, setTarefas] = useState([]);
  const [carregando, setCarregando] = useState(true);

  //useEffect com fetch (Requisicao Assincrona)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then((resposta) => resposta.json())
      .then((dados) => {
        setTarefas(dados); //salva os dados vindos da API no estado
        setCarregando(false); //desativa a msg de carregando...

      });

  }, []) //Array vazio: executa uma vez apenas ao abrir a tela

  return (
    <>
      <h2>Tarefas vindas da API</h2>
      <p>Consumindo dados de JSONPlaceholder via fetch e useState</p>
      {carregando ? (
        <div>Carregando dados da API</div>
      ) : (
        <ul>
          {tarefas.map((item) => (
            <li key={item.id}>
              <span>{item.title} </span>
              <span>{item.completed ? "Concluída" : "Pendente"}</span>
            </li>
          ))}
        </ul>

      )}
    </>
  )
}

export default App
