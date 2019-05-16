import { Injectable } from '@angular/core';
import { MainService } from './main.service';
import { HttpClient } from '@angular/common/http';
import { IAuthResponse } from './models/models';
import { IItem } from './models/models';
import { IReview } from './models/models';
import { IUser } from './models/models';


@Injectable({
  providedIn: 'root'
})
export class ProviderService extends MainService {

  private baseUrl = 'http://127.0.0.1:8000/api/';

  constructor(http: HttpClient) {
    super(http);
  }
  getReview(itemId: any): Promise<IReview[]> {
    return this.get(this.baseUrl + `items/${itemId}/reviews/`, {});
  }

  createReview(body: string, itemId: any): Promise<IReview> {
    return this.post(this.baseUrl + `items/${itemId}/reviews/create/`, {
      body
    });
  }

  deleteReview(reviewId): Promise<any> {
    return this.delete(this.baseUrl + `reviews/delete/${reviewId}/`, {});
  }

  login(username: any, password: any): Promise<IAuthResponse> {
    return this.post( this.baseUrl + 'login/', {
      username,
      password
    });
  }

  register(username: any, password: any, email: any): Promise<IUser> {
    return this.post(  this.baseUrl + 'register/', {
      username,
      password,
      email
    });
  }

  logout(): Promise<any> {
    return this.post(this.baseUrl + 'logout/', {});
  }

  getItem(itemId): Promise<IItem> {
    return this.get(this.baseUrl  + `items/${itemId}/`, {});
    console.log(this.get(this.baseUrl  + `items/1/`, {}));
  }

  createItem(name, description, category, image_url): Promise<any>{
    return this.post(this.baseUrl + `items/create/`, {
      name: name,
      body: description,
      image_url: image_url,
      category: category
    })
  }
  updateItem(itemId, name, description, category, image_url): Promise<any> {
    return this.put(this.baseUrl + `articles/${itemId}/update/`, {
      name: name,
      description: description,
      image_url: image_url,
      category: category
    })
  }
  deleteItem(itemId): Promise<any> {
    return this.delete(this.baseUrl + `items/${itemId}/delete/`, {});
  }

  putReviewike(reviewId) {
    return this.post(this.baseUrl  + `reviews/${reviewId}/likes/`, {});
  }

  getReviewLikes(reviewId) {
    return this.get(this.baseUrl  + `reviews/${reviewId}/likes/`, {});
  }

  deleteReviewLike(reviewId) {
    return this.delete(this.baseUrl  + `reviews/${reviewId}/likes/`, {});
  }
}
