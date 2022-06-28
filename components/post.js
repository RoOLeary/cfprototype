import Link from 'next/link'
import styles from '../styles/Post.module.css'

export default function Post(post) {
  const { title, slug } = post[1];
  
  return (
    <article className={styles.articleStyles}>
      <Link href={`/posts/${slug}`} scroll={false}><a><h2>{title}</h2></a></Link>
      <br></br>
      {post[1].properties.published} - {post[1].authors[0].name}
    </article>
  )
}
