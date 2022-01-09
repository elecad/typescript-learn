enum Direction {
	Up = 'Up',
	Down = 'Down',
	Left = 'Left',
	Right = 'Right'
}

enum Decision {
	Yes = 1,
	No = calcEnum()
}

function calcEnum() {
	return 2
}

enum DecisionTest {
	Yes = 1,
	No = 'calcEnum()'
}

function runEnum(obj: { Up: string }) {

}

runEnum(Direction);

enum TestA {
	A
}

let Testing111 = TestA.A;
let nameA = TestA[Testing111]; // A

const enum ConstEnum {
	A, B
}

let ciiis = ConstEnum.A

enum Dice {
	One = 1,
	Two,
	Three
}

function ruDuce(dice: Dice) {
	switch (dice) {
		case Dice.One:
			return 'Один';
		case Dice.Two:
			return 'Два';
		case Dice.Three:
			return 'Три'
		default:
			const ggg: never = dice
	}
}