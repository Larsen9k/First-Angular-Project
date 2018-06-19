import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable()
 
export class DataService {

  private goals = new BehaviorSubject <any> (['The initial goal', 'Another life goal']);
  goal = this.goals.asObservable();

  constructor() { }

  changegoal(goal) {
    this.goals.next(goal);
  }
}
