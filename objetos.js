const coche = {
  apodo: "El Vengador Malva",
  modelo: "Yaris",
  marca: "Toyota",
  encendido: false,
  arrancar: function () {
    this.encendido = true;
    console.log(this);
  },
  detener: function () {
    this.encendido = false;
  },
  cambiarApodo: function (nuevoApodo) {
    this.apodo = nuevoApodo;
  },
};

const coches = [
  {
    apodo: "El Vengador Malva",
    modelo: "Yaris",
    marca: "Toyota",
    encendido: false,
    arrancar: function () {
      this.encendido = true;
      console.log(this);
    },
    detener: function () {
      this.encendido = false;
    },
    cambiarApodo: function (nuevoApodo) {
      this.apodo = nuevoApodo;
    },
  },
  {
    apodo: "Llanero solitario",
    modelo: "Yaris",
    marca: "Toyota",
    encendido: false,
    arrancar: function () {
      this.encendido = true;
      console.log(this);
    },
    detener: function () {
      this.encendido = false;
    },
    cambiarApodo: function (nuevoApodo) {
      this.apodo = nuevoApodo;
    },
  },
];

const calculateRandom = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

const ejecutarCarreraRandom = () => {
  const max = coches.length;
  const min = 0;

  const autoGanador = calculateRandom(min, max);

  console.log(coches[autoGanador].apodo);
};

ejecutarCarreraRandom();

const usuario = {
  id: "usr-123",
  nombre: "Noemy",
  edad: 25,
  esActivo: true,
  direccion: {
    calle: "Av. Siempre viva",
    numero: 123,
  },
};

let usuarioCopia = Object.assign({}, usuario)

console.log(usuarioCopia)
