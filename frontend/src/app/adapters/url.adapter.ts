import type { Url, UrlApi } from '@/models';

export const UrlAdapter = (data: UrlApi): Url => ({
  shortUrl: data.shortUrl || '',
  url: data.url || '',
});
