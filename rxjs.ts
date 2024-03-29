import {AsyncSubject, BehaviorSubject, ReplaySubject, Subject} from "rxjs";

// tsc .\rxjs.ts | node -r esm .\rxjs.js <- cli command to run the js file.

// const obs$ = rxjs.of(1,2,3,4);
// obs$.subscribe((ob)=>{
//     console.log(`ob- ${ob}`)
// })
//
// obs$.subscribe({
//     next: x => console.log(`value ${x}`)
// })

console.log(`******** Subject ********`);
/**
 * Subject will simply broadcast every variable available in it.
 *
 * def: Subject emits value to the subscriber as soon as value comes in.
 *
 * */
const sub = new Subject<number>();
sub.subscribe(console.log)
sub.next(1);
sub.next(2);
sub.subscribe(console.log)
sub.next(3);

console.log(`******** Behaviour Subject ********`)

/**
 * Behaviour Subject is used to multicast and memorize a value that should be
 * emitted whenever a new observer subscribes it.
 *
 * Basically it caches the last value the observable emitted
 * */
const bs = new BehaviorSubject<number>(0)
bs.subscribe(console.log)
bs.next(1);
bs.next(2);
bs.subscribe(console.log)
bs.next(3);

console.log(`*********** ReplySubject ***********`)

/**
 * ReplySubject Caches as many values as you want and forwards
 * them to the subscription as soon as the subscriber comes in.
 *
 * */


const rs = new ReplaySubject<number>();
rs.subscribe(console.log)
rs.next(1);
rs.next(2);
rs.subscribe(console.log)
rs.next(3);


console.log(`********* Async Subject ********`)
/**
 * The AsyncSubject multicasts the last value it has received when it completes.
 * **/

const subject = new AsyncSubject<number>();
subject.subscribe(console.log);
subject.next(1);
subject.next(2);
subject.subscribe(console.log);
subject.next(3);
subject.complete(); // log: 3, 3



