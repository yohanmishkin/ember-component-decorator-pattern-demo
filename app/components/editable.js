import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class EditableComponent extends Component {
  @tracked isEditing = false;

  @action
  edit() {
    console.log('starting to edit');
    this.isEditing = true;
  }
}
