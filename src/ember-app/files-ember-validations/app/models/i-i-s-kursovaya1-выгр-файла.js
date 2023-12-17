import {
  defineNamespace,
  defineProjections,
  Model as ВыгрФайлаMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya1-выгр-файла';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ВыгрФайлаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
