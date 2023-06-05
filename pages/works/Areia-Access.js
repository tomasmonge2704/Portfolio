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
    <Layout title="Areia">
      <Container>
        <Title>
          Areia Access <Badge>2022</Badge>
        </Title>
        <P>
          A a web page made for a soccer tournament called Areia, with React Router and a backend application to manage and save the products.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://access.areia.com.ar/">
            https://access.areia.com.ar/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NodeJS, Mongo DB, NextJS</span>
          </ListItem>
          
        </List>
  
        <WorkImage src="/images/works/areia-access.png" alt="Inkdrop" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'