import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    constructor(private _http: HttpClient) { }

    enrollUser(enrolledUser: any) {
        return this._http.post(environment.serverURL + 'enroll/saveuser', enrolledUser);
    }

    checkLoggedInUser(loggedInUser: any) {
        return this._http.post(environment.serverURL + 'enroll/loginvalidation', loggedInUser);
    }

    getProfileDetails(userId: string) {
        return this._http.get(environment.serverURL + 'enroll/fetchprofiledetails/' + userId);
    }

    updateProfile(user: any) {
        return this._http.put(environment.serverURL + 'enroll/updateprofile/' + user.userId, user);
    }
}
