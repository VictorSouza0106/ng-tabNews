import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public currentRoute: string;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((observer) => {
      if (observer instanceof NavigationEnd) this.currentRoute = observer.url;
    });
  }
}
