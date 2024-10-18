import Head from 'next/head'
import Layout from '../src/components/layout';
function About(){
  return (
    <Layout>
      <Head>
        <title>About-Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> 
      <h4>About Page </h4>
    </Layout>
  )
}

export default About;