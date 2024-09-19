import logo from "./logo.svg";
import "./App.css";
import { useContext, useReducer, useState } from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import TableActions from "./Component/TableActions";
import Button from 'react-bootstrap/Button';
import { ManageContext } from "./Component/ManagerContext";
import useFilter from "./CustomHooks/UseFilter";




function App() {
  const { state, disatch } = useContext(ManageContext);
  const { filter, setFilter, filteredItems } = useFilter(state, "Name");
  const [sortCriteria, setSortCriteria] = useState("name");
  const handleSortChange = (event) => {
    setSortCriteria(event.target.value);
  };
  const sortedItems = filteredItems.sort((a, b) => {
    if (sortCriteria === "name") {
      return a.Name.localeCompare(b.Name);
    } else if (sortCriteria === "description") {
      return a.Description.localeCompare(b.Description);
    }
    return 0; // Default case
  });
 
  return (
   
      <div className="App">
      <TableActions dispatch={disatch} setFilter={setFilter} handleSort={handleSortChange}/>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name </th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems?.map((item, i) => {
            return (
              <tr key={i}> 
                <td>{i + 1}</td>
                <td>{item.Name}</td>
                <td>{item.Description}</td>
                <td> <Button variant="danger" onClick={()=>disatch({type:"remove",id:item.Id})}>Delete</Button></td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
   
    
  );
}

export default App;
