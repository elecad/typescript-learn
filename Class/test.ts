class PointClass {
	//! Восклицательный знак - пропуск инициализации
	private x!: number; //? Приватное свойство
	readonly y!: number; //? Можно только читать

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}

	protected func() {

	}
}

const MyPoint = new PointClass(0, 0);

class D3Point extends PointClass {
	z!: number;
	constructor(x: number, y: number, z: number) {
		super(x, y);
	}

	func(name?: string) {

	}
}

const MyPoint3D = new D3Point(1, 1, 1);


class StaticTest {
	static cas = 'das'; //? Static - получения свойства не из экземпляора класа
}

const dad: string = StaticTest.cas;

abstract class Testing {
	MyMethod() {

	}
}

class TestingClass extends Testing {
	MyMethod() {
		console.log('Гав');

	}
}

const ggg = new TestingClass;


interface uuu {
	test: () => number;
}

class Data implements uuu {
	test() {
		return 3;
	}
}