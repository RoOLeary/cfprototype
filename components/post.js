import Link from 'next/link'
// import Image from 'next/image'
import styles from '../styles/Post.module.css'

// function CustomLoader({ src, width }) {
//   const relativeSrc = (src) => src.split("/").pop();
//   console.log(src);
//   return src;
// }


const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 0 },
}

export default function Post(post) {

  

  const imgSrc = post[1].media[0].media.attributes.url ? post[1].media[0].media.attributes.url : 'https://placedog.net/500/300';
  const { title, slug, tags } = post[1];

  // console.log(tags);
  
  return (
    <article className={styles.articleStyles}>
      <div className={styles.articleFlex}>
        
        <img src={imgSrc} width={300} height={200} />
        
        <div className={styles.innerFlex}>
          <a href={`/posts/${slug}`}><h2 className={styles.artMarg}>{title.replace(/<[^>]+>/g, '')}</h2></a>
          <br />
          <p className={styles.artMarg}>{post[1].properties.published} - {post[1].authors[0].name} <br/>
            <div>Tags:
            <ul>
              {tags ? tags.map((t, id) => {
                return <li className={styles.tags} key={id}>{t.name}</li>; 
              }) : 'no tags' }
            </ul>
            </div>
          </p>
        </div>
        
      </div>
     
    </article>
  )
}
