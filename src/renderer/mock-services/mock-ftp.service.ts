import { Observable } from 'rxjs/Observable';

export class MockFtpService {
  connected = new Observable((observer: any) => {
    observer.next(true);
  });
}
