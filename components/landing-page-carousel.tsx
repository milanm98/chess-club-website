import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import SliderImages from '../public/database/landing-page-images/sliderImages.json'
import settings from '../settings/sliderSettings'

const LandingPageCarousel = () => {
  return (
    <div className="m-0 md:mx-24">
      <Slider {...settings}>
        {SliderImages.map((image) => {
          return (
            <div
              key={`container-key-${image.key}`}
              className="min-h-[250px] lg:h-[700px] p-0 md:p-4"
            >
              <img
                className="w-full h-full"
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
