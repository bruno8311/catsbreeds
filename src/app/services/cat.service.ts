import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CatBreedInfo } from '../shared/interfaces/cat-info.interface';
import { CatDetail } from '../shared/interfaces/cat-detail.interface';
import { CatBreed } from '../shared/interfaces/cat-breed.interface';
import { CatNameBreed } from '../shared/interfaces/cat-name-breed.interface';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  private apiKey = 'live_99Qe4Ppj34NdplyLW67xCV7Ds0oSLKGgcWWYnSzMJY9C0QOu0HUR4azYxWkyW2nr';
  private breedsUrl = 'https://api.thecatapi.com/v1/breeds';
  private searchUrl = 'https://api.thecatapi.com/v1/images';

  private catBreedsSubject = new BehaviorSubject<CatNameBreed[]>([]);
  public catBreeds$ = this.catBreedsSubject.asObservable();

  constructor(private http: HttpClient) {}

   getBreeds(): Observable<CatBreed[]> {
     const headers = new HttpHeaders().set('x-api-key', this.apiKey);
     return this.http.get<CatBreed[]>(this.breedsUrl, { headers });
   }

  getCatsInfo(breedId: string, limit: number = 10): Observable<CatBreedInfo[]> {
    const headers = new HttpHeaders().set('x-api-key', this.apiKey);
    const params = new HttpParams()
      .set('breed_ids', breedId)
      .set('limit', limit);
    return this.http.get<CatBreedInfo[]>(`${this.searchUrl}/search`, { headers, params });
  }

  getCatInfoById(id: string): Observable<CatDetail> {
    return this.http.get<CatDetail>(`${this.searchUrl}/${id}`);
  }

 setCatBreeds(breeds: CatNameBreed[]): void {
    this.catBreedsSubject.next(breeds);
  }

  getCatBreeds(): CatNameBreed[] {
    return this.catBreedsSubject.getValue();
  }
}
