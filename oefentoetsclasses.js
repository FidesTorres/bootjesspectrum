"use strict";

//Weertypes, drukteklasses
class classBootjes {
  constructor(id, vertrekTijd, aankomstTijd, prijs) {
    this.id = id;
    this.aankomstDatum = aankomstTijd; //Date
    this.vertrekDatum = vertrekTijd; //Date
    this.prijsPerUur = prijs; //number
  }

  get id() {
    return this._id;
  }
  get vertrekTijd() {
    return this._vertrekTijd;
  }
  get aankomstTijd() {
    return this._aankomstTijd;
  }
  get prijsPerUur() {
    return this._prijs;
  }

  set id(value) {
    this._id = value;
  }
  set vertrekTijd(value) {
    this._vertrekTijd = value;
  }
  set aankomstTijd(value) {
    this._aankomstTijd = value;
  }
  set prijsPerUur(value) {
    this._prijs = value;
  }
}
