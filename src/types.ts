export interface Entry {
  id: string,
  API: string,
  Description: string,
  Auth: string,
  HTTPS: boolean,
  Cors: string,
  Category: string,
  Link: string,
}

export interface Entries extends Array<Entry>{}

export interface Response {
  data: {
    entries: Entry[],
    [key: string]: any,
  }
  [key: string]: any,
}