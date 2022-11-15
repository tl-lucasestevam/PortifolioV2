import Link from 'next/link'
import { useRouter } from 'next/router'
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { DefaultLayout } from '../Layouts/DefaultLayout'

export default function Home() {
  const { locale, locales } = useRouter()

  const { t: translate } = useTranslation('common')

  return (
    <DefaultLayout>
      <div className="container">
        {locales?.map((l) => {
          return (
            <h3 key={l}>
              <Link href={`/`} locale={l}>
                {l}
              </Link>
            </h3>
          )
        })}
      </div>
    </DefaultLayout>
  )
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
