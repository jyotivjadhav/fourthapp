
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
  return (
    <>
      <h1>{data}</h1>
      <h1>{data}</h1>
      <h1>{data}</h1>
    </>
  );
}
export default App;
