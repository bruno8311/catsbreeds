import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CardDescriptionComponent } from './card-description.component';
import { mockCatBreedInfo } from '../../constants';

describe('CardDescriptionComponent', () => {
  let component: CardDescriptionComponent;
  let fixture: ComponentFixture<CardDescriptionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CardDescriptionComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(CardDescriptionComponent);
    component = fixture.componentInstance;
    component.catBreed = mockCatBreedInfo;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});