
function App() {
  //attribute name can be anything
  return (
    <>
      <h1>Props Demo</h1>
      <Listdemo/>
 
    </>
  );
}
function Listdemo() { 
  let data = "hello universe";
  let list = [];
  for (let i = 0; i < 10; i++) { 
    list.push(data);
  }
  return (
    <>
      <h1>{data}</h1>
      {/* map returnds output */}
      {list.map((element) => element)};
      <br></br>
      {list.map((element )=>" hello " +element+" ")};
    </>
  );
}
export default App;
