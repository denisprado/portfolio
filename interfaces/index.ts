export interface IPost {
    work_id: string;
    title: string;
    description: string;
    thumbnail: string;
    content: string;
    createdAt: string;
    category: ICategory;
    client: IClient;
}

export interface ICategory {
    id: string;
    name: string|null;
}
export interface IClient {
    id: string;
    name: string|null;
}
