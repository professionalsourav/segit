import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const name = "sourav"
  const age = 24
  const headerNmae = "app header"
  const footerNmae = "app footer"

  const stylingDiv = {
    textAlign:"center",
    color: "red",
    fontSize:"2rem"  }

  return (
    <>
      <Secxy headername={headerNmae} footername={footerNmae}>
        <div style={stylingDiv}>inline styling in functional component</div>
        <div style={{ height: "80vh" }}>
          <h1 style={{ color: "red", background: "blue", textAlign: "center" }}>
            hello
          </h1>
          <p>yaaad a raha haii tera pyaar</p>
          <Xy value={name} age={age}>
            <div
              style={{ background: "green", height: "10vh", minHeight: "10px" }}
            ></div>
            <button style={{ background: "blue", marginTop: "1%" }}>
              {name}
            </button>
          </Xy>
        </div>
      </Secxy>
    </>
  );
}

export function Xy(props){
const {value, age, children} = props;
  
  return (
    <>
      <Secxy headername="xy header" footername="xy footer">
        
        <h1>
          hello from xy {value} and age is {age}
        </h1>
        {children[1]}
      </Secxy>
    </>
  );
};

export function Secxy({ headername, children,footername }) {
  return (
    <>
      <div
        style={{
          height: "10vh",
          width: "100%",
          background: "wheat",
          color: "black",
          margin: "0 0 0 0",
          padding: "0 1%",
          display: "flex",
        }}
      >
        <diV>{headername}</diV>
      </div>
      {children}
      <div
        style={{
          height: "10vh",
          width: "100%",
          background: "black",
          color: "white",
          margin: "1% 0 0 0",

          display: "flex",
          justifyContent: "center",
        }}
      >
        <diV>{footername}</diV>
      </div>
    </>
  );
}

export default App




