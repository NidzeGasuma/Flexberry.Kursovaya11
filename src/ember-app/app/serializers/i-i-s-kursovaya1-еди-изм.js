import { Serializer as ЕдиИзмSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya1-еди-изм';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЕдиИзмSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
