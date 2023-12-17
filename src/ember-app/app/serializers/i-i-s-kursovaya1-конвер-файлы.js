import { Serializer as КонверФайлыSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya1-конвер-файлы';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(КонверФайлыSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
