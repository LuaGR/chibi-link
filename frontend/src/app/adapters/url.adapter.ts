import type { Url } from '@/models';

export class UrlAdapter {
  static adapt(data: any): Url {
    return {
      shortUrl: data.shortUrl || '',
      url: data.url || '',
    };
  }
}
