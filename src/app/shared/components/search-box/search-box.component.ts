import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { CatService } from 'src/app/services/cat.service';
import { CatBreedInfo } from '../../interfaces/cat-info.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
  standalone: false,
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  @Output()
  public onNewListCats: EventEmitter<CatBreedInfo[]> = new EventEmitter();

  public listCatImage: CatBreedInfo[] = [];
  private subscriptions: Subscription[] = [];

  constructor( private catService: CatService ) {}

  ngOnInit() {}

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  getCatInfo(breedId: string) {
    const catInfoSubscription = this.catService.getCatsInfo(breedId).subscribe((catImages) => {
      this.listCatImage = catImages;
      if(this.listCatImage){
        this.onNewListCats.emit(this.listCatImage);
      }
    });
    this.subscriptions.push(catInfoSubscription);
  }

  onSearch(event: any) {
    const searchTerm = event.target.value.trim().toLowerCase();
    if (!searchTerm) return;
    const breed = this.searchBreed(searchTerm);
    if (breed) {
      this.getCatInfo(breed.id);
    } else {
      return;
    }
  }
  
  searchBreed(searchTerm: string) {
    return this.findBreedById(searchTerm) || this.findBreedByName(searchTerm);
  }
  
  findBreedById(searchTerm: string) {
    return this.catService.getCatBreeds().find(breed => breed.id.toLowerCase() === searchTerm);
  }
  
  findBreedByName(searchTerm: string) {
    return this.catService.getCatBreeds().find(breed => breed.breed.toLowerCase() === searchTerm);
  }
  
}
