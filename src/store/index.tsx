import { makeAutoObservable } from "mobx";

class AppStore {
    public constructor() {
        makeAutoObservable(this);
    }
}

export const appStore = new AppStore();
