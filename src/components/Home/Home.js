import Carousel from 'react-bootstrap/Carousel';
import './Home.css';

function Home(){
    return(
        <div>
            <h1 className='textHome'>Bienvenido a Dolcha Backery</h1>
            <Carousel fade className='carouselHome'>
                <Carousel.Item>
                    <img
                        className="d-block  "
                        src="https://cdn.pixabay.com/photo/2020/06/21/14/54/bakery-5325238_960_720.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block  "
                        src="https://cdn.pixabay.com/photo/2017/07/28/18/36/quark-tart-2549453_960_720.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block "
                        src="https://cdn.pixabay.com/photo/2016/12/29/10/34/macaroons-1938270_960_720.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Home;