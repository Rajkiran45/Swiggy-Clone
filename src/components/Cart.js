import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/redux/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store)=>store.cart.items);
    console.log(cartItems);
    const dispatch = useDispatch();
    const handleClearCart = () => { 
        dispatch(clearCart());
    }

    return ( 
        <div className="text-center m-4 p-4">
            <h1 className="text-xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                <button 
                    className="m-2 p-2 bg-black text-white rounded-lg"
                    onClick={handleClearCart}
                >Clear Cart</button>
            <ItemList items={cartItems}/>
            </div>
            </div>
     );
}
 
export default Cart;