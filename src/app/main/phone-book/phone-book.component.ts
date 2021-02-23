import { Component, Injector } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';
import { appModuleAnimation } from '@shared/animations/routerTransition';

@Component({
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.css'],
  animations: [appModuleAnimation()]
})
export class PhoneBookComponent extends AppComponentBase {

  constructor(injector: Injector) {
      super(injector);
   }

}
