import React from 'react';
import { useState } from 'react';
import BaseForm from '../../BaseForm';
import './styles.scss';

const Form = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Audition');

  const handleOnChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleOnChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value);
  };

  const handleOnChangeCategory = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCategory(event.target.value);
  };

  return (
    <BaseForm title="register one product">
      <h1 className="my-5">
        Name: {name} <br />
        Price: {price} <br />
        Categorie: {category} <br />
      </h1>
      <div className="row">
        <div className="col-6">
          <input
            value={name}
            type="text"
            className="form-control mb-5"
            onChange={handleOnChangeName}
            placeholder="Product Name"
          />
          <select
            value={category}
            className="form-control mb-5"
            onChange={handleOnChangeCategory}
          >
            <option value="bass">Bass</option>
            <option value="guitar">Guitar</option>
            <option value="voice">Voice</option>
            <option value="woodwind">Woodwind</option>
          </select>
          <input
            value={price}
            type="text"
            className="form-control"
            onChange={handleOnChangePrice}
            placeholder="Price"
          />
        </div>
      </div>
    </BaseForm>
  );
};

export default Form;
