import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import SliderImages from '../../public/database/landing-page-images/sliderImages.json'
import settings from './sliderSettings'
import { Container } from '@mui/material'

const LandingPageCarousel = () => {
  return (
    <Container maxWidth="lg">
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
