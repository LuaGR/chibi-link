import type { Url, UrlApi } from '@/models';

export class UrlAdapter {
  static adapt(data: UrlApi): Url {
    return {
      shortUrl: data.shortUrl || '',
      url: data.url || '',
    };
  }
}
