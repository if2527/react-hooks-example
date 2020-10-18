export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IComment {
  userId: number;
  id: number;
  name: string;
  body: string;
  email: string;
}
