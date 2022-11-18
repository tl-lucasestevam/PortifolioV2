import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { DefaultLayout } from '../Layouts/DefaultLayout'

import { Intro } from '../Components/Intro'
import { About } from '../Components/About'
import { Skills } from '../Components/Skills'

export default function Home() {
  return (
    <DefaultLayout>
      <Intro />
      <About />
      <Skills />
    </DefaultLayout>
  )
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(
        locale,
        ['common', 'navbar', 'home', 'about', 'skills'],
        null,
        ['en', 'pt-BR'],
      )),
    },
  }
}
