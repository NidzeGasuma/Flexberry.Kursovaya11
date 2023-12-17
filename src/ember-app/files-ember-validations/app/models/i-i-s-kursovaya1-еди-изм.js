import {
  defineNamespace,
  defineProjections,
  Model as ЕдиИзмMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya1-еди-изм';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЕдиИзмMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
