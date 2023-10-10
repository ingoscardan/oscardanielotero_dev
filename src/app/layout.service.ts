import { Injectable } from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState} from "@angular/cdk/layout";
import {map, Observable, takeUntil} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  isMobilDevice: Observable<boolean>;
  isLargeScreen: Observable<boolean>;

  constructor(private breakPointObserver: BreakpointObserver) {
    this.isMobilDevice = this.breakPointObserver.observe([Breakpoints.Handset, Breakpoints.Tablet]).pipe(
        map(resul => resul.matches));

    this.isLargeScreen = this.breakPointObserver.observe([Breakpoints.Large, Breakpoints.XLarge]).pipe(
        map(res => res.matches));
  }



}
