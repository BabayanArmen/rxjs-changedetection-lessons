import { DataService } from './services/data.service';
import { Component, OnInit } from '@angular/core';
import { filter, from, map, reduce, pipe, Observable, tap, switchMap, fromEvent, take, first, takeWhile, of, takeLast, Subject, takeUntil, mergeMap, concat, forkJoin, interval, catchError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rxjsinangular';

  obs1$ = new Observable(function subscribe(observer: any) {
    observer.next('Hey guys')
    observer.next('How are you')
    observer.complete()
    observer.next('this will not send')
  })

  onStop = new Subject<void>();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // this.someJSChainExample()
    // this.someRXChainExample()

    // this.obs1$.subscribe((x: any) => {
    //   console.log(x)
    // })

    // this.dataService.getDataOf().subscribe(res => {
    //   console.log(res)
    // })

    // this.dataService.getDataFrom().subscribe(res => console.log(res))

    // this.dataService.dataABObs.subscribe(res => console.log(res))

    // this.dataService.getDataFrom()
    // .pipe(
    //   map(el => el.a.toUpperCase()),
    //   tap(el => {                     // tap dosen't change data
    //     el.toLowerCase()
    //     console.log(el)
    //   })
    // )
    // .subscribe(res => console.log(res))

    // this.dataService.getPosts().subscribe(res => console.log(res))

    //// switchMap /////////////////////////////
    // const postsObs = this.dataService.getPosts()
    // const commenttsObs = this.dataService.getComments()

    // const combined = postsObs.pipe(
    //   switchMap(posts => {
    //     return commenttsObs
    //     .pipe(
    //       tap(comments => {
    //         console.log('posts', posts)
    //         console.log('comments', comments)
    //       })
    //     )
    //   })
    // )

    // combined.subscribe()
    ////////////////////////////////////////////

    // this.listenToClick()

    // this.takeLastOperator()

    // this.takeUntilOperator()


    ///////////////// MergeMap  WOW //////////////////////////
    // const postsObs = this.dataService.getPosts()
    // const commenttsObs = this.dataService.getComments()

    // const combined2 = postsObs.pipe(
    //   mergeMap(post => {
    //     return commenttsObs.pipe(
    //       map(comment => {
    //         const res = {
    //           post,
    //           comment
    //         }
    //         return res
    //       })
    //     )
    //   })
    // )

    // combined2.subscribe(data => console.log(data))
    ////////////////////////////////////////////////////////

    /////////////////////// concat /////////////////////////
    // const postsObs = this.dataService.getPosts()
    // const commenttsObs = this.dataService.getComments()

    // const combined3 = concat(postsObs, commenttsObs)

    // combined3.subscribe(data => console.log(data))
    ////////////////////////////////////////////////////////

    ///////////////// forkJoin ////////////////////////////
    // const postsObs = this.dataService.getPosts()
    // const commenttsObs = this.dataService.getComments()

    // const combined4 = forkJoin([postsObs, commenttsObs])
    // combined4.subscribe(data => console.log(data))
    ////////////////////////////////////////////////////////

    //////////////////// interval //////////////////////////
    // let stopTimer = new Subject<void>()

    // const clickEv = fromEvent(document, 'keyup')
    // .subscribe((event: any) => {
    //   if(event.keyCode === 13) {
    //     stopTimer.next()
    //     stopTimer.complete()
    //   }
    // })

    // const secundes = interval(1000)
    // secundes
    // .pipe(takeUntil(stopTimer))
    // .subscribe(s => console.log(s))
    ////////////////////////////////////////////////////////

    ///////////////// catchError ///////////////////////////
    // of(1, 2, 3, 4, 5).pipe(
    //   map(n => {
    //     if (n === 4) {
    //       throw 'four!';
    //     }
    //     return n;
    //   }),
    //   catchError(err => {
    //     throw 'error in source. Details: ' + err;
    //   }),
    // ).subscribe(x => console.log(x))
    ////////////////////////////////////////////////////////////

    //////////////////////  somthing else //////////////////////
    // const source = of(1, 2, 3, 4, 5, 6, 7)
    // source
    // .pipe(
    //   map(x => {
    //     console.log(x)
    //     return x
    //   })
    // )
    // .subscribe(res => console.log(res))


  }

  someJSChainExample() {
    let arr = [1, 2, 3, 4, 5, 6, 7]
    let res = arr.filter(x => x > 4)
    .map(x => x + x)
    .reduce((a, b) => a + b, 0)
    console.log(res);
  }

  someRXChainExample() {
    const source$ = from([1, 2, 3, 4, 5, 6, 7])
    source$.pipe(
      filter(x => x > 4),
      map(x => x + x),
      reduce((a, b) => a + b, 0)
    ).subscribe(x => console.log(x))
  }

  listenToClick() {
    let counter: number = 0
    const clickEvent = fromEvent(document, 'click')
    clickEvent
    // .pipe(take(1)) // կվերցնի միայն առաջինը կամ ինչքան ուզենանք
    // .pipe(first()) // կվերցնի միայն առաջինը
    .pipe(takeWhile(() => counter < 3))
    .subscribe((event: any) => {
      console.log('click')
      counter++
    })
    /// listening to keyboard ////
    // const clickEvent = fromEvent(document, 'keypress')
    // clickEvent
    // .subscribe((event: any) => {
    //   console.log(event.keyCode)
    // })
  }

  takeLastOperator() {
    const source = of(1, 2, 3, 4, 5, 6, 7)
    source
    .pipe(takeLast(3))
    .subscribe(res => console.log(res))

    // const source = from([1, 2, 3, 4, 5, 6, 7])
    // source
    // .pipe(takeLast(3))
    // .subscribe(res => console.log(res))

  }

  takeUntilOperator() {
    const source = fromEvent(document, 'click')
    source
    .pipe(takeUntil(this.onStop))
    .subscribe(res => console.log(res))
  }

  stop() {
    this.onStop.next()
    this.onStop.complete()
  }

}
