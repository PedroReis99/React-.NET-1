import React from 'react';
import Table from 'react';
import "./style.css";
import "./css/principal.css";
import "./css/tabela.css";
import "./css/lateral.css";

function App() {
  return (
    <div className="flex-div">
      <div className="div-lateral">
          <button id="btnUpload">
              Upload
          </button>
          <button id="btnLista">
            Lista de itens
          </button>
      </div>
      <div className="div-principal">
          <h6 id="h">Home > Importação de Dados</h6>
          <h2>Listagem de produtos</h2>
          <div className="div-tabela">
            <form id="form-pesquisa">
              <input type="text" id="pesquisa"></input> 
              <button id="pesquisa">Pesquisa</button>
            </form>
            <table border="1">
              <tr>
                <th>Código:</th>
                <th>Nome:</th>
                <th>Valor</th>
              </tr>
              <tr> 
                <td></td> <td></td> <td></td>
              </tr>
              <tr> 
                <td></td> <td></td> <td></td>
              </tr>
              <tr>
                <td></td> <td></td> <td></td>
              </tr>
              <tr>
                <td></td> <td></td> <td></td>
              </tr>
              <tr>
                <td></td> <td></td> <td></td>
              </tr>
              <tr>
                <td></td> <td></td> <td></td>
              </tr>
              <tr>
                <td></td> <td></td> <td></td>
              </tr>
            </table>
            <div className="roda-pe">
                  <center>
                      <h5 id="pag">Página:</h5>
                  </center>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
