import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.scss'],
})
export class ArticleViewComponent implements OnInit {
  constructor(private activedRoute: ActivatedRoute) {}

  articleId: number;

  ngOnInit(): void {
    this.articleId = parseInt(this.activedRoute.snapshot.paramMap.get('id'));
  }
}
