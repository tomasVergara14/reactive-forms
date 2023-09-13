import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, delay, of, tap } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailValidatorService implements AsyncValidator{

    // validate(control: AbstractControl<any, any>): Observable<ValidationErrors | null> {  // Referencia
        
    //     const email = control.value
    //     console.log({ email })

    //     return of({
    //         emailTaken: true
    //     }).pipe(
    //         delay(2000),
    //         tap((data)=>console.log(data))
    //     )
    // }

    validate(control: AbstractControl<any, any>): Observable<ValidationErrors | null> {  // Referencia
        
        const email = control.value
        console.log({ email })

        const httpCallObservable = new Observable<ValidationErrors | null>( (subscriber)=>{

            console.log(email)
            if( email === 'fernando@google.com' ){
                subscriber.next({ emailTaken: true });
                subscriber.complete();
                return;
            }

            subscriber.next(null);
            subscriber.complete();
        })

        return httpCallObservable;
    }
    
}