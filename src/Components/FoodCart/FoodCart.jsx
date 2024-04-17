import Button from "../Button/Button";



const FoodCart = ({item}) => {
    const {image,recipe,price,name}=item;
    return (
        <div className="card   mx-auto card-compact md:w-64 w-56  bg-base-100 shadow-xl">
        <figure><img src={image} /></figure>
        <p className="absolute bg-slate-900 text-white p-1 right-0 mr-7 mt-5 rounded-xl">${price}</p>
          <div className="card-actions  h-80 justify-center space-y-3 p-3">
          <p className="font-bold font-mono text-xl">{name}</p>
                
                <p className="font-sm font-thin text-center">{recipe}</p>
            <Button  text={'Add To Cart'}></Button>
          
          </div>
       
      </div>
    );
};

export default FoodCart;