export interface GetPokemos {
    count: number;
    next: null;
    previous: null;
    results: Result[];
  }
  
  export interface Result {
    name: string;
    url: string;
  }