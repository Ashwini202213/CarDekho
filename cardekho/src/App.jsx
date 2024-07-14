import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { newCarData, usedCarData } from './data/carsData';
import CarCard from './components/CarList/CarCard';
import './App.css';
import CarCarousel from './components/carousel/CarCarousel';

const App = () => {
  return (
    <div className="App">
   

    <CarCarousel/>

      <header className="App-header">
        
      </header>
      <div className="car-section">
      <h3>The Most Searched Cars </h3>
        <div className="car-list">
          {newCarData.map(car => (
            <CarCard
              key={car.id}
              name={car.name}
              price={car.price}
              image={car.image}
              offers={car.offers}
            />
          ))}
        </div>
      </div>
      <div className="car-section">
        <h2>Recommended Used Cars For You</h2>
        <div className="car-list">
          {usedCarData.map(car => (
            <CarCard
              key={car.id}
              name={car.name}
              price={car.price}
              image={car.image}
              details={car.details}
              button={car.button}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;



// import './App.css'
// import { Container, Row, Col } from 'react-bootstrap';
// import CarCarousel from './components/carousel/CarCarousel';
// import SearchForm from './components/carousel/SearchForm';

// function App() {
  

//   return (
//     <Container fluid className="p-0">
//       <Row>
//         <Col md={4} className="p-0">
//           <SearchForm />
//         </Col>
//         <Col md={8} className="p-0">
//           <CarCarousel />
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default App
