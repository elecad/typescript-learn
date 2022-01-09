type MyPoint = { x: number, y: number }
type P = keyof MyPoint; //? { x: number, y: number }

function MyF() {
	return { a: 1 };
}
type MyFType = () => { a: number }

type K = ReturnType<typeof MyF>
type D = ReturnType<MyFType>

const MyArray = [
	{ name: 'Вася', age: 30 }
];

type Person = typeof MyArray[number];
type Age = typeof MyArray[number]['age'];

type MessageOf<T> = T extends { message: unknown } ? T['message'] : never;

interface Email {
	message: string;
}

interface Cat {
	mya: number;
}

type EmailMessageContents = MessageOf<Email>
type CatMessageContents = MessageOf<Cat>


interface Test {
	[key: string]: number;
}

type OptionFlags<Type> = {
	[Property in keyof Type]: boolean
}

type World = 'word';

type Greeting = `Hello ${World}`