import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Tomas Monge homepage" />
        <meta name="author" content="Tomas Monge" />
        <meta name="author" content="Portfolio" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Tomas Monge" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/card.png" />
        <meta property="og:site_name" content="Tomas Monge" />
        <meta name="og:title" content="Tomas Monge" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
        <title>Tomas Monge - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <div style={{height:"5rem"}}></div>
        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
