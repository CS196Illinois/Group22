import "./Button.css"
let count = 1
function Button() {
    return (
        <button onClick={clickMe}>
            Upload Image
        </button>
    );
  }
  
function clickMe() {
    alert("You clicked me " + count + " times")
    count++
  } 
  export default Button;
  