import {
  defineNamespace,
  defineProjections,
  Model as ЭксФайлыMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya1-экс-файлы';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЭксФайлыMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
