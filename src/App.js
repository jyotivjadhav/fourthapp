import { useState } from "react";

function App() {
  //attribute name can be anything
  return (
    <>
      <h1>Props Demo</h1>
      <Listdemo />
    </>
  );
}
function Listdemo() {
  let [list, setlist] = useState(["delhi"]);
  let addItemAction = () => {
    
    let inputref = document.querySelector("#id1");
    let inputvalue = inputref.value;
    let newlist = [...list, inputvalue];
    setlist(newlist);
    inputref.value = "";
  };

  return (
    <>
      {/* map returnds output */}
      <input  type="text" placeholder="enter input" id="id1"/>
      <input type="button" value="Add item" onClick={addItemAction} />
      {list.map((element) => <div>{element}</div>)};
    </>
  );
}
export default App;
