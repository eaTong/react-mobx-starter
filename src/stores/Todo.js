/**
 * Created by eatong on 16-12-6.
 */
import {observable, action, computed, toJS} from 'mobx';

class Todo {
  @observable items=[];

  constructor() {
  }

  @computed get list() {
    return this.items;
  }

  @action addTodo(item) {
    this.items.push({
      id: this.items.length + 1,
      title: item,
      complete: false
    })
  }

  @action completeTodo(index) {
    this.items[index].complete = !this.items[index].complete;
  }
}
export default Todo;
