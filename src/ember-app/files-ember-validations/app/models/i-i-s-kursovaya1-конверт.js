import {
  defineNamespace,
  defineProjections,
  Model as КонвертMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya1-конверт';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КонвертMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
