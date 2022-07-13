import articleStyles from '../styles/Article.module.css'
import Link from 'next/link'

export const ArticleItem = ({article}) => {
  return (
    <div className={articleStyles.card}>
        <Link href="/article/[id]" as={`/article/${article.id}`}>
            <a>
                <h3>{article.title} &rarr;</h3>
                <p>{article.body}</p>
            </a>
        </Link>
    </div>
  )
}
