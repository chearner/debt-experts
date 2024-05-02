import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SiteLinks } from '../models/site-links';
import { SiteDetails } from '../models/site-details';
import { GlobalState } from '../models/global-state';

interface Cat {
    id: number;
    cat: string;
  };

  interface CatImage {
    id: string;
    url: string;
    breeds: any[] | undefined;
    width: number;
    height: number;
  }

@Injectable({
  providedIn: 'root',
})
export class CatService {

    public getCats(limit: number) {
        const url = 'https://api.thecatapi.com/v1/images/search?limit=' + limit;

  }
}