/// <reference path="../../../../typings/lib.d.ts" />
/// <reference path="../../../../typings/app.d.ts" />

namespace common.shell {
    export class ShellController extends shared.bases.BaseShellController {
        /* @ngInject */
        constructor($injector: angular.auto.IInjectorService) {
            super($injector);
        }
    }

    commonModule.controller('shellController', ShellController);
}
