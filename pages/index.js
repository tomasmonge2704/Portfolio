import NextLink from 'next/link'
import {
  Container,
  Heading,
  Box,
  Button,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box display={{ md: 'flex' }} style={{ alignItems: 'center' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Tomas Monge
          </Heading>
          <p>Full Stack Developer & SSR QA </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/perfil.jpeg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
              objectFit="cover"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1} >
        <Heading as="h3" variant="section-title" >
          Work
        </Heading>
        <Paragraph>
          MERN stack developer, currently working as automation QA. Knowledge on
          automation tools like: Cypress, Selenium, Postman + Newman, NodeJS +
          Mocha, Cucumber. Attention to detail, organized, adaptable with big
          sense of teamwork.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
