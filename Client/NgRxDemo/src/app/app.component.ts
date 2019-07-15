import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State, ageSelector, nameSelector, increaseAge } from './app.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  public name$: Observable<string>;
  public age$: Observable<number>;

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.name$ = this.store.pipe(select(nameSelector));
    this.age$ = this.store.pipe(select(ageSelector));
  }

  increaseAge() {
    this.store.dispatch(increaseAge());
  }
}
