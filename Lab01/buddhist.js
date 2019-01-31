
let stdin = process.openStdin()
var a

var test1 = function() {
	console.log('Enter Buddhist Era: ')
	stdin.addListener("data",(value) => {
		a=value
			 console.log(" Christian Era is " + (a - 543))
			stdin.destroy()

	})
}

module.exports.test1= test1;