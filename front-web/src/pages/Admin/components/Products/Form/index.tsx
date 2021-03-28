import { makeRequest } from 'core/utils/request';
import React from 'react';
import { useState } from 'react';
import BaseForm from '../../BaseForm';
import './styles.scss';

type FormState = {
  name: string;
  price: string;
  category: string;
  description: string;
};

type FormEvent = React.ChangeEvent<
  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
>;

const Form = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    price: '',
    category: '',
    description: '',
  });
  const handleOnChange = (event: FormEvent) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const payload = {
      ...formData,
      imgUrl:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-family-select-2020?wid=470&amp;hei=556&amp;fmt=jpeg&amp;qlt=95&amp;.v=1604343709000',
      categories: [{ id: formData.category }],
    };

    makeRequest({ url: '/products', method: 'POST', data: payload }).then(
      () => {
        setFormData({ name: '', category: '', price: '', description: '' });
      }
    );
  };
  return (
    <form onSubmit={handleSubmit}>
      <BaseForm title="register one product">
        <div className="row">
          <div className="col-6">
            <input
              value={formData.name}
              name="name"
              type="text"
              className="form-control mb-5"
              onChange={handleOnChange}
              placeholder="Product Name"
            />
            <select
              value={formData.category}
              className="form-control mb-5"
              onChange={handleOnChange}
              name="category"
            >
              <option value="1">Livros</option>
              <option value="3">Compuador</option>
              <option value="2">Electronic</option>
            </select>
            <input
              value={formData.price}
              name="price"
              type="text"
              className="form-control"
              onChange={handleOnChange}
              placeholder="Price"
            />
          </div>
          <div className="col-6">
            <textarea
              name="description"
              value={formData.description}
              onChange={handleOnChange}
              className="form-control"
              cols={30}
              rows={10}
            ></textarea>
          </div>
        </div>
      </BaseForm>
    </form>
  );
};

export default Form;
