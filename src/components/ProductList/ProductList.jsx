import "./productList.css";
import Product from "../Product/Product";
import { products } from "../../data/data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Projects</h1>
        <p className="pl-desc">
          Skills: HTML/CSS3, Javascript, Node.js, React.js MongoDB, PHP, jQuery, Redux.js, Git, MySQL, Express, Jest, SCSS, Ajax, REST APIs, Axios
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;