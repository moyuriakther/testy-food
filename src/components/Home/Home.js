import React from 'react';
import faluda from '../../images/faluda.jpg';
import beefBiriyani from '../../images/beef-biriyani.jpg';
import burgur from '../../images/burgur.jpg';
import chikenBiriyani from '../../images/chiken-biriyani.jpg';
import friedChiken from '../../images/fried-chiken.jpg';
import friedRice from '../../images/fried-rice.png';
import lacchi from '../../images/lacchi.jpg';
import sandwitch from '../../images/sandwitch.jpg';
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
            description: 'Faluda',
            imgUrl: `${faluda}`,
            price: 'Faluda',
        },
        {
            description: 'CAR',
            imgUrl: `${beefBiriyani}`,
            price: 'Car',
        },
        {
            description: 'BUS',
            imgUrl: `${burgur}`,
            price: 'Burgur',
        },
        {
            description: ' TRAIN',
            imgUrl: `${chikenBiriyani}`,
            price: 'Train',
        },
        {
            description: ' TRAIN',
            imgUrl: `${friedChiken}`,
            price: 'Train',
        },
        {
            description: ' TRAIN',
            imgUrl: `${friedRice}`,
            price: 'Train',
        },
        {
            description: ' TRAIN',
            imgUrl: `${lacchi}`,
            price: 'Train',
        },
        {
            description: ' TRAIN',
            imgUrl: `${sandwitch}`,
            price: 'Train',
        }
    ]
    return (
        <div>
            <Row style={style}>
            {
                items.map(item => <Item key={item.description} item={item}></Item>)
            }
            </Row>
         </div>
    );
};

export default Home;