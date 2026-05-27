import { useDispatch } from "react-redux";
import { CDN_URL } from "../../utils/Constant";
import { addItems } from "../../utils/appStore/appStoreSlices/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    dispatch(addItems(item))
  }
  return (
    <div>
      {items.map((item) => {
        return (
          <div 
            data-testid = "foodItems"
            key={item?.card?.info?.id}
            className="m-2 p-2 border-grey-200 border-b-2 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span>{item?.card?.info?.name}</span>
                <span>
                  - ₹
                  {item?.card?.info?.price
                    ? item?.card?.info?.price / 100
                    : item?.card?.info?.defaultPrice / 100}
                </span>
              </div>
              <div className="text-xs">{item?.card?.info?.description}</div>
            </div>
            <div className="w-3/12 p-4">
              <div className="absolute">
                <button 
                  className="p-1 mx-12 flex rounded-lg bg-black shadow-lg text-white"
                  onClick={()=>handleAddToCart(item)}
                >
                  Add +
                </button>
              </div>
              <img
                src={CDN_URL + item?.card?.info?.imageId}
                className="w-full"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
