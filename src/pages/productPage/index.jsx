import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  Card,
  CardsWrapper,
  Form,
  Div,
  Button,
  Button1,
  Button2,
  Button3,
} from "./style";
import Img from "../../imgs/img/5598.jpg";
import Img1 from "../../imgs/img/54630.jpg";
import Img2 from "../../imgs/img/wepik-202191-121229.png";

function ProductPage() {
  const [products, setProducts] = useState([]);

  const [edit, setEdit] = useState({ edit: false, data: {} });

  const [open, setOpen] = useState(true);

  const getProducts = () => {
    axios
      .get("https://ibs-school.herokuapp.com/api/v1/for-developer/product")
      .then((res) => {
        setProducts(res.data);
      })
      .catch();
  };

  useEffect(() => {
    getProducts();
  }, []);

  const submitForm = (e) => {
    e.preventDefault();

    const { name, price, description } = e.target;
    const form = {
      name: name.value,
      price: price.value,
      description: description.value,
    };

    axios
      .post(
        "https://ibs-school.herokuapp.com/api/v1/for-developer/product/",
        form
      )
      .then((res) => {
        console.log("submitted successfuly");
        getProducts();
        e.target.reset();
      })
      .catch();
  };

  const updateForm = (e) => {
    e.preventDefault();

    const { name, price, description } = e.target;

    const form = {
      name: name.value,
      price: price.value,
      description: description.value,
    };

    axios
      .put(
        "https://ibs-school.herokuapp.com/api/v1/for-developer/product/" +
          edit.data.id,
        form
      )
      .then((res) => {
        console.log(res.data);
        getProducts();
        e.target.reset();
        setEdit({ edit: false, data: {} });
      });
  };

  const deleteProduct = (id) => {
    axios
      .delete(
        "https://ibs-school.herokuapp.com/api/v1/for-developer/product/" + id
      )
      .then()
      .catch()
      .finally(() => {
        getProducts();
      });
  };

  return (
    <Div>
      <Button
        onClick={() => {
          setOpen(!open);
        }}
      >
        <img src={Img2} alt="" />
      </Button>
      <Form open={open} onSubmit={edit.edit ? updateForm : submitForm}>
        <input
          defaultValue={edit.edit ? edit.data.name : ""}
          type="text"
          name="name"
          placeholder="name"
          required
        />
        <input
          defaultValue={edit.edit ? edit.data.price : ""}
          type="number"
          name="price"
          placeholder="price"
          required
        />
        <textarea
          defaultValue={edit.edit ? edit.data.description : ""}
          name="description"
          rows="5"
          placeholder="description"
          required
        />
        <Button3>{edit.edit ? "update" : "submit"}</Button3>
      </Form>
      <CardsWrapper>
        {products?.map(({ id, name, price, description }) => (
          <Card key={id}>
            <p>{name}</p>
            <p>{price}</p>
            <p>{description}</p>
            <Button2 onClick={() => deleteProduct(id)}>
              <img src={Img} alt="" />
            </Button2>
            <Button1
              className="green"
              onClick={() => {
                setEdit({ edit: true, data: { id, name, price, description } });
              }}
            >
              <img src={Img1} alt="" />
            </Button1>
          </Card>
        ))}
      </CardsWrapper>
    </Div>
  );
}

export default ProductPage;
