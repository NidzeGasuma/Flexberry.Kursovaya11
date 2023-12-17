import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-kursovaya1-вид-док-l');
  this.route('i-i-s-kursovaya1-вид-док-e',
  { path: 'i-i-s-kursovaya1-вид-док-e/:id' });
  this.route('i-i-s-kursovaya1-вид-док-e.new',
  { path: 'i-i-s-kursovaya1-вид-док-e/new' });
  this.route('i-i-s-kursovaya1-выгр-файла-l');
  this.route('i-i-s-kursovaya1-выгр-файла-e',
  { path: 'i-i-s-kursovaya1-выгр-файла-e/:id' });
  this.route('i-i-s-kursovaya1-выгр-файла-e.new',
  { path: 'i-i-s-kursovaya1-выгр-файла-e/new' });
  this.route('i-i-s-kursovaya1-еди-изм-l');
  this.route('i-i-s-kursovaya1-еди-изм-e',
  { path: 'i-i-s-kursovaya1-еди-изм-e/:id' });
  this.route('i-i-s-kursovaya1-еди-изм-e.new',
  { path: 'i-i-s-kursovaya1-еди-изм-e/new' });
  this.route('i-i-s-kursovaya1-загр-файла-l');
  this.route('i-i-s-kursovaya1-загр-файла-e',
  { path: 'i-i-s-kursovaya1-загр-файла-e/:id' });
  this.route('i-i-s-kursovaya1-загр-файла-e.new',
  { path: 'i-i-s-kursovaya1-загр-файла-e/new' });
  this.route('i-i-s-kursovaya1-конвер-файлы-l');
  this.route('i-i-s-kursovaya1-конвер-файлы-e',
  { path: 'i-i-s-kursovaya1-конвер-файлы-e/:id' });
  this.route('i-i-s-kursovaya1-конвер-файлы-e.new',
  { path: 'i-i-s-kursovaya1-конвер-файлы-e/new' });
  this.route('i-i-s-kursovaya1-конверт-l');
  this.route('i-i-s-kursovaya1-конверт-e',
  { path: 'i-i-s-kursovaya1-конверт-e/:id' });
  this.route('i-i-s-kursovaya1-конверт-e.new',
  { path: 'i-i-s-kursovaya1-конверт-e/new' });
  this.route('i-i-s-kursovaya1-расширение-l');
  this.route('i-i-s-kursovaya1-расширение-e',
  { path: 'i-i-s-kursovaya1-расширение-e/:id' });
  this.route('i-i-s-kursovaya1-расширение-e.new',
  { path: 'i-i-s-kursovaya1-расширение-e/new' });
  this.route('i-i-s-kursovaya1-экс-файлы-l');
  this.route('i-i-s-kursovaya1-экс-файлы-e',
  { path: 'i-i-s-kursovaya1-экс-файлы-e/:id' });
  this.route('i-i-s-kursovaya1-экс-файлы-e.new',
  { path: 'i-i-s-kursovaya1-экс-файлы-e/new' });
});

export default Router;
