import * as qs  from 'querystring'
import {Http, Headers} from "@angular/http";

export class ConfigService {
    baseUrl = 'http://120.77.83.117:8080/Invoice_pro/';

    constructor(private _http: Http) {
    }

    static configForm() {
        let h = new Headers();
        h.append('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
        return h;
    }

    static configJson() {
        let h = new Headers();
        h.append('Content-Type', 'application/json;charset=UTF-8');
        return h;
    }

    postForm(url, body = {}, config = {}) {
        return this._http.post(url, qs.stringify(body), {headers: ConfigService.configForm(), ...config})
    }

    postJson(url, body = {}, config = {}) {
        return this._http.post(url, body, {headers: ConfigService.configJson(), ...config})
    }

    get(url, body = {}, config = {}) {
        return this._http.get(`${url}?${qs.stringify(body)}`, config)
    }
}
