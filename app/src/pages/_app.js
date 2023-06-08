import '../styles/index.css'
import '../styles/common.scss'
import Layout from '@/components/Layout/Layout'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
