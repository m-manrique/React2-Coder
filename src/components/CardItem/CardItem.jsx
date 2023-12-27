import "./CardItem.css";
import { Link } from "react-router-dom";

const CardItem = ({ product, ruta, txtBoton }) => {
  const { id, image, category, price, title, description } = product;

  return (
    <div className="itemProduct">
      <div className="imagenContenedor">
        <img src={image} alt={`${category} - ${id}`} />
      </div>
      {txtBoton === "Inicio" ? (
        <div className="cardCuerpo">
          <h4>{title}</h4>
          <p>{`Referencia: ${id}`}</p>
          <p>{`Precio: $ ${price}`}</p>
          <p>{`Categoria: ${category}`}</p>
          <p className="descripcion">{description}</p>
        </div>
      ) : (
        <div className="cardCuerpo">
          <p>{`Referencia: ${id}`}</p>
          <p>{`Precio: $ ${price}`}</p>
          <p>{`Categoria: ${category}`}</p>
        </div>
      )}

      <Link to={ruta}>
        <button className="btn">{txtBoton}</button>
      </Link>
    </div>
  );
};

export default CardItem;
