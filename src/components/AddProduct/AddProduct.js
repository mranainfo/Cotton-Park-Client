import axios from 'axios';
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import SideNav from '../SideNav/SideNav';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const [imageLink, setImageLink] = useState(null)

    // handle image upload
    const handleImageUpload = event => {
        const imageData = new FormData()
        imageData.set('key', '4295ac4d47b569312bea67b440cdbdbb')
        imageData.append('image', event.target.files[0])

        axios.post("https://api.imgbb.com/1/upload", imageData)
            .then(function (response) {
                setImageLink(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    // Product Submit
    const onSubmit = data => {
        if (imageLink !== null) {
            const productData = data;
            productData.image = imageLink;
            fetch('https://apricot-crumble-74697.herokuapp.com/addProduct', {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(productData)
            })
            .then(res => res.json())
            .then(data = alert('upload success'))
        }
        else {
            alert('Image is uploading , Please wait')
        }
    };

    return (
        <Container className="mt-4">
            <Row>
                <Col lg={3} md={6} sm={12}>
                    <SideNav />
                </Col>

                <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm">
                    <h2 className="text-center mb-4">Add Product</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-control" type="text" name="title" placeholder='Enter Product Name' ref={register} /> <br />
                        <input className="form-control" type="text" name="price" placeholder='Enter Price' ref={register} />  <br />
                        <input type="file" name="image" onChange={handleImageUpload} /> <br /> <br />
                        <input className="btn btn-dark btn-block" type="submit" />
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default AddProduct;