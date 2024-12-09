import{Observable} from "rxjs";

new Observable<any>(observer =>{
    observer.next(1);
    observer.complete()
})