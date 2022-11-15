import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { DefaultLayout } from '../Layouts/DefaultLayout'

import { Intro } from '../Components/Intro'

export default function Home() {
  return (
    <DefaultLayout>
      <Intro />
    </DefaultLayout>
  )
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(
        locale,
        ['common', 'navbar', 'home'],
        null,
        ['en', 'pt-BR'],
      )),
    },
  }
}
