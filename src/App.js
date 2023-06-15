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
    let newlist = [...list, "mumbai"];
    setlist(newlist);
  };

  return (
    <>
      {/* map returnds output */}
      <input type="button" value="Add item" onClick={addItemAction} />
      {list.map((element) => " hello " + element + " ")};
    </>
  );
}
export default App;
