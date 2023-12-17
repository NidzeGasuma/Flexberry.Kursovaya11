import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISKursovaya1ВидДокLForm from './forms/i-i-s-kursovaya1-вид-док-l';
import IISKursovaya1ВыгрФайлаLForm from './forms/i-i-s-kursovaya1-выгр-файла-l';
import IISKursovaya1ЕдиИзмLForm from './forms/i-i-s-kursovaya1-еди-изм-l';
import IISKursovaya1ЗагрФайлаLForm from './forms/i-i-s-kursovaya1-загр-файла-l';
import IISKursovaya1КонверФайлыLForm from './forms/i-i-s-kursovaya1-конвер-файлы-l';
import IISKursovaya1КонвертLForm from './forms/i-i-s-kursovaya1-конверт-l';
import IISKursovaya1РасширениеLForm from './forms/i-i-s-kursovaya1-расширение-l';
import IISKursovaya1ЭксФайлыLForm from './forms/i-i-s-kursovaya1-экс-файлы-l';
import IISKursovaya1ВидДокEForm from './forms/i-i-s-kursovaya1-вид-док-e';
import IISKursovaya1ВыгрФайлаEForm from './forms/i-i-s-kursovaya1-выгр-файла-e';
import IISKursovaya1ЕдиИзмEForm from './forms/i-i-s-kursovaya1-еди-изм-e';
import IISKursovaya1ЗагрФайлаEForm from './forms/i-i-s-kursovaya1-загр-файла-e';
import IISKursovaya1КонверФайлыEForm from './forms/i-i-s-kursovaya1-конвер-файлы-e';
import IISKursovaya1КонвертEForm from './forms/i-i-s-kursovaya1-конверт-e';
import IISKursovaya1РасширениеEForm from './forms/i-i-s-kursovaya1-расширение-e';
import IISKursovaya1ЭксФайлыEForm from './forms/i-i-s-kursovaya1-экс-файлы-e';
import IISKursovaya1ВидДокModel from './models/i-i-s-kursovaya1-вид-док';
import IISKursovaya1ВыгрФайлаModel from './models/i-i-s-kursovaya1-выгр-файла';
import IISKursovaya1ЕдиИзмModel from './models/i-i-s-kursovaya1-еди-изм';
import IISKursovaya1ЗагрФайлаModel from './models/i-i-s-kursovaya1-загр-файла';
import IISKursovaya1КонверФайлыModel from './models/i-i-s-kursovaya1-конвер-файлы';
import IISKursovaya1КонвертModel from './models/i-i-s-kursovaya1-конверт';
import IISKursovaya1РасширениеModel from './models/i-i-s-kursovaya1-расширение';
import IISKursovaya1ЭксФайлыModel from './models/i-i-s-kursovaya1-экс-файлы';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kursovaya1-вид-док': IISKursovaya1ВидДокModel,
    'i-i-s-kursovaya1-выгр-файла': IISKursovaya1ВыгрФайлаModel,
    'i-i-s-kursovaya1-еди-изм': IISKursovaya1ЕдиИзмModel,
    'i-i-s-kursovaya1-загр-файла': IISKursovaya1ЗагрФайлаModel,
    'i-i-s-kursovaya1-конвер-файлы': IISKursovaya1КонверФайлыModel,
    'i-i-s-kursovaya1-конверт': IISKursovaya1КонвертModel,
    'i-i-s-kursovaya1-расширение': IISKursovaya1РасширениеModel,
    'i-i-s-kursovaya1-экс-файлы': IISKursovaya1ЭксФайлыModel
  },

  'application-name': 'Kursovaya1',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Kursovaya1',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kursovaya1',
          title: 'Kursovaya1'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        kursovaya1: {
          caption: 'Kursovaya1',
          title: 'Kursovaya1',
          'i-i-s-kursovaya1-вид-док-l': {
            caption: 'Вид док',
            title: ''
          },
          'i-i-s-kursovaya1-загр-файла-l': {
            caption: 'Загр файла',
            title: ''
          },
          'i-i-s-kursovaya1-конверт-l': {
            caption: 'Конверт',
            title: ''
          },
          'i-i-s-kursovaya1-экс-файлы-l': {
            caption: 'Экс файлы',
            title: ''
          },
          'i-i-s-kursovaya1-выгр-файла-l': {
            caption: 'Выгр файла',
            title: ''
          },
          'i-i-s-kursovaya1-еди-изм-l': {
            caption: 'Еди изм',
            title: ''
          },
          'i-i-s-kursovaya1-конвер-файлы-l': {
            caption: 'Конвер файлы',
            title: ''
          },
          'i-i-s-kursovaya1-расширение-l': {
            caption: 'Расширение',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-kursovaya1-вид-док-l': IISKursovaya1ВидДокLForm,
    'i-i-s-kursovaya1-выгр-файла-l': IISKursovaya1ВыгрФайлаLForm,
    'i-i-s-kursovaya1-еди-изм-l': IISKursovaya1ЕдиИзмLForm,
    'i-i-s-kursovaya1-загр-файла-l': IISKursovaya1ЗагрФайлаLForm,
    'i-i-s-kursovaya1-конвер-файлы-l': IISKursovaya1КонверФайлыLForm,
    'i-i-s-kursovaya1-конверт-l': IISKursovaya1КонвертLForm,
    'i-i-s-kursovaya1-расширение-l': IISKursovaya1РасширениеLForm,
    'i-i-s-kursovaya1-экс-файлы-l': IISKursovaya1ЭксФайлыLForm,
    'i-i-s-kursovaya1-вид-док-e': IISKursovaya1ВидДокEForm,
    'i-i-s-kursovaya1-выгр-файла-e': IISKursovaya1ВыгрФайлаEForm,
    'i-i-s-kursovaya1-еди-изм-e': IISKursovaya1ЕдиИзмEForm,
    'i-i-s-kursovaya1-загр-файла-e': IISKursovaya1ЗагрФайлаEForm,
    'i-i-s-kursovaya1-конвер-файлы-e': IISKursovaya1КонверФайлыEForm,
    'i-i-s-kursovaya1-конверт-e': IISKursovaya1КонвертEForm,
    'i-i-s-kursovaya1-расширение-e': IISKursovaya1РасширениеEForm,
    'i-i-s-kursovaya1-экс-файлы-e': IISKursovaya1ЭксФайлыEForm
  },

});

export default translations;
