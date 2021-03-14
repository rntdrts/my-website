import axios, { AxiosInstance, AxiosResponse } from 'axios';

abstract class HttpClient {
  protected readonly instance: AxiosInstance;

  public constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL,
    });

    this._initializeResponseInterceptor();
  }

  private _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      this._handleResponse,
      this._handleError
    );
  };

  private _handleResponse = (response: AxiosResponse) => response;

  protected _handleError = (error: Error): Promise<Error> =>
    Promise.reject(error);
}

export default HttpClient;
