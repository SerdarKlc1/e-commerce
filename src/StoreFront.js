import { useEffect, useState } from "react";
import Product from "./Product";
import Loader from "./Loader";
export default function StoreFront() {
  const [products, setProducts] = useState([]);
  const [isLogged, setIsLogged] = useState(true);

  useEffect(() => {
    setIsLogged(true);
    fetch("https://react-tutorial-demo.firebaseio.com/products.json")
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setProducts(data);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLogged(false));
  }, []);

  return (
    <div className="store-front">
        {isLogged && <Loader />}
        {products.map((product) => {
          return <Product key={product.id} details={product} />;
        })}
     
    </div>
  );
}