import { Pipe, PipeTransform } from '@angular/core';
import {Task} from '../models/task';
import * as _ from 'lodash';

@Pipe({
  name: 'taskFilter',
  // : https://stackoverflow.com/questions/34456430/ngfor-doesnt-update-data-with-pipe-in-angular2
  pure: false
})
export class TaskFilterPipe implements PipeTransform {

  transform(tasks: Task[], status: boolean): Task[] {
    return _.filter(tasks, { 'status' : status });
  }

}
