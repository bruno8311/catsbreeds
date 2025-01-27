import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { of } from 'rxjs';
import { HomePage } from './home.page';
import { CatService } from 'src/app/services/cat.service';
import { mockCatBreedInfo } from 'src/app/shared/constants';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let catServiceMock: jasmine.SpyObj<CatService>;

  beforeEach(async () => {
    catServiceMock = jasmine.createSpyObj('CatService', ['getBreeds', 'setCatBreeds']);
    catServiceMock.getBreeds.and.returnValue(of(mockCatBreedInfo.breeds));

    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot()],
      providers: [{ provide: CatService, useValue: catServiceMock }]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getBreeds', () => {
    component.getCatService();
    expect(catServiceMock.getBreeds).toHaveBeenCalled();
  });
  
  it('should call onNewListCats', ()=> {
    const mockListCats = [mockCatBreedInfo];
    component.onNewListCats(mockListCats);
    expect(component.listCatInfo).toBeDefined();
  });

  it('should update listCatBreeds correctly inside subscribe', () => {
    catServiceMock.getBreeds.and.returnValue(of(mockCatBreedInfo.breeds));
    component.getCatService();
    expect(component.listCatBreeds).toEqual([{ breed: 'string', id: 'string' }]);
  });

  it('should call setCatBreeds with correct value inside subscribe', () => {
    catServiceMock.getBreeds.and.returnValue(of(mockCatBreedInfo.breeds));
    component.getCatService();
    expect(catServiceMock.setCatBreeds).toHaveBeenCalledWith([{ breed: 'string', id: 'string' }]);
  });

  it('should unsubscribe from all subscriptions on ngOnDestroy', () => {
    const mockSubscription = jasmine.createSpyObj('Subscription', ['unsubscribe']);
    component.subscriptions = [mockSubscription];
    component.ngOnDestroy();
    expect(mockSubscription.unsubscribe).toHaveBeenCalled();
  });
});
