
function App() {
  //attribute name can be anything
  return (
    <>
      <h1>Props Demo</h1>
      <Messagedemo username="jyoti" email="jyotidsf@gmail.com"/>
      <Messagedemo username="jjj" email="jyotidsf@gmail.com"/>
      <Messagedemo username="jyo" email="jyotidsf@gmail.com"/>
    </>
  );
}
function Messagedemo({ email, username }) { 
  return (
    <>
      <h1>Hello {username} {email}</h1>
       
    </>
  );
}
export default App;
