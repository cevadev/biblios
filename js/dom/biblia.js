/**
 * Definiendo clases en Javascript
 */
class Libro {
  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
  getId() {}
  getName() {}
  getDescription() {}
}

export default class Biblia extends Libro {
  constructor(id, name, description, abbreviation) {
    super(id, name, description);
    this.abbreviation = abbreviation;
    this.type = null;
  }
  static info() {
    return "Se prohibe su comercialización";
  }
  get getId() {
    return this.id;
  }
  get getName() {
    return this.name;
  }
  get getDescription() {
    return this.description;
  }
  get getAbbreviation() {
    return this.abbreviation;
  }
  set setType(type) {
    this.type = type;
  }
  get getType() {
    return this.type;
  }
  get toString() {
    return `Bible: ${this.getId}, ${this.getName}, ${this.getDescription}, ${
      this.getAbbreviation
    }, ${this.getType}, ${Biblia.info()}`;
  }
}
