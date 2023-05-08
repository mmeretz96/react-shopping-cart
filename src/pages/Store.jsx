import StoreItem from "../components/StoreItem/StoreItem";
import storeItems from "../data/items.json";

const Store = () => {
  return (
    <div className="store container">
      <h1>Store</h1>
      <div className="items">
        {storeItems.map((item) => (
          <StoreItem
            id={item.id}
            name={item.name}
            price={item.price}
            imgUrl={item.imgUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Store;
