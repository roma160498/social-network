import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @ViewChild('dropDown') dropDown;
  private activeDropDownClass: string = 'drop-down--active';

  constructor() { }

  ngOnInit(): void {
  }

  onDropDownClick(): void {
    if (this.dropDown.nativeElement.classList.contains(this.activeDropDownClass)) {
      this.dropDown.nativeElement.classList.remove(this.activeDropDownClass);
    } else {
      this.dropDown.nativeElement.classList.add(this.activeDropDownClass);
    }
  }

}
