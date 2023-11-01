// Observer class
class MapUI {
    constructor(gpsReceiver) {
      this.gpsReceiver = gpsReceiver;
      this.gpsReceiver.attachObserver(this);
    }
  
    // This method is called whenever the GPS receiver's location changes.
    update() {
      // Update the map UI to show the user's new location.
    }
  }
  