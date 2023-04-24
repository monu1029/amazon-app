import React from 'react'
import './product.css'
import StarIcon from '@mui/icons-material/Star';
import { useStateValue } from './stateprovider';

const Product=({id,title,image ,price,rating})=> {

  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id : id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (

    <div className='product'>
        <div className='product-info'>
            <p>{title}</p>
            <p className='product-price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product-rating'>
              
        {Array(rating).fill().map((_,i)=>(  <StarIcon/> )
         
        )}

            </div>
        </div>
        <img className='product-img' src={image}/>
        <button onClick={addToBasket}>Add to Basket</button>


    </div>
  )
}

export default Product