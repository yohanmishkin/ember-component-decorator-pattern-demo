import Mixin from '@ember/object/mixin';

export default Mixin.create({
  isEditing: false,

  actions: {
    edit() {
      console.log('starting to edit');
      this.set('isEditing', true);
    }
  }
});
