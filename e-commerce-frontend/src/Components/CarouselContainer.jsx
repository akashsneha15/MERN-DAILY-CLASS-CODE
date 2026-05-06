import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './CarouselImage';


function CarouselContainer() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <CarouselImage text="https://img.freepik.com/free-photo/black-friday-sales-sign-neon-light_23-2151833076.jpg?semt=ais_hybrid&w=740&q=80" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <CarouselImage text="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKUkqfs2fUTE8ohz_Cl1MYuQ-MyX2wOE2_Sw&s" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage text="https://static.vecteezy.com/system/resources/thumbnails/023/673/728/small/e-commerce-internet-shopping-online-purchase-business-internet-and-technology-concept-ov-virtual-screen-add-to-cart-on-line-shopping-robotic-hand-touching-digital-interface-illustration-vector.jpg" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselContainer;