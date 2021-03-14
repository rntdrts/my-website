import HttpClient from '../base-client';
import { PRResponse } from './types';

class Github extends HttpClient {
  public constructor() {
    super('https://api.github.com/');
  }

  public getMyContributions = () =>
    this.instance.get<PRResponse>('/search/issues?q=type:pr+author:rntdrts');
}

export default new Github();
