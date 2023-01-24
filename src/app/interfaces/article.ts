export interface IArticle {
  children_deep_count: number;
  created_at: Date | string;
  deleted_at: any;
  id: string;
  owner_id: string;
  owner_username: string;
  parent_id: any;
  published_at: Date | string;
  slug: string;
  source_url: any;
  status: 'published';
  tabcoins: number;
  title: string;
  updated_at: Date | string;
}
