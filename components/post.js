import Link from 'next/link'

export default function Post(post) {
  console.log(post);
  return (
    <article>
      <h2>{post[1].title}</h2>
      {/* <div dangerouslySetInnerHTML={{__html: post[1].content[0].content }} /> */}
      <Link href={`/posts/${post[1].slug}`}>
        <a>Read more...</a>
      </Link>
    </article>
  )
}
