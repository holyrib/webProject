export interface IUser {
  id: number,
  username: string,
  password: string,
  email: string,
}
export interface IAuthResponse {
  token: string;
}

export interface IItem {
  id: number,
  name: string,
  category: string,
  image_url: string,
  description: number,
  owner: string,
}

export interface IReview {
  id: number;
  body: string;
  date_published: any;
  created_by: IUser;
  item: IItem;
}
export interface IReviewLike {
  id: number;
  owner: IUser;
  review: IReview;
}
