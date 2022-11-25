import React, { useState } from 'react'

const CreateProduct = () => {
  // dispatch action 
  // get state product

  const [productImage, setProductImage] = useState("");
  const [product, setProduct] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    console.log(file);
    // transform the file
    setProductImage(file);
  }

  // Create transform file data

  const handleSUbmit = (e) => {
    e.preventDefault();
    console.log(productImage, product, name, price, desc)
  }

  return (
    <div className='admin_create_product'>
      <form className='form_create_product' onSubmit={handleSUbmit}>
        <h3>Create a Product</h3>
        <input
          id=''
          accept='image/*'
          type='file'
          onChange={handleImageUpload}
          required
        />

        <select onChange={(e) => setProduct(e.target.value)} required>
          <option>Select Product</option>
          <option value='shoes'>Select Product</option>
          <option value='fashion'>Select Product</option>
          <option value='furniture'>Select Product</option>
          <option value='health'>Select Product</option>
          <option value='other'>Select Product</option>
        </select>

        <input
          type='text'
          placeholder='Name'
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type='text'
          placeholder='Price'
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          type='text'
          placeholder='Description'
          onChange={(e) => setDesc(e.target.value)}
        />

        <button>
          Submit
        </button>
      </form>

      <div className='image_preview'>
    
      </div>
    </div>
  )
}

export default CreateProduct