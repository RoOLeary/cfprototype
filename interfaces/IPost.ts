interface IPost {
    id: number
    title: string
    subtitle: string
    description: string
    url: string
    coverImage: string
    tags: string[]
    slug: string
    html: string
}

export default IPost;