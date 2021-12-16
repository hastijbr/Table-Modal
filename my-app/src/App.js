import "./App.scss";
import TableComponent from "./Components/TableComponent/TableComponent";
import ModalComponent from "./Components/ModalComponent/ModalComponent";


function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-xl">
            <TableComponent />
            <ModalComponent/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
