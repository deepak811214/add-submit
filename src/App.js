import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [list, addToList] = useState([]);
  const [store, setStore] = useState([]);
  const handleAdd = () => {
    var key = new Date().getTime().toString();
    list.push({ key: key });
    addToList([...list]);
  };

  const handleSubmit = () => {
    console.log(store);
  };

  const handleGetData = (key, data) => {
    console.log(1111, key, data);
  };
  return (
    <div className="App">
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSubmit}>Submit</button>
      {list.map((key) => {
        return <List index={key} getData={handleGetData}></List>;
      })}
    </div>
  );
}

function List(props) {
  const [data, setData] = useState({ fname: "", lname: "", selected: "" });
  useEffect(() => {
    props.getData(props.index, data);
  }, [data]);
  const handleChange = (e) => {
    let { name, value } = e.target;
    setData((prevData) => {
      return {
        ...prevData,
        [name]: value
      };
    });
  };
  return (
    <div key={props.index}>
      <input
        type="text"
        name="fname"
        value={data.fname}
        onChange={(e) => handleChange(e)}
      ></input>
      <input
        type="text"
        name="lname"
        value={data.lname}
        onChange={(e) => handleChange(e)}
      ></input>
      <select
        value={data.selected}
        name="selected"
        onChange={(e) => handleChange(e)}
      >
        <option value="A">Apple</option>
        <option value="B">Banana</option>
        <option value="C">Cranberry</option>
      </select>
    </div>
  );
}
