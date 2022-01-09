let a: number = 4;
let b: string = "test";
let c: boolean = true;

let d: string[] = ['1', '2'];

let e: any = 3;

function test(a: string): string | number {
	return '';
}


const test2 = (a: number): number => {
	return a * 2;
}

d = d.map(x => x.toLowerCase());

function countCoord(coord: { lat: number, long?: number }) {

}


function print(id: number | string) {
	if (typeof id === 'number') {
		console.log(id.toString());
	} else if (typeof id === "string") {
		id.toUpperCase();
	}
}

function getSum(a: number | number[]) {
	if (Array.isArray(a)) {
		a.sort();
	}
}

function aaa(): void {

}