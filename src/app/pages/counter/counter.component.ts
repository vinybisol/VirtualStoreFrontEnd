import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { first, Observable } from 'rxjs';
import { getAllProducts } from 'src/app/actions/counter';
import { ArticleState } from 'src/app/reducers/counter.reducer';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  count$: Observable<ArticleState> = this.store.select((state) => state.count);
  constructor(
    private store: Store<{
      count: ArticleState;
    }>
  ) {}

  ngOnInit() {
    this.store
      .select('count')
      .pipe(first())
      .subscribe((state) => {
        if (state.products.length === 0) this.store.dispatch(getAllProducts());
      });
  }

  getAllProducts() {
    this.store.dispatch(getAllProducts());
    console.log(this.count$);
  }
}
