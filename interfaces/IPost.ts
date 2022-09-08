interface IPostData {
    id: number
    title: string
    subtitle: string
    description: string
    url: string
    coverImage: string
    tags: string[]
    slug: string
    html: string
    published: string
    authors: string[]
    properties: string[]
    media: string
}

export interface IPost {
    post: IPostData
}
