import Logo from '../public/logo.jpg'

export default function Footer() {
  return (
    <footer className="text-center nav-background-color flex flex-col justify-between items-center">
      <div>
        <p className="p-2 nav-text-color text-sm lg:text-lg">
          Šah Klub Gimnazijalac
        </p>
        <p className="nav-text-color text-sm lg:text-lg">
          gimnazijalacinfo@gmail.com
        </p>
        <p className="nav-text-color text-sm lg:text-lg p-2">
          Trg bratstva jedinstva 23, 21400 Backa Palanka, Srbija
        </p>
      </div>
      <div className="flex justify-center items-center">
        <img
          className="w-16 md:w-24 h-16 md:h-24 my-6 md:mb-12"
          src={Logo.src}
          alt="logo"
        ></img>
      </div>
      <p className="nav-text-color mb-2">Copyright @2022</p>
    </footer>
  )
}
