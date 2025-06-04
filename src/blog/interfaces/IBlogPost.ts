import { IComment } from './IComment';

export interface IBlogPost {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IBlogPostWithComments extends IBlogPost {
  comments: IComment[];
}

export interface IBlogPostWithCommentCount extends IBlogPost {
  commentCount: number;
}
