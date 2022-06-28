import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Post.module.css'

export default function Post(post) {
  // console.log(post[1].media[0].media.attributes.url);
  const { title, slug } = post[1];
  
  return (
    <article className={styles.articleStyles}>
      <div className={styles.articleFlex}>
      <Image src={post[1].media[0].media.attributes.url} width={'300'} height={'200'} />
      <Link href={`/posts/${slug}`} scroll={false}><a><h2 className={styles.artMarg}>{title}</h2></a></Link>
      <br></br>
      </div>
      {post[1].properties.published} - {post[1].authors[0].name}
    </article>
  )
}
