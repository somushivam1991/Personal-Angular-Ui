/// <reference path="../../../../typings/lib.d.ts" />
/// <reference path="../../../../typings/app.d.ts" />

namespace shared {
    export const sharedModule: angular.IModule = angular.module('shared', []);

    export function registerController(
        controllerConstructor: Function,
        route: IPageState,
        ...secondaryRoutes: IPageState[]): angular.IModule {
        return registerControllers(controllerConstructor, route, secondaryRoutes, shared.sharedModule, '/client/modules/shared/core/');
    }
}
