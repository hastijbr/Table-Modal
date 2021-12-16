import "./App.scss";
import TableComponent from "./Components/TableComponent/TableComponent";
import TodoTable from "./Components/TodoTableComponent/TodoTable";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          {/* <div className="col-xl-4">
            <TodoTable />
          </div> */}
          <div className="col-xl">
            <TableComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
