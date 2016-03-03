/// <reference path="../../../../typings/lib.d.ts" />
/// <reference path="../../../../typings/app.d.ts" />

namespace app.popups {
    import layout = common.layouts.main;

    export class PopupsController extends shared.bases.PageController<layout.LayoutController> {
        /* @ngInject */
        constructor($scope: IPopupsControllerScope,
                    private popupService: shared.popups.PopupService,
                    private demoPopupService: DemoPopupService) {
            super($scope);
        }

        public onConfirmClicked(): void {
            this.popupService.showConfirmation(`This is a confirmation modal. Please confirm whether you want to proceed or not.`, 'Confirm', 'Proceed', `Don't proceed`).then(() => {
                alert(1);
            });
        }

        public onInfoAlertClicked(): void {
            this.popupService.showInfo(`This is an information alert.`, 'Info Alert');
        }

        public onWarningAlertClicked(): void {
            this.popupService.showWarning(`This is awarning alert.`, 'Warning Alert');
        }

        public onErrorAlertClicked(): void {
            this.popupService.showError(`This is an error alert.`, 'Error Alert');
        }

        public onWindowPopupClicked(): void {
            this.demoPopupService.showFormsWindow();
        }
    }

    export interface IPopupsControllerScope extends shared.bases.IPageControllerScope<layout.LayoutController> {
    }

    export const route: IPageState = {
        name: 'popups',
        layout: layout.route,
        templateUrl: 'popups/popups.html',
        url: '/popups',
        title: 'Popups Demo'
    };

    registerController(PopupsController, route);
}
