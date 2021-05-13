import React from 'react';
import {Button, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import './Product.css';

const Product = (props) => {
  const { title, image, price, _id } = props.product;
  return (
    <>
      <Col lg={3} md={6} sm={12}>
        <div className="pd-card shadow-sm">
          <figure>
            <img className="" src={image} alt=""/>
          </figure>

          <section className="details">
            <div className="min-details">
              <h6>{title}</h6>
              <h6 className="">${price}</h6>
            </div>

            <div className="options">
              <div className="options-size">
                <h6>sizes</h6>
                <ul>
                  <li>xs</li>
                  <li>s</li>
                  <li>m</li>
                  <li>l</li>
                  <li>xl</li>
                </ul>
              </div>

              <div className="options-colors">
                <h6>colors</h6>
                <ul>
                  <li> </li>
                  <li> </li>
                  <li> </li>
                  <li> </li>
                  <li> </li>
                </ul>
              </div>
            </div>
            <Link to={"/product/" + _id} className=""><Button variant="dark btn-sm btn-block">
                <FontAwesomeIcon className="text-white" icon={faCartArrowDown} /> Buy Now</Button></Link>
          </section>
        </div>
      </Col>

    </>
  );
};

export default Product;