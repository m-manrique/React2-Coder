import { useState, useEffect } from "react";
import axios from "axios";
import CardItem from "../CardItem/CardItem";
import "./ItemListContainer.css";
import { Link } from "react-router-dom";

const ItemListContainer = () => {
  const urlAPI = 'https://fakestoreapi.com/products'
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios(urlAPI).then((res) => setProducts(res.data));
  }, []);

  return (
    <div className="container-fluid contenedor">
      <section className="row">
        {products.map((product) => {
          return (
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 text-center cardItems" key={product.id} >          
              <CardItem product={product} ruta={`/products/${product.id}`} txtBoton={"Ver Detalle"} />    
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default ItemListContainer;