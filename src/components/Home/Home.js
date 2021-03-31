import React from 'react';
import faluda from '../../images/faluda.jpg';
import beefBiriyani from '../../images/beef-biriyani.jpg';
import burgur from '../../images/burgur.jpg';
import chikenBiriyani from '../../images/chiken-biriyani.jpg';
import friedChiken from '../../images/fried-chiken.jpg';
import friedRice from '../../images/fried-rice.png';
import lacchi from '../../images/lacchi.jpg';
import sandwitch from '../../images/sandwitch.jpg';
import khichuri from '../../images/hospos.jpg';
import Item from '../Item/Item';
import { Row } from 'react-bootstrap';

const Home = () => {

    const style = {
        display: 'flex',
        margin: '2px',
        justifyContent: 'space-between'
       
    }
    const items = [
        {
            productName: 'Faluda',
            imgUrl: `${faluda}`,
            price: 'Faluda',
        },
        {
            productName: 'CAR',
            imgUrl: `${beefBiriyani}`,
            price: 'Car',
        },
        {
            productName: 'BUS',
            imgUrl: `${burgur}`,
            price: 'Burgur',
        },
        {
            productName: ' TRAIN',
            imgUrl: `${chikenBiriyani}`,
            price: 'Train',
        },
        {
            productName: ' TRAIN',
            imgUrl: `${friedChiken}`,
            price: 'Train',
        },
        {
            productName: ' TRAIN',
            imgUrl: `${friedRice}`,
            price: 'Train',
        },
        {
            productName: ' TRAIN',
            imgUrl: `${lacchi}`,
            price: 'Train',
        },
        {
            productName: ' TRAIN',
            imgUrl: `${sandwitch}`,
            price: 'Train',
        },
        {
            productName: ' TRAIN',
            imgUrl: `${khichuri}`,
            price: 'Train',
        }
    ]
    return (
        <div>
            <Row style={style}>
            {
                items.map(item => <Item key={item.productName} item={item}></Item>)
            }
            </Row>
         </div>
    );
};

export default Home;