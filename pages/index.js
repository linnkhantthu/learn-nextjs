import Head from 'next/head'
import "isomorphic-fetch"
import { ArticleList } from '../components/ArticleList'

function Home({articles}) {
  return (
    <div>
    <Head>
      <title>NextJS</title>
    </Head>
      <h1>Hello</h1>
      <h1>Welcome to NextJS</h1>
      <ArticleList articles={articles} />
    </div>
  )
}

export async function getStaticProps(context){
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()
  return {
    props:{
      articles
    }
  }
}

export default Home