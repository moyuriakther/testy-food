import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import { Row } from 'react-bootstrap';

const Home = () => {

    const [items, setItems] = useState([]);

    useEffect(() =>{
         fetch('https://guarded-brushlands-10719.herokuapp.com/items')
         .then(res => res.json())
         .then(data =>setItems(data))
    }, [])


    const style = {
        display: 'flex',
        margin: '2px',
        justifyContent: 'space-between'
    }
    return (
        <div>
            <Row style={style}>
            {
                items.map(item => <Item key={item._id} item={item}></Item>)
            }
            </Row>
         </div>
    );
};

export default Home;