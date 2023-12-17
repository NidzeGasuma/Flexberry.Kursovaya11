import {
  defineNamespace,
  defineProjections,
  Model as КонверФайлыMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya1-конвер-файлы';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КонверФайлыMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
