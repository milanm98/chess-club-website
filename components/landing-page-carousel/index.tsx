import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import SliderImages from './sliderImages.json'
import { Container } from '@mui/material'

const settings = {
  dots: true,
  infinite: true,
  speed: 200,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  adaptiveHeight: true,
  className: 'w-full',
  arrows: false,
}

const LandingPageCarousel = () => {
  return (
    <Container disableGutters maxWidth="lg">
      <Slider {...settings}>
        {SliderImages.map((image) => {
          return (
            <img
              className="h-[400px] lg:h-[700px]"
              src={image.src}
              key={image.key}
              alt="nesto"
            />
          )
        })}
      </Slider>
    </Container>
  )
}

export default LandingPageCarousel
