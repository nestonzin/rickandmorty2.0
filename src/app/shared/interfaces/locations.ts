export interface LocationsApiResponse {
  info: Info;
  results: Location[];
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: any;
}

export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

export interface LocationFilter {
  name?: string;
  type?: string;
  dimension?: string;
}
