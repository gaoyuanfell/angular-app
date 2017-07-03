import {Injectable, ViewContainerRef} from "@angular/core";
@Injectable()
export class GlobalService {
    constructor() {
        for (let k in  window.sessionStorage) {
            this.session.set(k, this.getSession(k));
        }
    }

    /*
     * 根路由的 ViewContainerRef
     * */
    private _rootViewContainerRef: ViewContainerRef;
    set rootViewContainerRef(view: ViewContainerRef) {
        view && (this._rootViewContainerRef = view);
    }

    get rootViewContainerRef() {
        return this._rootViewContainerRef
    }

    /*
     * 缓存信息
     * */
    private session = new Map();

    setSession(key, value) {
        window.sessionStorage.setItem(key, JSON.stringify(value));
        this.session.set(key, value);
    }

    getSession(key) {
        let v = this.session.get(key);
        if (!v) {
            let str = window.sessionStorage.getItem(key);
            try {
                return JSON.parse(str);
            } catch (e) {
                return void 0;
            }
        }
        return v;
    }

    deleteSession(key) {
        window.sessionStorage.removeItem(key);
        this.session.delete(key);
    }

    private cache = new Map();

    setCache(key, value) {
        this.cache.set(key, value);
    }

    getCache(key) {
        return this.cache.get(key);
    }

    deleteCache(key) {
        this.cache.delete(key);
    }
}
