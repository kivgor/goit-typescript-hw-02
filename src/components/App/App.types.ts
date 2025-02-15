export interface Urls {
  small: string;
  regular: string;
}
export interface User {
  id: string;
  name: string;
}

export interface Image {
  id: string;
  urls: Urls;
  alt_description: string;
  likess: number;
  user: User;
}
export interface ImageResult {
  results: Image[];
  total_pages: number;
}
