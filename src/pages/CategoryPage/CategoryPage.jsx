import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CardItem from "../../components/CardItem/CardItem";
import { Link } from "react-router-dom";

const CategoryPage = () => {
  const [products, setProducts] = useState([]);
  let { categoryId } = useParams();

  //console.log(products)
  //console.log(categoryId)

  let filteredProducts = products.filter((product) => {
    return product.category === categoryId;
  });

  const urlAPI = "https://fakestoreapi.com/products";

  useEffect(() => {
    axios(urlAPI).then((res) => setProducts(res.data));
  }, []);

  return (
    <div className="container-fluid contenedor">
      <section className="row">
        {filteredProducts.map((product) => {
          return (
            <div
              className="col-xs-12 col-sm-6 col-md-4 col-lg-3 text-center cardItems" key={product.id} >   
                <CardItem product={product} ruta={`/products/${product.id}`} txtBoton={"Ver Detalle"}/>  
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default CategoryPage;
