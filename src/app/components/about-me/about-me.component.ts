import {Component, OnInit} from '@angular/core';
import {LayoutService} from "../../layout.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit{

  constructor(private layoutService: LayoutService) {
  }

  isBigScreen!: boolean;
  private startWorkingDate = new Date(2011, 1, 1);
  yearsOfExperience!: number;

  ngOnInit(): void {
    const todaysDate = new Date();
    this.yearsOfExperience = todaysDate.getFullYear() - this.startWorkingDate.getFullYear();
    this.layoutService.isMobilDevice.subscribe(res => {
      this.isBigScreen = !res ? true: false;
    });
  }

}
