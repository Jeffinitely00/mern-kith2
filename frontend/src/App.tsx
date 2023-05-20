import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { sampleProducts } from "./data";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <header>Amazion</header>
      <main>
        <ul>
          {sampleProducts.map((product) => (
            <li key={product.slug}>
              <img src={product.image} alt={product.name} className='product-image'/>
              <h2>{product.name}</h2>
              <p>${product.price}.00</p>
            </li>
          ))}
        </ul>
      </main>
      <footer>All rights reserved</footer>
    </div>
  );
}

export default App;
