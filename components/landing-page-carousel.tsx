import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import SliderImages from '../public/database/landing-page-images/sliderImages.json'

const LandingPageCarousel = () => {
  return (
    <div>
      <Carousel useKeyboardArrows={true} autoPlay>
        {SliderImages.map((image) => (
          <div className="slide " key={image.key}>
            <img alt="image-slider" src={image.src} key={image.key} />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default LandingPageCarousel
