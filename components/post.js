import Link from 'next/link'

export default function Post(post) {
  const { title, slug } = post[1];
  
  return (
    <article>
      <h2>{title}</h2>
      {/* <div dangerouslySetInnerHTML={{__html: content[0].content }} /> */}
      <Link href={`/posts/${slug}`}>
        <a>Read more...</a>
      </Link>
    </article>
  )
}
