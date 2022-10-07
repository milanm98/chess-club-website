import { Typography } from '@mui/material'
import { Container } from '@mui/system'

export default function Footer() {
  return (
    <Container
      className="mt-16 text-center"
      maxWidth={false}
      style={{ background: '#2E3B55' }}
    >
      <Typography className="p-2 text-white text-sm lg:text-lg font-black">
        Šah Klub Gimnazijalac
      </Typography>
      <Typography className="p-2 text-white text-sm lg:text-lg font-black">
        Trg Bratstva Jedinstva 23, Bačka Palanka 21400
      </Typography>
      <Container className="w-32 h-32 mx-auto p-4 text-center flex justify-center items-center">
        <img
          className="w-16 md:w-24 h-16 md:h-24"
          src="logo.jpg"
          alt="logo"
        ></img>
      </Container>
    </Container>
  )
}
