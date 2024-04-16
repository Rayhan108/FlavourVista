import Button from "../../../Components/Button/Button";
import MenuList from "../../Home/PopularMenu/MenuList";


const MenuCategory = ({items}) => {
    return (
      <div className="md:p-32 p-8">
          <div className="grid md:grid-cols-2  gap-5 md:gap-0">
        {
             items.map((item,id)=><MenuList key={id} item={item}/>)
         }
        </div>
        <Button text={'Order Your Favourite Food'}/>
      </div>
    );
};

export default MenuCategory;