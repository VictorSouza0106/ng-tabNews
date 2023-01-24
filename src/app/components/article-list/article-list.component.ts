import { Component, Input, OnInit } from '@angular/core';
import { IArticle } from 'src/app/interfaces/article';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent implements OnInit {
  @Input() articles: IArticle[] = [];

  constructor() {}

  ngOnInit(): void {}
}
