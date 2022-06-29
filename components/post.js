import Link from 'next/link'
// import Image from 'next/image'
import styles from '../styles/Post.module.css'

// function CustomLoader({ src, width }) {
//   const relativeSrc = (src) => src.split("/").pop();
//   console.log(src);
//   return src;
// }


export default function Post(post) {
  const imgSrc = post[1].media[0].media.attributes.url ? post[1].media[0].media.attributes.url : 'https://placedog.net/500/300';
  const { title, slug } = post[1];
  
  return (
    <article className={styles.articleStyles}>
      <div className={styles.articleFlex}>
        <img src={imgSrc} width={300} height={200} />
        <Link href={`/posts/${slug}`}><a><h2 className={styles.artMarg}>{title}</h2></a></Link>
        <br></br>
      </div>
      {post[1].properties.published} - {post[1].authors[0].name}
    </article>
  )
}
