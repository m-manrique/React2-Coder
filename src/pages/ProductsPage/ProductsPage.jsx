import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./ProductsPage.css";
import CardItem from "../../components/CardItem/CardItem";

const ProductsPage = () => {
  const [product, setProduct] = useState({});
  let { id } = useParams();

  //console.log(product)

  const urlAPI = `https://fakestoreapi.com/products/${id}`;

  useEffect(() => {
    axios(urlAPI).then((res) => setProduct(res.data));
  }, [id]);

  return (
    <div className="container-fluid detailProduct">    
        {product.id ? <CardItem product={product} ruta={`/`} txtBoton={"Inicio"}/> : null}
    </div>
  );
};

export default ProductsPage;
