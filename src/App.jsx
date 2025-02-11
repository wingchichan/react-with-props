import { useState } from "react";
import CountButton from "./components/CountButton";
import Button from "./components/Button";
import Painting from "./components/Painting";

export default function App() {
  let [count, setCount] = useState(0);

  function handleCounter() {
    setCount(count + 1);
    console.log(count);
  }

  function decreaseCounter() {
    setCount(count - 1);
    console.log(count);
  }

  function resetCounter() {
    setCount((count = 0));
    console.log(count);
  }

  return (
    <>
      <Painting
        painting="https://cdn.shopify.com/s/files/1/1159/6308/products/TropicalBliss_product_480x480.jpg?v=1632224885"
        alt_text="alt text"
      />
      <Button />
      <button onClick={handleCounter}>Click to add</button>
      <button onClick={decreaseCounter}>Click to subtract</button>
      <button onClick={resetCounter}>Reset</button>
    </>
  );
}
