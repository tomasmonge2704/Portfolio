import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="walknote">
    <Container>
      <Title>
        BTB <Badge>2022</Badge>
      </Title>
      <P>
        A a web page that receives PDF files with a NodeJS backend application and that can be modified in real time with Google Drive.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Web</Meta>
          <Link href="https://btbsoft.com.ar/blog.html">
          https://btbsoft.com.ar/blog
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS, NodeJS, Google Drive API</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/btb.png" alt="walknote" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
