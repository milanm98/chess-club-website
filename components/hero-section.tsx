import Carousel from './carousel'
import SliderImages from '../public/database/landing-page-images/sliderImages.json'

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div>
        <Carousel show={1} withIndicator>
          {SliderImages.map((image) => (
            <img alt="image-slider" src={image.src} key={image.key} />
          ))}
        </Carousel>
      </div>
      <h1 className="text-color italic text-3xl text-left lg:text-5xl mx-6 lg:mt-20 font-semibold uppercase landing-header">
        Šah klub svih bivših, sadašnjih i budućih gimnazijalaca kao i ostalih
        ljubitelja šaha
      </h1>
    </div>
  )
}

export default HeroSection
