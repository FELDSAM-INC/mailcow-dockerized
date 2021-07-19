/* -*- Mode: javascript; indent-tabs-mode: nil; c-basic-offset: 2 -*- */

(function() {
  'use strict';

  angular.module('SOGo.Common')
    .config(configure)

  /**
   * @ngInject
   */
  configure.$inject = ['$mdThemingProvider'];
  function configure($mdThemingProvider) {

    /**
     * Define a new palette or choose any of the default palettes:
     *
     * https://material.io/guidelines/style/color.html#color-color-palette
     */
    /*
        $mdThemingProvider.definePalette('feldhost-dark', {
          '50': 'EFEBE9',
          '100': 'D7CCC8',
          '200': 'BCAAA4',
          '300': 'A1887F',
          '400': '8D6E63',
          '500': '795548',
          '600': '6D4C41',
          '700': '5D4037',
          '800': '4E342E',
          '900': '3E2723',
          '1000': '000000',
          'A100': 'ffffff',
          'A200': 'eeeeee',
          'A400': 'bdbdbd',
          'A700': '616161',
          'contrastDefaultColor': 'dark',
          'contrastLightColors': ['800', '900']
        });
    */

    $mdThemingProvider.definePalette('feldhost-dark', {
      '50': 'EFEBE9',
      '100': 'D7CCC8',
      '200': 'BCAAA4',
      '300': 'A1887F',
      '400': '203639',
      '500': '795548',
      '600': 'BF6A3F',
      '700': '5D4037',
      '800': '9DADA3',
      '900': 'F2F7F3',
      '1000': '000000',
      'A100': 'FFE57F',
      'A200': 'FFD740',
      'A400': 'FFC400',
      'A700': 'FFAB00',
      'contrastDefaultColor': 'light',
      'contrastLightColors': ['800', '900']
    });

    $mdThemingProvider.definePalette('feldhost', {
      '50': 'F2F7F3',
      '100': 'FFECB3',
      '200': 'FFE082',
      '300': 'FFD54F',
      '400': 'FEA611',
      '500': 'FFC107',
      '600': 'FEA611',
      '700': 'FFA000',
      '800': 'FF8F00',
      '900': '203639',
      '1000': '000000',
      'A100': 'FFE57F',
      'A200': 'FFD740',
      'A400': 'FFC400',
      'A700': 'FEA611',
      'contrastDefaultColor': 'light',
      'contrastLightColors': ['800', '50']
    });

    /**
     * Define the Alternative theme
     */
    $mdThemingProvider.theme('alt')
      .primaryPalette('feldhost-dark', {
        'default': '400',  // top toolbar
        'hue-1': '400',
        'hue-2': '600',    // sidebar toolbar
        'hue-3': 'A700'
      })
      .accentPalette('feldhost', {
        'default': '600',  // fab buttons
        'hue-1': '400',     // center list toolbar
        'hue-2': '900',
        'hue-3': 'A700'
      })
      .backgroundPalette('grey', {
        'default': '50',   // center list background
        'hue-1': '200',
        'hue-2': '300',
        'hue-3': '500'
      });

    /**
     * Overwrite the accent palette from the default theme.
     * This is necessary because some templates directly refer to the "md-default-theme" class.
     */
    $mdThemingProvider.theme('default')
      .accentPalette('feldhost', {
        'default': '600',
        'hue-1': '50',
        'hue-2': '900',    // selected center list item background, today's date in calendar views
        'hue-3': 'A700'
      });

    $mdThemingProvider.setDefaultTheme('alt');
    $mdThemingProvider.generateThemesOnDemand(false);
  }
})();
