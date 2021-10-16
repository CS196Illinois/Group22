import "./Button.css"
let count = 1
function Button() {
    return (
       <div className="button">
           <h1>Upload Image</h1>
           <input type="file" accept="image/*" onChange={clickMe()}/>
       </div>
    );
  }
  
function clickMe() {
    alert("You clicked me " + count + " times")
    count++
  } 
  export default Button;
  