import Link from 'next/link'
import styles from '../styles/Post.module.css'

const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 0 },
}


export default function Post( post ) {
  const imgSrc = post[1].media[0].media.attributes.url ? post[1].media[0].media.attributes.url : 'https://placedog.net/500/300';
  const { title, slug, tags } = post[1];
  return (
    <article className={styles.articleStyles}>
      <div className={styles.articleFlex}>
        <img src={imgSrc} width={250} height={300} />
        <div className={styles.innerFlex}>
          <a href={`/posts/${slug}`}><h2 className={styles.artMarg} dangerouslySetInnerHTML={{__html: title.replace(/<[^>]+>/g, '')}} /></a>
          <br />
          <p className={styles.artMarg}>{post[1].properties.published} - <Link href={{ pathname: `/authors/${post[1]['authors'][0].slug}`, query: { name: post[1]['authors'][0].name }}}><a>{post[1]['authors'][0].name}</a></Link><br/>
            <div>Tags:
            <ul>
              {tags ? tags.map((t, id) => {
                return <li className={styles.tags} key={id}><Link href={`/topic/${t.slug}`}><a>{t.name}</a></Link></li>; 
              }).slice(0, 1) : 'no tags' }
            </ul>
            </div>
          </p>
        </div>
      </div>
    </article>
  )
}
