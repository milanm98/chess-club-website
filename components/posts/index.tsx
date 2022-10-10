import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import posts from '../../public/database/landing-page-posts/posts.json'

export default function Posts() {
  return (
    <Container>
      {posts.map((value) => {
        return (
          <Container
            key={`posts-wrapper-${value.key}`}
            className="flex flex-col md:flex-row my-32"
          >
            <Container>
              <Typography key={`title-${value.key}`} variant="h4">
                {value.title}
              </Typography>
              <Typography
                className="my-4"
                key={`author-${value.key}`}
                variant="h5"
              >
                Autor : {value.author}
              </Typography>
              <Typography key={`description-${value.key}`} variant="h5">
                {value.description}
              </Typography>
              <Typography
                className="my-4"
                key={`date-${value.key}`}
                variant="h6"
              >
                {value.date}
              </Typography>
            </Container>
            <Container>
              <img src={value.src} alt={`posts-img-${value.key}`} />
            </Container>
          </Container>
        )
      })}
    </Container>
  )
}
