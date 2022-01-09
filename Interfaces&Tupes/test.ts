//! Типы используются исключительно для объявления группы стандартных типов
//? Лучше всего испольсовати интерфейсы для фиксированных объектов 
//TODO Интерфейс можно наследовать у другого интерфейса
//! Добавление свойств не доступно типам
type Point = {
	x: number,
	y: number
};

type Point3D = Point & {
	z: number;
}

interface iPoint {
	x: number,
	y: number
};

interface T3DPoint extends iPoint {
	z: number;
}

type stringOrNumber = string | number;

function print(coord: Point) {

}

function print(coord: iPoint) {

}

interface Test {
	a: number;
} //! Test имеет a
interface Test {
	b: number;
} //! Test имеет a, b

const dsss = (point: iPoint) => {
	const d: T3DPoint = point as T3DPoint; //? Представляем одно другим, т.е. каст к определённому типу
}

const myCanvas = document.getElementById('canvas') as HTMLCanvasElement;