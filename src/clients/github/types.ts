export class PRResponse {
  items: PullRequests[];
}

export class PullRequests {
  created_at: Date;
  title: string;
  url: string;
}
