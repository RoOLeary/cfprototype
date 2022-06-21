import Link from 'next/link'

export default function Post(post) {
  console.log(post[1].content.rendered);
  return (
    <article>
      <h2>{post[1].title.rendered}</h2>
      <p>{post[1].content.rendered.replace(/<[^>]+>/g, '')}</p>
      <Link href={`/post/${post[1].slug}`}>
        <a>Read more...</a>
      </Link>
    </article>
  )
}
