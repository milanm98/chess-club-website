export default function Footer() {
  return (
    <footer className="text-center bg-[#2E3B55] flex flex-col md:flex-row justify-between items-center">
      <div className="ml-0 md:ml-16 lg:ml-32 xl:ml-64 2xl:ml-96">
        <p className="p-2 text-white text-sm lg:text-lg">
          Šah Klub Gimnazijalac
        </p>
        <p className="text-white text-sm lg:text-lg">
          gimnazijalacinfo@gmail.com
        </p>
        <p className="text-white text-sm lg:text-lg p-2">
          Trg bratstva jedinstva 23, 21400 Backa Palanka, Srbija
        </p>
      </div>
      <div className="mr-0 md:mr-16 lg:mr-32 xl:mr-64 2xl:mr-96 flex justify-center items-center">
        <img
          className="w-16 md:w-24 h-16 md:h-24 my-6 md:my-16"
          src="logo.jpg"
          alt="logo"
        ></img>
      </div>
    </footer>
  )
}
