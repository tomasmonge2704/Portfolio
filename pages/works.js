import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbFilum from '../public/images/works/filum.png'
import thumbEstadistica from '../public/images/works/estadistica1.png'
import thumbAreia from '../public/images/works/areia.png'
import thumbBTB from '../public/images/works/btb.png'
import thumbDiscord from '../public/images/works/discord.png'
import thumbAreiaAccess from '../public/images/works/areia-accessQR.png'


const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
      <Section>
          <WorkGridItem id="Filum" title="Filum" thumbnail={thumbFilum}>
            A responsive React page and backend NodeJS application
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="areia" title="Areia" thumbnail={thumbAreia}>
            A responsive React page and backend NodeJS application
          </WorkGridItem>
        </Section>
      </SimpleGrid>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
      <Section>
          <WorkGridItem id="Statistics" title="Statistics" thumbnail={thumbEstadistica}>
          A page to solve complex statistics exercises
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="btb" title="BTB Soft" thumbnail={thumbBTB}>
            A NodeJS backend application that receives PDF documents from google
            drive
          </WorkGridItem>
        </Section>
      </SimpleGrid>
      <Section delay={0.2}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
      <Section>
          <WorkGridItem id="Areia-Access" title="Areia Access" thumbnail={thumbAreiaAccess}>
          A NodeJS app to generate invitations by QR
          </WorkGridItem>
        </Section>
      </SimpleGrid>
      <Section delay={0.4}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
      <Section>
          <WorkGridItem id="discord" title="Discord Bot" thumbnail={thumbDiscord}>
          A discord bot with NodeJS that has custom music and audio commands
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
