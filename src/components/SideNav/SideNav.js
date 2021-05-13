import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTasks } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const SideNav = () => {
    return (
        <div>
            <div className="border-right">
                <Link to="/manageProduct"><p className="text-dark"><FontAwesomeIcon icon={faTasks} /> Manage Product</p></Link>
                <Link to='/addProduct'><p className="text-dark"><FontAwesomeIcon className="" icon={faPlus} /> Add Product</p></Link>
                <Link to="/notFound"><p className="text-dark"><FontAwesomeIcon className="" icon={faEdit} /> Edit Product</p></Link>
            </div>
        </div>
    );
};

export default SideNav;