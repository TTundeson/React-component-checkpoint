import React from 'react';
import { Card } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import product from './product';
import './App.css';

const firstName = 'YourFirstName'; // Replace with your first name

const App = () => {
  return (
    <div className='App'>
      <Card style={{ width: '18rem' }}>
        <Image image={product.image} alt='Product Image' />
        <Card.Body>
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
      <p>Hello, {firstName ? firstName : 'there'}!</p>
      {firstName && <img src={product.image} alt='Your Image' />}
    </div>
  );
};

export default App;
