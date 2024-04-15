import { Helmet } from 'react-helmet-async';
import Cover from '../../../Shared/Cover/Cover';
import menuBg from "../../../assets/menu/banner3.jpg"
const Menu = () => {
    return (
        <div>
            <Helmet>FlavourVista | Our Menu</Helmet>
            <Cover img={menuBg} title={'our menu'} details={'would you like to try dish?'}/>
        </div>
    );
};

export default Menu;