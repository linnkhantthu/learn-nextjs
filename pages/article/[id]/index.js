import 'isomorphic-fetch'
import Head from 'next/head'
import { ArticleItem } from '../../../components/ArticleItem'

export default function article({article}) {
    return (
        <div>
        <Head>
          <title>{article.title}</title>
        </Head>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
        </div>
    )
}

export const getServerSideProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const article = await res.json()

    return {
        props:{
            article
        }
    }
}