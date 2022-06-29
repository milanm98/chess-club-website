import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import SliderImages from './sliderImages.json'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  adaptiveHeight: true,
  className: 'w-full',
  arrows: false,
}

const LandingPageCarousel = () => {
  return (
    <Slider {...settings}>
      {SliderImages.map((image) => {
        return (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className="h-[400px] lg:h-[700px]"
            src={image.src}
            key={image.key}
            alt="nesto"
          />
        )
      })}
    </Slider>
  )
}

export default LandingPageCarousel
