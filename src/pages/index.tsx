import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { DefaultLayout } from '../Layouts/DefaultLayout'

export default function Home() {
  return <DefaultLayout>Intro</DefaultLayout>
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'navbar'], null, [
        'en',
        'pt-BR',
      ])),
    },
  }
}
