import { useRouter } from 'next/router'

const Error404 = () => {
  const router = useRouter()
  return (
    <div className="m-auto flex flex-col">
      <img
        className="m-auto pt-24 pb-12 max-w-[230px]"
        width={230}
        src="/chess-board.gif"
        alt="gif"
      />
      <h1 className="text-center">Tražena stranica nije pronađena</h1>
      <div className=" m-auto py-12">
        <button
          onClick={() => router.push('/')}
          className="bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded max-w-xs m-auto mb-36"
        >
          Nazad na početnu stranicu
        </button>
      </div>
    </div>
  )
}

export default Error404
