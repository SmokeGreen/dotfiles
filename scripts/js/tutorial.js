function func1() {
	var max_num = 1000;
	var sum = 0;
	for (var i=0; i < max_num; i++) {
		sum += i;
	}
	console.log(sum);
}

function func2() {
	console.log('hello');
}

func1();
func2();
