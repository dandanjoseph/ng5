import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'; 

//When you create a service file it can be shared across components and they can all utilize its properties
@Injectable()
export class DataService {

  private goals = new BehaviorSubject<any>(['The initial goal', 'Another silly life goal']);
  goal = this.goals.asObservable();


  constructor() { }

  changeGoal(goal){
    this.goals.next(goal);
  }

}
