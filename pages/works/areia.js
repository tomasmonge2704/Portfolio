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
        Areia <Badge>2021</Badge>
      </Title>
      <P>
        A a web page made for a soccer tournament called Areia, with React Router and a backend application to manage and save the products.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://areia.com.ar/">
          https://areia.com.ar/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Mongo DB, React Native</span>
        </ListItem>
        
      </List>

      <WorkImage src="/images/works/areia.png" alt="Inkdrop" />
      <WorkImage src="/images/works/areia-asados.png" alt="Inkdrop" />
      <WorkImage src="/images/works/areia-backend.png" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
