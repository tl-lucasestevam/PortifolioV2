import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { DefaultLayout } from '../Layouts/DefaultLayout'

import { Intro } from '../Components/Intro'
import { About } from '../Components/About'
import { Skills } from '../Components/Skills'
import { Projects } from '../Components/Projects'
import Head from 'next/head'

export default function Home() {
  return (
    <DefaultLayout>
      <Head>
        <title>David Augusto</title>
      </Head>
      <Intro />
      <About />
      <Skills />
      <Projects />
    </DefaultLayout>
  )
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(
        locale,
        ['common', 'navbar', 'home', 'about', 'skills', 'footer', 'projects'],
        null,
        ['en', 'pt-BR'],
      )),
    },
  }
}
