import "./Button.css"
let count = 1
function Button() {
    return (

           <input type="file" accept="image/*" className="button"/>
    );
  }
  
function clickMe() {
    alert("You clicked me " + count + " times")
    count++
  } 
  export default Button;
  