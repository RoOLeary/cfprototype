import Link from 'next/link'

export default function Post(post) {
  console.log(post[1].content.rendered);
  return (
    <article>
      <h2>{post[1].title.rendered}</h2>
      <div dangerouslySetInnerHTML={{__html: post[1].content.rendered }} />
      <Link href={`/posts/${post[1].slug}`}>
        <a>Read more...</a>
      </Link>
    </article>
  )
}
