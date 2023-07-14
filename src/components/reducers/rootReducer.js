import { createSlice } from "@reduxjs/toolkit";
import Products from "../../data";

const initialState={
        cart:[],
    };

const rootReducer=createSlice({
       name:'cartData',
       initialState,
       reducers:{
        AddToCart:(state,action)=>{
                const{type,payload}=action;  //payload==product.ID type=rootreducer_name/action_name 
                console.log(action.payload,action.type);
                const item=Products.find((product)=>product.id==action.payload);
                const inCart=state.cart.find((item)=>item.item.id==action.payload?true:false);
                if(inCart)
                {
                        state.cart.map((item)=>{
                                if(item.item.id==action.payload)
                                {
                                        item.qty+=1;
                                }
                        })
                }
                else{
                      
                        state.cart.push({item,qty:1});
                        console.log(state.cart.length);
                }
        },


        RemoveFromCart:(state,action)=>{
                let uptcart=state.cart;
                let rmvID=action.payload;
                
                uptcart.map((item)=>{
                        if(item.item.id==rmvID)
                        {
                                uptcart.splice(item,1) 
                        }
                })
                state.cart=uptcart;
        },

        AdjustItemQtyAdd:(state,action)=>{
                let uptid=action.payload;
                let uptcart=state.cart;
                uptcart.map((item)=>{
                        if(item.item.id==uptid)
                        {
                                item.qty+=1;
                        }
                })
        },
        
        AdjustItemQtyMinus:(state,action)=>{
                let uptid=action.payload;
                let uptcart=state.cart;
                uptcart.map((item)=>{
                        if(item.item.id==uptid)
                        {
                                item.qty-=1;
                        }
                })
        },

        // OrderPlaced:(state,action)=>{
        //         state.cart.splice(0,cart.length);
        // },
       },
});
export const {AddToCart,RemoveFromCart,AdjustItemQtyAdd,AdjustItemQtyMinus,OrderPlaced}=rootReducer.actions
export default rootReducer.reducer;