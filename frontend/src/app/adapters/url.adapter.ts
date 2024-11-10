import type { Url, UrlResponse } from '@/models';

export class UrlAdapter {
  static adapt(data: UrlResponse): Url {
    return {
      url: data.url || '',
      shortUrl: data.shortUrl || '',
    };
  }
}
