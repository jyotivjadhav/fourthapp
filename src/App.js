
function App() {
  //attribute name can be anything
  return (
    <>
      <h1>Props Demo</h1>
      <Messagedemo username="jyoti"/>
      <Messagedemo username="jjj" />
      <Messagedemo username="jyo"/>
    </>
  );
}
function Messagedemo(props) { 
  return (
    <>
      <h1>HEllo {props.username}</h1>
    </>
  );
}
export default App;
