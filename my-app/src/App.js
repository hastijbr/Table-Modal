import "./App.scss";
import ModalComponent from "./Components/ModalComponent/ModalComponent";
import TableComponent from "./Components/TableComponent/TableComponent";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-xl">
            <TableComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
