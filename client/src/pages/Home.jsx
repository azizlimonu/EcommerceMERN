import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { addToCart } from '../features/reducer/cartSlice';

const Home = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const { items: data, status } = useSelector((state) => state.products);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  }

  return (
    <div className='home-container'>
      <h2>New Arrivals</h2>
      {status === "success" ? (
        <>
          <div className='products'>
            {data?.map((product) => (
              <div key={product.id} className='product'>
                <h3>{product.name}</h3>
                <img src={product.image} alt={product.name} />
                <div className="details">
                  <span>{product.desc}</span>
                  <span className="price">${product.price}</span>
                </div>
                <button onClick={() => handleAddToCart(product)}>
                  Add To Cart
                </button>
              </div>
            ))}
          </div>
        </>
      ) : status === "pending" ? (
        <p>Loading...</p>
      ) : (
        <p>Unexpected Error Occured</p>
      )}
    </div>
  )
}

export default Home