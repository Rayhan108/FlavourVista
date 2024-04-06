

const MenuList = ({item}) => {
    const {image,price,name,recipe} = item;
    return (
     
        <div className="flex  gap-4 px-3 md:my-5">
        <div className="w-[118px] h-[104px] ">
                <img  className="borRadius" src={image} alt="" />
            </div>
            <div>
                <p className="uppercase font-mono">{name}</p>
                <p>{recipe}</p>
            </div>
            <div>
                <p className="text-amber-500"> ${price}</p>
            </div>
        </div>
       
    );
};

export default MenuList;