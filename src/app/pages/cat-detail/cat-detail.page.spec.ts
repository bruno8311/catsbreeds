import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatDetailPage } from './cat-detail.page';
import { provideHttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { of } from 'rxjs';
import { CatService } from 'src/app/services/cat.service';
import { mockCatBreedInfo } from 'src/app/shared/constants';

  const activatedRouteMock = {
    params: of({ id: '123' })
  };

  const routerMock = {
    navigateByUrl: jasmine.createSpy('navigateByUrl')
  };

  const catServiceMock = {
    getCatInfoById: jasmine.createSpy('getCatInfoById').and.returnValue(
      of(mockCatBreedInfo)
    )}

describe('CatDetailPage', () => {
  let component: CatDetailPage;
  let fixture: ComponentFixture<CatDetailPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatDetailPage],
      imports: [IonicModule.forRoot()],
      providers: [
        provideHttpClient(),
        { provide: ActivatedRoute, useValue: activatedRouteMock },
        { provide: Router, useValue: routerMock },
        { provide: CatService, useValue: catServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CatDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to home if catDetail is null', () => {
    catServiceMock.getCatInfoById.and.returnValue(of(null));
    component.ngOnInit();
    expect(routerMock.navigateByUrl).toHaveBeenCalledWith('home');
  });
});
