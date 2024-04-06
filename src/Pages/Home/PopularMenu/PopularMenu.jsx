import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuList from "./MenuList";
import Button from "../../../Components/Button/Button";



const PopularMenu = () => {
    const [menu,setMenu]=useState([]);
    useEffect(()=>{
        fetch("menu.json")
        .then(res=>res.json())
        .then(data=>setMenu(data.filter(item=>item.category==='popular'))
        )
    },[])

    return (
        <section>
       
            <SectionTitle subHeading={"check it out"} heading={"popular menu"}/>
       <div className="grid md:grid-cols-2">
       {
            menu.map((item,id)=><MenuList key={id} item={item}/>)
        }
       </div>
      <div className="">
      <Button text={'View Full Menu'}/>
      </div>
        </section>
        
    );
};

export default PopularMenu;