import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  репозиторий: DS.attr('string'),
  выгрФайла: DS.belongsTo('i-i-s-kursovaya1-выгр-файла', { inverse: null, async: false })
});

export let ValidationRules = {
  репозиторий: {
    descriptionKey: 'models.i-i-s-kursovaya1-конвер-файлы.validations.репозиторий.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  выгрФайла: {
    descriptionKey: 'models.i-i-s-kursovaya1-конвер-файлы.validations.выгрФайла.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КонверФайлыE', 'i-i-s-kursovaya1-конвер-файлы', {
    репозиторий: attr('Репозиторий', { index: 0 }),
    выгрФайла: belongsTo('i-i-s-kursovaya1-выгр-файла', '', {
      имяФайла: attr('', { index: 1 })
    }, { index: -1, hidden: true })
  });

  modelClass.defineProjection('КонверФайлыL', 'i-i-s-kursovaya1-конвер-файлы', {
    репозиторий: attr('Репозиторий', { index: 0 }),
    выгрФайла: belongsTo('i-i-s-kursovaya1-выгр-файла', '', {
      имяФайла: attr('', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
