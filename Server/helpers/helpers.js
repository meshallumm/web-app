function is_israeli_id_number(id) {
	id = String(id).trim();
	if (id.length > 9 || isNaN(id)) return false;
	id = id.length < 9 ? ("00000000" + id).slice(-9) : id;
		return Array.from(id, Number).reduce((counter, digit, i) => {
			const step = digit * ((i % 2) + 1);
			return counter + (step > 9 ? step - 9 : step);
		}) % 10 === 0;
}

function numVerify(numToCheck){
let num = /^0(5[^7]|[2-4]|[8-9]|7[0-9])[0-9]{7}$/;
const isRight=num.test(numToCheck); // false
return isRight;
}

module.exports(
    numVerify,
    is_israeli_id_number   
)