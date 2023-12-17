import { Serializer as ЭксФайлыSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya1-экс-файлы';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЭксФайлыSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
