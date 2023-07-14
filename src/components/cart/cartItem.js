import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {AdjustItemQtyAdd,AdjustItemQtyMinus,RemoveFromCart} from "../reducers/rootReducer";
import "./cart.css"

const CartItem=({item})=>
{
    const dispatch=useDispatch();
    const[quantity,setquantity]=useState(item.item.qty);
    const add=(item,quantity)=>{
        if(quantity<5)
        {
            dispatch(AdjustItemQtyAdd(item,quantity));
        }
        else{
            alert("You Can not add More than 5 ")
        }
    }
    const minus=(item,quantity)=>{
        if(quantity>1)
        {
            dispatch(AdjustItemQtyMinus(item,quantity));
        }
        else
        {
            alert("Remove Product From Cart");
            dispatch(RemoveFromCart(item));
        }
    }
    const removing=(item)=>{
            alert("Remove Product From Cart");
            dispatch(RemoveFromCart(item))
    }
    return(
        <div>
            <div className="fulbox" key={item.item.id}>
                        <div className="half11">
                            <img src={item.item.imageUrl} alt={item.item.Name}/>
                        </div>
                        <div className="half21">
                            
                            <div>
                                <h3>{item.item.Name}</h3>
                                <h4>MRP:-{parseFloat(item.item.Price)}.00</h4>
                                <div>
                                <button onClick={()=>minus(item.item.id,item.qty)} className="one">-</button>
                                <button className='two'>{item.qty}</button>
                                <button onClick={()=>add(item.item.id,item.qty)} className="one" >+</button>
                                </div>
                                <button className='delete' onClick={()=>removing(item.item.id)}>Remove</button>
                            </div>
                            <div>
                               
                            </div>
                        </div>
                    </div>
        </div>
    )

}

export default CartItem;


/*const mapDipatchToProps=(dispatch)=>{
    return{
        adjustItemQty:(id,value)=>{dispatch(adjustItemQty(id,value))},
        removeFromCart:(id)=>{dispatch(removeFromCart(id))},
    };
};*/