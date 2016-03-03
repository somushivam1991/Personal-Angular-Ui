/// <reference path="../../../../typings/lib.d.ts" />
/// <reference path="../../../../typings/app.d.ts" />

namespace app.popups {
    export class DemoPopupService extends shared.bases.BasePopupService {
        /* @ngInject */
        constructor(private $state: angular.ui.IStateService) {
            super();
        }

        public showFormsWindow(): void {
            this.showWindow(this.$state.href(home.route));
        }
    }

    appModule.service('demoPopupService', DemoPopupService);
}
