import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { productsCreate } from '../../features/reducer/productsSlice';

const CreateProduct = () => {
  const dispatch = useDispatch();
  const { createStatus } = useSelector((state) => state.products)
  // get state product

  const [productImage, setProductImage] = useState("");
  const [products, setProducts] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");

  // console.log(productImage);
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    // console.log(file);

    TransformFile(file);
  }

  const TransformFile = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setProductImage(reader.result);
      };
    } else {
      setProductImage("");
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(productsCreate(
      { image: productImage, products, name, price, desc }
    ));
    // console.log(productImage, product, name, price, desc)
  }

  return (
    <div className='admin_create_product'>
      <form className='form_create_product' onSubmit={handleSubmit}>
        <h3>Create a Product</h3>
        <input
          id='imgUpload'
          accept='image/*'
          type='file'
          onChange={handleImageUpload}
          required
        />

        <select onChange={(e) => setProducts(e.target.value)} required>
          <option value=''>Select Product</option>
          <option value='shoes'>Shoes</option>
          <option value='fashion'>Fashion</option>
          <option value='furniture'>Furniture</option>
          <option value='phone'>phone</option>
          <option value='other'>Other</option>
        </select>

        <input
          type='text'
          placeholder='Name'
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type='text'
          placeholder='Price'
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <input
          type='text'
          placeholder='Description'
          onChange={(e) => setDesc(e.target.value)}
          required
        />

        <button type='submit'>
          {createStatus}
          Submit
        </button>
      </form>

      <div className='image_preview'>
        {productImage ? (
          <>
            <img src={productImage} alt='error' />
          </>
        ) : (
          <p>Product image preview</p>
        )}
      </div>
    </div>
  )
}

export default CreateProduct