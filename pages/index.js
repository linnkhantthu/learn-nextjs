import "isomorphic-fetch"
import { ArticleList } from '../components/ArticleList'
import { server } from '../config'

function Home({articles}) {
  return (
    <div>
      <h1>Hello</h1>
      <h1>Welcome to NextJS</h1>
      <ArticleList articles={articles} />
    </div>
  )
}

export async function getStaticProps(context){
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()
  return {
    props:{
      articles
    }
  }
}

// export async function getStaticProps(context){
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()
//   return {
//     props:{
//       articles
//     }
//   }
// }

export default Home