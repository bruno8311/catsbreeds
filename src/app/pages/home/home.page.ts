import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CatService } from 'src/app/services/cat.service';
import { CatNameBreed } from 'src/app/shared/interfaces/cat-name-breed.interface';
import { CatBreedInfo } from 'src/app/shared/interfaces/cat-info.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit, OnDestroy  {

  public listCatInfo: CatBreedInfo[] = [];
  private subscriptions: Subscription[] = [];
  public listCatBreeds: CatNameBreed[] = [];

  constructor( private catService: CatService) { }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  ngOnInit(): void {
   this.getCatService();
  }

  onNewListCats(listCats: CatBreedInfo[]) {
    this.listCatInfo = listCats
  }

   getCatService() {
     const catSubscription = this.catService.getBreeds()
     .subscribe(cat => {
       this.listCatBreeds = cat.map(breed => ({
        breed: breed.name,
        id: breed.id
       }));
       this.catService.setCatBreeds(this.listCatBreeds);
     });
     this.subscriptions.push(catSubscription);
   }

}
