import HttpClient from '../base-client';
import { MediumTypes } from './types';

class Medium extends HttpClient {
  public constructor() {
    super(
      'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@rntdrt.s'
    );
  }

  public getMyPosts = () => this.instance.get<MediumTypes>('');
}

export default new Medium();
