import Link from 'next/link'

export default function Post({ data }) {
  console.log(data);
  return (
    <article>
      <h2>{data[1].title.rendered}</h2>
      <p>{data[1].content.rendered}</p>
      <Link href={`/post/${data[1].id}`}>
        <a>Read more...</a>
      </Link>
    </article>
  )
}
