import React from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notification, userProfile } from ".";
import { useStateContext } from '../context/ContextProvider';


const Navbar = () => {
    return (
        <div>
            <h2>Navbar</h2>
        </div>
    );
};

export default Navbar;