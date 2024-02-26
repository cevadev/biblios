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
export default function Bible(id, name, abbreviation) {
  this.id = id;
  this.name = name;
  this.abbreviation = abbreviation;
}

Bible.prototype.getBible = function () {
  console.info(this);
};
Bible.prototype.getName = function () {
  console.info(`Bible name: ${this.name}`);
};
