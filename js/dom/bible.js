// Version 1 funcion constructora segun version ES5
// export default function Bible(id, name, abbreviation) {
//   this.id = id;
//   this.name = name;
//   this.abbreviation = abbreviation;

//   // cada instancia que se crea tendra la funcion showName() algo que no es lo mejor si hablamos de rendimiento.
//   // lo mejor seria asignar sacar los metodos de la funcion Bible y pegar los metodos al prototipo
//   this.showName = function () {
//     console.info(this);
//     console.info(
//       `El nombre de la Bilia es: ${this.name} - ${this.abbreviation}`
//     );
//   };
//}

// version 2 - Funcion constructora donde asignamos los metodos al prototipo
function Book(id, name, description) {
  this.id = id;
  this.name = name;
  this.description = description;
}
Book.prototype.getName = function () {
  // console.info(`Name: ${this.name}`);
};
Book.prototype.getDescription = function () {
  // console.info(`Description: ${this.description}`);
};

export default function Bible(id, name, description, abbreviation) {
  this.super = Book;
  this.super(id, name, description);
  this.abbreviation = abbreviation;
}
// bible hereda de Book
Bible.prototype = new Book();
Bible.prototype.constructor = Bible;

// sobrescritura de los metodos del padre en el hijo
Bible.prototype.getName = function () {
  console.info(`Bible name: ${this.name}`);
};

Bible.prototype.getDescription = function () {
  console.info(`Bible description: ${this.description}`);
};

Bible.prototype.getAbb = function () {
  console.info(`Bible Abb.: ${this.abbreviation}`);
};

// Version 3 - Clase
// export default class Bible {
//   constructor(id, name, abbreviation) {
//     this.id = id;
//     this.name = name;
//     this.abbreviation = abbreviation;
//   }
//   getBible() {
//     console.info(this);
//   }
//   getName() {
//     console.info(`Bible name: ${this.name}`);
//   }
// }
