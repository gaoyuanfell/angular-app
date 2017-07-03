import * as qs  from 'querystring'
import {Http, Headers} from "@angular/http";

export class ConfigService {
    baseUrl = 'http://120.77.83.117:8080/Invoice_pro/';

    constructor(private _http: Http) {
    }

    configForm() {
        let h = new Headers();
        h.append('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
        return h;
    }

    configJson() {
        let h = new Headers();
        h.append('Content-Type', 'application/json;charset=UTF-8');
        return h;
    }

    postForm(url, body = {}, config = {}) {
        return this._http.post(url, qs.stringify(body), {headers: this.configForm(), ...config})
    }

    postJson(url, body = {}, config = {}) {
        return this._http.post(url, body, {headers: this.configJson(), ...config})
    }

    get(url, body = {}, config = {}) {
        return this._http.get(`${url}?${qs.stringify(body)}`, config)
    }
}
