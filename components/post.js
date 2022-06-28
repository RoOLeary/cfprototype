import Link from 'next/link'
import styles from '../styles/Post.module.css'

export default function Post(post) {
  const { title, slug } = post[1];
  
  return (
    <article className={styles.articleStyles}>
      <Link href={`/posts/${slug}`}><a><h2>{title}</h2></a></Link>
      {/* <div dangerouslySetInnerHTML={{__html: content[0].content }} /> */}
    </article>
  )
}
