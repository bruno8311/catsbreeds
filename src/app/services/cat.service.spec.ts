import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { CatService } from './cat.service';
import { mockCatBreedInfo, mockCatDetail } from 'src/app/shared/constants';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

describe('CatService', () => {
  let service: CatService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatService, provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(CatService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get breeds from the API', () => {
    service.getBreeds().subscribe((breeds) => {
      expect(breeds).toEqual(mockCatBreedInfo.breeds);
    });
    const req = httpMock.expectOne('https://api.thecatapi.com/v1/breeds');
    expect(req.request.method).toBe('GET');
    req.flush(mockCatBreedInfo.breeds);
  });

  it('should get cats info for a specific breed from the API', () => {
    const breedId = 'abc123';
    const mockCatInfo = [mockCatBreedInfo];
    service.getCatsInfo(breedId).subscribe((cats) => {
      expect(cats).toEqual(mockCatInfo);
    });
    const req = httpMock.expectOne(
      `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&limit=10`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockCatInfo);
  });

  it('should get detailed cat info by id from the API', () => {
    const catId = 'xyz789';
    service.getCatInfoById(catId).subscribe((catDetail) => {
      expect(catDetail).toEqual(mockCatDetail);
    });
    const req = httpMock.expectOne(`https://api.thecatapi.com/v1/images/${catId}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockCatDetail);
  });

  it('should set and get cat breeds correctly', () => {
    const mockBreeds = [{ breed: 'Siamese', id: '1' }, { breed: 'Persian', id: '2' }];
    service.setCatBreeds(mockBreeds);
    const breeds = service.getCatBreeds();
    expect(breeds).toEqual(mockBreeds);
  });
});
