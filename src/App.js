import React from "react";
import Header from "./component/header";
import Headline from "./component/headline";
import "./app.css";


const tempArr = [{
  fName: 'joe',
  lName: 'shmoe',
  email: 'joe@gmail.com',
  age: 29,
  onlineStatus: true
}]


function App() {
  return (
    <div className='App'>
      <Header/>
        <section className='main'>
          <Headline header="Posts" desc="Click the button to render posts" tempArr={tempArr}/>
        </section>
    
    </div>
  );
}

export default App;
