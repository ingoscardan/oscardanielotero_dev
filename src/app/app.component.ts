import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState} from "@angular/cdk/layout";
import {MatSidenav} from "@angular/material/sidenav";
import {map, Observable} from "rxjs";
import {LayoutService} from "./layout.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'OscarDanielOtero-dev';
  @ViewChild('sideMenu') sideMenu!: MatSidenav;
  isHandset!: Observable<boolean>;
  isLargeScreen!: Observable<boolean>;

  constructor(private breakPointObserver: BreakpointObserver, private layoutService: LayoutService) {
  }

  ngOnInit(): void {
    this.isHandset = this.layoutService.isMobilDevice;
    this.isLargeScreen = this.layoutService.isLargeScreen;
  }

  ngAfterViewInit(): void {
    this.isHandset.subscribe(res => {
      if(!res && this.sideMenu.opened) {
        this.sideMenu.close().then();
      }
    });
  }
}
