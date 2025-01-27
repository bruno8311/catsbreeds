import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { provideHttpClient } from '@angular/common/http';
import { SearchBoxComponent } from './search-box.component';
import { CatService } from 'src/app/services/cat.service';
import { of } from 'rxjs';

describe('SearchBoxComponent', () => {
  let component: SearchBoxComponent;
  let fixture: ComponentFixture<SearchBoxComponent>;
  let catServiceSpy: jasmine.SpyObj<CatService>;

  beforeEach(waitForAsync(() => {
    const spy = jasmine.createSpyObj('CatService', ['getCatsInfo', 'getCatBreeds']);

    TestBed.configureTestingModule({
      declarations: [ SearchBoxComponent ],
      imports: [IonicModule.forRoot()],
      providers: [provideHttpClient(), { provide: CatService, useValue: spy }]
    }).compileComponents();

    catServiceSpy = TestBed.inject(CatService) as jasmine.SpyObj<CatService>;
    fixture = TestBed.createComponent(SearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch cat info and emit list of cats when getCatInfo is called', () => {
    const breedId = '1';
    const mockCatImages = [{ breeds: [], id: breedId, url: 'url', width: 100, height: 100 }];
    catServiceSpy.getCatsInfo.and.returnValue(of(mockCatImages));
    component.getCatInfo(breedId);
    expect(component.listCatImage).toEqual(mockCatImages);
  });

  it('should call getCatInfo if breed is found in onSearch', () => {
    const searchTerm = 'test';
    const mockBreed = { id: '1', breed: 'test' };
    spyOn(component, 'searchBreed').and.returnValue(mockBreed);
    spyOn(component, 'getCatInfo');
    const event = { target: { value: searchTerm } };
    component.onSearch(event);
    expect(component.searchBreed).toHaveBeenCalledWith(searchTerm);
    expect(component.getCatInfo).toHaveBeenCalledWith(mockBreed.id);
  });

  it('should not call getCatInfo if no breed is found in onSearch', () => {
    const searchTerm = 'unknown';
    spyOn(component, 'searchBreed').and.returnValue(undefined);
    spyOn(component, 'getCatInfo');
    const event = { target: { value: searchTerm } };
    component.onSearch(event);
    expect(component.searchBreed).toHaveBeenCalledWith(searchTerm);
    expect(component.getCatInfo).not.toHaveBeenCalled();
  });

  it('should call onSearch when searchTerm is null', () => {
    const spy1 = spyOn(component, 'searchBreed')
    const event = { target: { value: null } };
    component.onSearch(event);
    expect(spy1).not.toHaveBeenCalled();
  });

  it('should return a breed by ID if found in searchBreed', () => {
    const mockBreed = { id: '1', breed: 'test' };
    catServiceSpy.getCatBreeds.and.returnValue([mockBreed]);
    const result = component.searchBreed('1');
    expect(result).toEqual(mockBreed);
  });

  it('should return a breed by name if found in searchBreed', () => {
    const mockBreed = { id: '1', breed: 'test' };
    catServiceSpy.getCatBreeds.and.returnValue([mockBreed]);
    const result = component.searchBreed('test');
    expect(result).toEqual(mockBreed);
  });

  it('should return undefined if no breed is found in searchBreed', () => {
    catServiceSpy.getCatBreeds.and.returnValue([]);
    const result = component.searchBreed('nonexistent');
    expect(result).toBeUndefined();
  });

});
