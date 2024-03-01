export interface IPost {
  image: string;
  id: string;
  title: string | null;
  description: string | null;
  thumbnail: string | null;
  content: string | null;
  createdAt?: string | null;
  category_id: ICategory;
  client_id: IClient;
  albums_id: IAlbums[];
}

export interface ICategory {
  id: string;
  name: string | null;
}
export interface IClient {
  id: string;
  name: string | null;
}
export interface IImage {
  id: string;
  title: string | null;
  description: string | null;
  file_path: string | null;
  created_at: string | null;
  album_id: string | null;
}
export interface IAlbums {
  id: string;
  title: string | null;
  description: string | null;
  created_at: string | null;
}
