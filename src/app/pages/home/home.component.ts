import { Component, OnInit } from '@angular/core';
import { MOCK_ARTICLES } from 'src/assets/mock-articles';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  mockArticles = MOCK_ARTICLES;

  constructor() {}

  ngOnInit(): void {}
}
