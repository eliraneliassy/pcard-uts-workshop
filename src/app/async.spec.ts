import { fakeAsync, flush, tick } from '@angular/core/testing';
import { of, delay } from 'rxjs';
describe('AsyncTest', () => {

    it('Basic sync test', () => {
        let flag = false;
        expect(flag).toBeFalsy();
        flag = true;
        expect(flag).toBeTruthy();
    })

    it('basic async test', (done: jest.DoneCallback) => {
        let flag = false;
        setTimeout(() => {
            flag = true;
            expect(flag).toBeTruthy();
            done();
        }, 3000)
    });

    it('basic async test - Observables', fakeAsync(() => {
        let flag =false;
        of(1)
        .pipe(delay(2000))
        .subscribe(() => {
            flag = true;
        });

        tick(1000);
        expect(flag).toBeFalsy();
        tick(1001);
        expect(flag).toBeTruthy();
    }))

    it('basic async test - Observables', fakeAsync(() => {
        let flag =false;
        setTimeout(() => {
            flag = true;
        }, 3000)

        flush();

        expect(flag).toBeTruthy();
    }))

})