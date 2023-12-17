import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  путьФайла: DS.attr('string'),
  эксФайлы: DS.belongsTo('i-i-s-kursovaya1-экс-файлы', { inverse: null, async: false })
});

export let ValidationRules = {
  путьФайла: {
    descriptionKey: 'models.i-i-s-kursovaya1-загр-файла.validations.путьФайла.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  эксФайлы: {
    descriptionKey: 'models.i-i-s-kursovaya1-загр-файла.validations.эксФайлы.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗагрФайлаE', 'i-i-s-kursovaya1-загр-файла', {
    путьФайла: attr('Путь файла', { index: 0 }),
    эксФайлы: belongsTo('i-i-s-kursovaya1-экс-файлы', '', {
      имя: attr('', { index: 1 }),
      дата: attr('', { index: 2 }),
      репозиторий: attr('', { index: 3 })
    }, { index: -1, hidden: true })
  });

  modelClass.defineProjection('ЗагрФайлаL', 'i-i-s-kursovaya1-загр-файла', {
    путьФайла: attr('Путь файла', { index: 0 }),
    эксФайлы: belongsTo('i-i-s-kursovaya1-экс-файлы', '', {
      дата: attr('', { index: 1 }),
      имя: attr('', { index: 2 }),
      репозиторий: attr('', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
