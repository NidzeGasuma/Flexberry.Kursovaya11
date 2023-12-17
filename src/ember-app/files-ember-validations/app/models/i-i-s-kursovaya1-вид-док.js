import {
  defineNamespace,
  defineProjections,
  Model as ВидДокMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya1-вид-док';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ВидДокMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
