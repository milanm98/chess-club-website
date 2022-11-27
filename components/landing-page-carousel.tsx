import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import SliderImages from '../public/database/landing-page-images/sliderImages.json'
import settings from '../settings/sliderSettings'

const LandingPageCarousel = () => {
  return (
    <div>
      <Slider {...settings}>
        {SliderImages.map((image) => {
          return (
            <div
              key={`container-key-${image.key}`}
              className="min-h-[250px] lg:h-[700px]"
            >
              <img
                className="w-full h-full rounded-lg"
                src={image.src}
                key={image.key}
                alt="slika"
              />
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default LandingPageCarousel
