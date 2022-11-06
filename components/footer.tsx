export default function Footer() {
  return (
    <div className="text-center bg-[#2E3B55]">
      <p className="p-8 text-white text-sm lg:text-lg font-black">
        Šah Klub Gimnazijalac
      </p>
      <p className="text-white text-sm lg:text-lg font-black">
        Trg Bratstva Jedinstva 23, Bačka Palanka 21400
      </p>
      <div className="flex justify-center items-center">
        <img
          className="w-16 md:w-24 h-16 md:h-24 my-12"
          src="logo.jpg"
          alt="logo"
        ></img>
      </div>
    </div>
  )
}
