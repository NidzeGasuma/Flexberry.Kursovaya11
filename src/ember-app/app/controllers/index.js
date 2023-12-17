import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.kursovaya1.caption'),
          title: i18n.t('forms.application.sitemap.kursovaya1.title'),
          children: [{
            link: 'i-i-s-kursovaya1-вид-док-l',
            caption: i18n.t('forms.application.sitemap.kursovaya1.i-i-s-kursovaya1-вид-док-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya1.i-i-s-kursovaya1-вид-док-l.title'),
            children: null
          }, {
            link: 'i-i-s-kursovaya1-загр-файла-l',
            caption: i18n.t('forms.application.sitemap.kursovaya1.i-i-s-kursovaya1-загр-файла-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya1.i-i-s-kursovaya1-загр-файла-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-kursovaya1-конверт-l',
            caption: i18n.t('forms.application.sitemap.kursovaya1.i-i-s-kursovaya1-конверт-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya1.i-i-s-kursovaya1-конверт-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-kursovaya1-экс-файлы-l',
            caption: i18n.t('forms.application.sitemap.kursovaya1.i-i-s-kursovaya1-экс-файлы-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya1.i-i-s-kursovaya1-экс-файлы-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-kursovaya1-выгр-файла-l',
            caption: i18n.t('forms.application.sitemap.kursovaya1.i-i-s-kursovaya1-выгр-файла-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya1.i-i-s-kursovaya1-выгр-файла-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-kursovaya1-еди-изм-l',
            caption: i18n.t('forms.application.sitemap.kursovaya1.i-i-s-kursovaya1-еди-изм-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya1.i-i-s-kursovaya1-еди-изм-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-kursovaya1-конвер-файлы-l',
            caption: i18n.t('forms.application.sitemap.kursovaya1.i-i-s-kursovaya1-конвер-файлы-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya1.i-i-s-kursovaya1-конвер-файлы-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-kursovaya1-расширение-l',
            caption: i18n.t('forms.application.sitemap.kursovaya1.i-i-s-kursovaya1-расширение-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya1.i-i-s-kursovaya1-расширение-l.title'),
            icon: 'phone',
            children: null
          }]
        }
      ]
    };
  }),
})