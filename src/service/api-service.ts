/**
 * Created by moka on 2017/6/18 0018.
 */
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {ConfigService} from "./config.service";

@Injectable()
export class ApiService extends ConfigService {

    constructor(_http: Http) {
        super(_http);
    }
}
