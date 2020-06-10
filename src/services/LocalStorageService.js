import defaultRoms from '../configs/defaultRoms';
import _ from 'lodash';

class LocalStorageService {
    constructor() {
        this.store = window.localStorage;
        this.storeKey = 'coffee-nes';
        this.cache = null;
        this.installDefaultRoms();
        window.LocalStorageService = this;
    }

    set(data) {
        this.cache = data;
        this.store.setItem(this.storeKey, JSON.stringify(data));
    }
    
    get() {
        if (!this.cache) {
            this.cache = JSON.parse(this.store.getItem(this.storeKey));
        }
        return JSON.parse(this.store.getItem(this.storeKey));
    }

    installDefaultRoms() {
        const currentData = this.get();
        if (!currentData || currentData.length === 0) this.set(defaultRoms);
    }

    addRomData(name, romData) {
        const currentData = this.get();
        this.set([{name, romData, userCreated: true}, ...currentData]);
    }

    getRomDataAtIdx(idx) {
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
