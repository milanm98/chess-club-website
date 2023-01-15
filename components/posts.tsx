import Link from 'next/link'
import posts from '../public/database/landing-page-posts/posts.json'

export default function Posts() {
  return (
    <div className="flex flex-col md:flex-row my-16 gap-4 items-center justify-center md:flex-wrap">
      {posts.map((value) => {
        return (
          <div
            className="max-w-sm rounded overflow-hidden shadow-2xl lg:h-[600px] relative"
            key={`posts-wrapper-${value.key}`}
          >
            <img
              className="w-full min-h-[300px]"
              src={value.src}
              alt="Sunset in the mountains"
              loading="lazy"
            />
            <div className="px-6 py-4 min-h-[300px]">
              <div className="font-bold text-xl mb-2 text-color">
                {value.title}
              </div>
              <p className="text-gray-700 text-base text-color">
                {value.shortDescription}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2 absolute bottom-5 text-color">
              <Link href={`/post/${value.key}`}>Procitaj vise -&gt;</Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}
