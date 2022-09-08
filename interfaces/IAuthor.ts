interface IAuthorData {
    id: string, 
    slug: string,
    authorName: string,
    authorSlug: number,
    posts: string[]
}

export interface IAuthor {
    author: IAuthorData
}

