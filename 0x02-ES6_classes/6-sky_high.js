// 6-sky_high.js
import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);  // Call parent constructor
    this._floors = floors;
  }

  // Getter for floors
  get floors() {
    return this._floors;
  }

  // Override evacuationWarningMessage
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
