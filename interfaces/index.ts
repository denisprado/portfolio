export interface IPost {
    work_id: string;
    title: string | null;
    description: string | null;
    thumbnail: string | null;
    content: string | null;
    createdAt?: string | null;
    category: ICategory;
    client: IClient;
}

export interface ICategory {
    id: string;
    name: string | null;
}
export interface IClient {
    id: string;
    name: string | null;
}
