import SliderImages from '../public/database/landing-page-images/sliderImages.json'
import Carousel from './carousel'

const LandingPageCarousel = () => {
  return (
    <div>
      <Carousel show={1} withIndicator>
        {SliderImages.map((image) => (
          <img alt="image-slider" src={image.src} key={image.key} />
        ))}
      </Carousel>
    </div>
  )
}

export default LandingPageCarousel
