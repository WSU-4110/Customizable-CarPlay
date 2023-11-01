// Subject class
class GPSReceiver {
    constructor() {
      this.observers = [];
    }
  
    attachObserver(observer) {
      this.observers.push(observer);
    }
  
    notifyObservers() {
      for (const observer of this.observers) {
        observer.update();
      }
    }
  
    // This method is called whenever the GPS receiver's location changes.
    updateLocation(latitude, longitude) {
      this.notifyObservers();
    }
  }
  