export interface CharacterFilter {
  name?: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
}

export interface CharacterApiResponse {
  results: any[];
  info: any;
}
