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
    <Layout title="Discord">
      <Container>
        <Title>
          Discord Bot <Badge>2023</Badge>
        </Title>
        <P>
        A discord bot that has custom commands and plays music.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Discord</span>
          </ListItem>
          <ListItem>
            <Meta>Web</Meta>
            <Link href="https://github.com/tomasmonge2704/Discord-Bot">
            https://github.com/tomasmonge2704/Discord-Bot
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NodeJS</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/discord.png" alt="walknote" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'