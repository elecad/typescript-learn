function logTime(num: number): number {
	console.log(new Data());
	return num;
}

function logTime1(str: string): string {
	console.log(new Data());
	return str;
}
//! Выше дублирование. It's bad. Решим это... (any не выход)


function logTimeGeneric<T>(num: T): T {
	if (typeof num === 'string') {
		num.toUpperCase();
	}
	console.log(new Data());
	return num;
}


logTimeGeneric<string>('asd');
logTimeGeneric<number>(5);

interface MyInterface {
	transform: <T, F>(a: T) => F
}

class MyGenClass<T> {
	value!: T
}

const hhh = new MyGenClass<number>();

interface TimeStamp {
	stamp: number;
}

function logTimeStamp<T extends TimeStamp>(num: T): T {
	console.log(num.stamp);
	return num;
}