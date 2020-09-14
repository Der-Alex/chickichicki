export class BaseSingleton {
  private static instance: BaseSingleton;
  constructor() {
    if (BaseSingleton.instance) {
      return BaseSingleton.instance;
    }
    BaseSingleton.instance = this;
  }
}
