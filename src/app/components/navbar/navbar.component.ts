import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnChanges {
  @Input() currentRoute: string;

  constructor(private router: Router) {}

  ngOnChanges(): void {
    console.log('Current Route -> ', this.currentRoute);
  }

  public goTo(url: string): void {
    this.router.navigateByUrl(url);
  }
}
