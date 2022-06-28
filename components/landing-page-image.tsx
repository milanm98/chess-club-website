import BackgroundImage from '../assets/landing-page-image.jpg'

export default function LandingPageImage() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className="h-screen w-screen"
      alt="Background image"
      src={BackgroundImage.src}
    />
  )
}
