import { useSelector } from "react-redux";
import ItemList from "../menu/ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../../utils/appStore/appStoreSlices/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text 2xl font-bold">Cart</h1>
      {cartItems.length === 0 ? (
        <h1> Your cart is empty. Add items to cart</h1>
      ) : (
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      )}

      <div className="w-6/12 m-auto border border-black">
        <ItemList items={cartItems}></ItemList>
      </div>
    </div>
  );
};

export default Cart;
