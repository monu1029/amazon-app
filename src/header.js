import React from "react";
import "./header.css"
import SearchIcon from '@mui/icons-material/Search';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {Link} from 'react-router-dom';

import { useStateValue } from "./stateprovider";


const Header = ()=>{
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className="header">
            
            <Link to="/">
            <img className="logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" placeholder="logo"></img>
            </Link>
           
            <div className="header-search">
                <input className="header_searchInput" type="text" placeholder="Search Amazon.in"></input>
                <SearchIcon className="searchIcon"/>
            </div>

            <div className="header_nav">
                <div className="header_option">
                    <span className="header_optionOne">
                           Hello Guest
                    </span>
                    <span className="header_optionTwo">
                           SignIn
                    </span>

                </div>

                <div className="header_option">
                  <span className="header_optionOne">
                           Return
                    </span>
                    <span className="header_optionTwo">
                           & Order
                    </span>
                    
                </div>

                <div className="header_option">
                <span className="header_optionOne">
                           Your
                    </span>
                    <span className="header_optionTwo">
                           Prime
                    </span>
                      
                </div>
<Link to="/checkout">  
            <div className="shoping_option" to="/checkout">
            <AddShoppingCartIcon/>
                <span className="header_optionTwo header_basketcount">
                {basket.length}
                    </span>
                </div>
</Link>                  
            </div>
         </div>
    )
}

export default Header;