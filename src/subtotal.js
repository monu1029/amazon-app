import React from "react";
import CurrencyFormat from 'react-currency-format';
import "./subtotal.css"
import { useStateValue } from "./stateprovider";
import {getBasketTotal} from "./reducer"

const Subtotal =()=>{

    const [{ basket }, dispatch] = useStateValue();

    return(
        <div className="Subtotal">
            <CurrencyFormat 
            renderText={(value)=>(
                <>
                <p>
                    Subtotal ({basket.length} items) : <strong>{value}</strong>
                </p>
                <small className="subtotal_gift">
                    <input type="checkbox"/>This order contain a gift
                </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType="text"
            thousandSeparator="true"
            prefix={"$"}
            />
            <button>Proceed to Checkout</button>

        </div>

    )
}

export default Subtotal;