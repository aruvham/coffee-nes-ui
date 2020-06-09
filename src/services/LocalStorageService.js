import defaultRoms from '../configs/defaultRoms';
import _ from 'lodash';

class LocalStorageService {
    constructor() {
        this.store = window.localStorage;
        this.storeKey = 'coffee-nes';
        this.cached = null;
        this.installDefaultRoms();
        window.LocalStorageService = this;
    }

    set(data) {
        this.cached = data;
        this.store.setItem(this.storeKey, JSON.stringify(data));
    }
    
    get() {
        if (!this.cached) {
            this.cached = JSON.parse(this.store.getItem(this.storeKey));
        }
        return JSON.parse(this.store.getItem(this.storeKey));
    }

    installDefaultRoms() {
        const currentData = this.get();
        if (!currentData || currentData.length === 0) this.set(defaultRoms);
    }

    gatRomDataAtIdx(idx) {
        const currentData = this.get();
        return currentData[idx];
    }

    deleteRomDataAtIdx(idx) {
        const currentData = this.get();
        _.pullAt(currentData, [idx]);
        this.set(currentData);
    }
}

export default LocalStorageService;
