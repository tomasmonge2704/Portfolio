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
        Statistics <Badge>2023</Badge>
        </Title>
        <P>
        A page to solve complex statistics exercises, made purely with Javascript using NextJS and three.js to graph the functions.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://proyecto-estadistica-iota.vercel.app/">
            https://proyecto-estadistica-iota.vercel.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NextJS, NextUI</span>
          </ListItem>
          
        </List>
  
        <WorkImage src="/images/works/estadistica1.png" alt="Inkdrop" />
        <WorkImage src="/images/works/estadistica2.png" alt="Inkdrop" />
        <WorkImage src="/images/works/estadistica3.png" alt="Inkdrop" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'