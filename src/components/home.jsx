import React from "react";
import ProductCard from "./productsCard/index";
import './productsCard/index.css';

const Home=({Products})=>{
return(
    <div className="outherbox">
        <div className="cardlist">
            {Products.map((product)=>{
                return <ProductCard key={product.id} product={product}/>
            })}
        </div>
    </div>
)
}
export default Home;