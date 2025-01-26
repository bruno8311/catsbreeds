import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { CatService } from 'src/app/services/cat.service';
import { CatDetail } from 'src/app/shared/interfaces/cat-detail.interface';

@Component({
  selector: 'app-cat-detail',
  templateUrl: './cat-detail.page.html',
  styleUrls: ['./cat-detail.page.scss'],
  standalone: false
})
export class CatDetailPage implements OnInit {

  public catDetail!: CatDetail;

  constructor(
    private activateRouter: ActivatedRoute,
    private router: Router,
    private catService: CatService
  ) { }

  ngOnInit() {
    this.activateRouter.params
      .pipe(
        switchMap(({id}) => this.catService.getCatInfoById(id))
      )
      .subscribe( catDetail => {
        if (!catDetail) {
          return this.router.navigateByUrl('home');
        }
        return this.catDetail = catDetail;
      });
  }

}
