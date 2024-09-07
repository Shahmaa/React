import { X } from "@mui/icons-material";
import { useState } from "react";
import Componenttwo from "./Componenttwo";

const Componentone = () => {
  const [namea, setNamea] = useState("");
  const [regnoa, setRegnoa] = useState("");
  const [addressa, setAddressa] = useState("");
  const [agea, setAgea] = useState("");
  const [pnamea, setPnamea] = useState("");
  const [show, setShow] = useState(false);
  const handleName = (event) => {
    setNamea(event.target.value);
  };
  const handleRegno = (event) => {
    setRegnoa(event.target.value);
  };
  const handleAge = (event) => {
    setAgea(event.target.value);
  };
  const handleAddress = (event) => {
    setAddressa(event.target.value);
  };
  const handlePname = (event) => {
    setPnamea(event.target.value);
  };
  const Show = () => {
    setShow(true);
  };
  return (
    <div>
        {show ? (
          <Componenttwo 
          name = {namea}
          age = {agea}
          regno = {regnoa}
          address = {addressa}
          pname = {pnamea}/>
        ) :<div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 5,
            border: "5px solid black",
            padding: 10,
          }}
        >
          <h3>STUDENT REGISTRATION FORM</h3>
          <input  onChange={handleName}placeholder="Name" />
          <input onChange={handleRegno}placeholder="Reg no" />
          <input onChange={handleAge}placeholder="Age" />
          <input onChange={handleAddress}placeholder="Address" />
          <input onChange={handlePname} placeholder="Parent Name"/>
          <button style={{ height: 20, width: 170 }} onClick={Show}>
            submit
          </button>
          </div>
          </div>}
          </div>
  );
};
export default Componentone;












const Componenttwo = (props) => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid black",
        flexDirection:"column",
      }}
    >
      <p> name is : {props.name}</p>
      <p> regno is : {props.regno}</p>
      <p> age is : {props.age}</p>
      <p> address is : {props.address}</p>
      <p> parent name is : {props.pname}</p>
    </div>
  );
};
export default Componenttwo;
