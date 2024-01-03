import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BlogContent } from '../blog-page/blog-page.util';

@Injectable({
  providedIn: 'root',
})
export class BlogContentApiService {
  private apiUrl =
    'https://public-api.wordpress.com/wp/v2/sites/khanhcdt5.wordpress.com';
  constructor(private http: HttpClient) {}
  // Lấy danh sách bài viết
  getPosts(): Observable<BlogContent[]> {
    const url = `${this.apiUrl}/posts`;
    return this.http.get<BlogContent[]>(url);
  }

  // Lấy chi tiết một bài viết theo ID
  getPostById(postId: number): Observable<BlogContent> {
    const url = `${this.apiUrl}/posts/${postId}`;
    return this.http.get<BlogContent>(url);
  }
}
