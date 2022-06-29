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
  const { title, slug, tags } = post[1];

  console.log(tags);
  
  return (
    <article className={styles.articleStyles}>
      <div className={styles.articleFlex}>
        
        <img src={imgSrc} width={300} height={200} />
        
        <div className={styles.innerFlex}>
          <Link href={`/posts/${slug}`}><a><h2 className={styles.artMarg}>{title.replace(/<[^>]+>/g, '')}</h2></a></Link>
          <br />
          <p className={styles.artMarg}>{post[1].properties.published} - {post[1].authors[0].name} <br/>
            <div>Tags:
            <ul>
              {tags ? tags.map((t) => {
                return <li className={styles.tags}>{t.name}</li>; 
              }) : 'no tags' }
            </ul>
            </div>
          </p>
        </div>
        
      </div>
     
    </article>
  )
}
