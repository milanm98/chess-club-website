import posts from '../public/database/landing-page-posts/posts.json'

export default function Posts() {
  return (
    <div>
      {posts.map((value) => {
        return (
          <div
            key={`posts-wrapper-${value.key}`}
            className="flex flex-col md:flex-row my-32 gap-4"
          >
            <div className="mx-12 md:mx-0">
              <p key={`title-${value.key}`}>{value.title}</p>
              <p className="my-4" key={`author-${value.key}`}>
                Autor : {value.author}
              </p>
              <p key={`description-${value.key}`}>{value.description}</p>
              <p className="my-4" key={`date-${value.key}`}>
                {value.date}
              </p>
            </div>
            <div>
              <img src={value.src} alt={`posts-img-${value.key}`} />
            </div>
          </div>
        )
      })}
    </div>
  )
}
