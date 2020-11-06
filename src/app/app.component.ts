import { Component } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamic-form';

  constructor(router: Router, private ngxService: NgxUiLoaderService) {
    router.events.subscribe((val) => {
      this.ngxService.start();
      if (val instanceof NavigationEnd) {
        this.ngxService.stop();
      }
    })
  }

}
