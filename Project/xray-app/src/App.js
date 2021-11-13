import Top from "./components/Top"
import Button from "./components/Button"
import {useState, useEffect} from 'react'

function App() {
  // const [articles, setarticles] = useState([])

  useEffect(() => {
    fetch("http://127.0.0.1:5000/get").then(response => console.log(response))
  },[])
  return (
    <div className="App">
      <Top/>
      <Button/>
    </div>
  );
}

export default App;
