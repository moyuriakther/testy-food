import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

const Admin = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);


    const onSubmit = data => {
        console.log(data);
        const eventData = {
            name : data.name,
            price:data.price,
            imageURL : imageURL
            
        }
        const url = `https://guarded-brushlands-10719.herokuapp.com/addProduct`
        console.log(eventData);

        fetch(url, {
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(eventData)
        })
        .then(res => console.log('server side response'))
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '925ca699f78042ebc2b9507ddba4fa60');
        imageData.append('image', event.target.files[0]);

        
        axios.post('https://api.imgbb.com/1/upload',
        imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <div>
            <h4>Add Product</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Product Name</label> <br/>
                <input name="name" defaultValue="name" id="name" ref={register} /> <br/>
                <label htmlFor="price">Product Price</label> <br/>
                <input name="price" type="number" id="price" defaultValue="0" ref={register} /> <br/>
                <label htmlFor="photo">Add Product Photo</label> <br/>
                <input name="image" id ="photo" type="file" onChange={handleImageUpload} /> <br/> <br/>
                <input type="submit" value="Save"/>
            </form>
        </div>
    );
};

export default Admin;