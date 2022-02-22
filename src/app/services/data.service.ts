import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

private dataAB = [
    {
      a: "a1",
      b: "b1"
    },
    {
      a: "a2",
      b: "b2"
    },
    {
      a: "a3",
      b: "b3"
    },
    {
      a: "a4",
      b: "b4"
    },
    {
      a: "a5",
      b: "b5"
    },
    {
      a: "a6",
      b: "b6"
    },
    {
      a: "a7",
      b: "b7"
    },
  ]

public dataABObs = new Observable((observer) => {
    observer.next(this.dataAB)
})

  constructor(private http: HttpClient) { }

  public getDataOf() {
    return of(this.dataAB)
  }

  public getDataFrom() {
    return from(this.dataAB)
  }

  public getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  public getComments() {
    return this.http.get('https://jsonplaceholder.typicode.com/comments')
  }

}
