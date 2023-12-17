import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya1-конверт', 'Unit | Serializer | i-i-s-kursovaya1-конверт', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-kursovaya1-конверт',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
