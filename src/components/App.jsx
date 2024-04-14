import React,{useState} from "react";

function App() {

const [fullName,setFullname]=useState({
  fName:"",
  lName:""
});

function UpdateName(event){
    const newValue=event.target.value;
    const inputName=event.target.name;

    setFullname(prevValue=>{
         if(inputName==="fName"){
          return{
          fName:newValue,
          lName:prevValue.lName
          };
         }else{
          return{
           fName:prevValue.fName,
           lName:newValue
          };
         }
    });
}


  return (
    <div className="container">
      <h1>Hello {fullName.fName}{fullName.lName}</h1>
      <form>
        <input name="fName" onChange={UpdateName} placeholder="First Name" value={fullName.fName}/>
        <input name="lName" onChange={UpdateName} placeholder="Last Name" value={fullName.lName}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
