import FoodCart from "../FoodCart/FoodCart";

const ItemList = ({ item }) => {
  return (
    <div className="grid md:grid-cols-3 md:p-9 gap-10 p-5">
      {item.map((item, id) => (
        <FoodCart key={id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
