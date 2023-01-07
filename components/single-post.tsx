import Posts from '../public/database/landing-page-posts/posts.json'
import { useRouter } from 'next/router'
import Custom404 from './404'

export default function SinglePost() {
  const router = useRouter()
  let id = -1
  let postsIndex = -1
  if (router.query.id !== undefined) {
    id = +router.query.id
    postsIndex = id - 1
  }

  return Posts[postsIndex] ? (
    <div className="w-full h-auto lg:p-12 text-center">
      <h1 className="mb-6 text-lg uppercase text-color">
        {Posts[postsIndex].title}
      </h1>
      <div className="flex justify-center my-6">
        <h2 className="text-center w-2/3 font-semibold text-2xl text-color">
          {Posts[postsIndex].shortDescription}
        </h2>
      </div>

      <div className="flex flex-row gap-2 my-3 lg:gap-4 lg:gap-12 justify-center items-center">
        <h2 className="text-sm text-color">Datum : {Posts[postsIndex].date}</h2>
        <h2 className="text-color">|</h2>
        <h3 className="text-sm text-color">
          Autor posta : {Posts[postsIndex].author}
        </h3>
      </div>
      <div className="flex justify-center">
        <img
          className="h-[300px] lg:h-[500px] lg:w-[800px] rounded-3xl	"
          alt="post image"
          src={Posts[postsIndex].src}
        />
      </div>

      <h4 className="my-12 text-color lg:my-0 lg:mx-36 text-lg p-2 lg:p-12 first-letter:text-4xl first-letter:font-bold">
        {Posts[postsIndex].description}
      </h4>
    </div>
  ) : (
    <Custom404 />
  )
}
