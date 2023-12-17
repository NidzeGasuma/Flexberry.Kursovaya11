import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya1-расширение', 'Unit | Model | i-i-s-kursovaya1-расширение', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-kursovaya1-вид-док',
    'model:i-i-s-kursovaya1-выгр-файла',
    'model:i-i-s-kursovaya1-еди-изм',
    'model:i-i-s-kursovaya1-загр-файла',
    'model:i-i-s-kursovaya1-конвер-файлы',
    'model:i-i-s-kursovaya1-конверт',
    'model:i-i-s-kursovaya1-расширение',
    'model:i-i-s-kursovaya1-экс-файлы',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
