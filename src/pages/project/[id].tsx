/* eslint-disable react/no-children-prop */
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { DefaultLayout } from '../../Layouts/DefaultLayout'
import { Info } from './components/Info'
import {
  DescriptionSide,
  ImageBackground,
  InfoSide,
  IntroSection,
  LeftSide,
  ProjectContent,
  RightSide,
} from './styles'
import parse from 'html-react-parser'

const text =
  '<h2 id="about-the-project">About the project</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit viverra sit semper lorem eu cursus vel hendrerit elementum morbi curabitur etiam nibh justo, lorem aliquet donec sed sit mi dignissim at ante massa mattis.</p><ol><li>Neque sodales ut etiam sit amet nisl purus non tellus orci ac auctor</li><li>Adipiscing elit ut aliquam purus sit amet viverra suspendisse potent i</li><li>Mauris commodo quis imperdiet massa tincidunt nunc pulvinar</li><li>Adipiscing elit ut aliquam purus sit amet viverra suspendisse potenti</li></ol><h2 id="what-was-the-goal-of-the-project-">What was the goal of the project?</h2><p>Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere praesent tristique magna sit amet purus gravida quis blandit turpis.Odio facilisis mauris sit amet massa vitae tortor.</p><h2 id="project-execution">Project execution</h2><p>At risus viverra adipiscing at in tellus integer feugiat nisl pretium fusce id velit ut tortor sagittis orci a scelerisque purus semper eget at lectus urna duis convallis. porta nibh venenatis cras sed felis eget neque laoreet suspendisse interdum consectetur libero id faucibus nisl donec pretium vulputate sapien nec sagittis aliquam nunc lobortis mattis aliquam faucibus purus in.</p><p>Neque sodales ut etiam sit amet nisl purus non tellus orci ac auctorAdipiscing elit ut aliquam purus sit amet viverra suspendisse potentiMauris commodo quis imperdiet massa tincidunt nunc pulvinarAdipiscing elit ut aliquam purus sit amet viverra suspendisse potenti</p><h2 id="project-results">Project results</h2><p>Nisi quis eleifend quam adipiscing vitae aliquet bi bendum enim facilisis gravida neque. Velit euismod in pellentesque massa placerat volutpat lacus laoreet non curabitur gravida odio aenean sed adipiscing diam donec adipiscing tristique risus. amet est placerat in egestas erat imperdiet sed euismod nisi.</p>'

export default function Project() {
  return (
    <DefaultLayout>
      <IntroSection className="container">
        <hr />
        <h1>Placement platorm for new Candidates</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit fames turpis
          pretium bibendum nisl est sagittis aliquam pretium nunc.
        </p>
      </IntroSection>

      <ImageBackground>oi</ImageBackground>

      <DescriptionSide className="container">
        <LeftSide>
          <InfoSide>
            <Info title="CLIENT">Codify</Info>
            <Info title="SERVICES">Web Development</Info>
            <Info title="TECHNOLOGIES">HTML/CSS</Info>
            <Info title="WEBSITE">Link do site</Info>
          </InfoSide>
        </LeftSide>
        <RightSide>
          <ProjectContent>{parse(text)}</ProjectContent>
        </RightSide>
      </DescriptionSide>
    </DefaultLayout>
  )
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  }
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(
        locale,
        ['common', 'navbar', 'projects'],
        null,
        ['en', 'pt-BR'],
      )),
    },
  }
}
