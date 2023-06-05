import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    AspectRatio
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  
  const Work = () => (
    <Layout title="Filum">
      <Container>
        <Title>
          Filum <Badge>2023</Badge>
        </Title>
        <P>
        A 3d ecommerce web platform made with NextJS and three.js for the frontend. For the backend I use NodeJS, Mongo DB and Google Auth for the Login.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://filum-front-jwqb.vercel.app/">
            https://filum-front-jwqb.vercel.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NodeJS, Mongo DB, NextJS, NextUI, Three.js</span>
          </ListItem>
          
        </List>
  
        <WorkImage src="/images/works/filum.png" alt="Inkdrop" />
        <WorkImage src="/images/works/filum-login.png" alt="Inkdrop" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'