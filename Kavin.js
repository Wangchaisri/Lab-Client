
let stdin = process.openStdin()
var a
var test1 = function() {
	console.log('Enter Temperature (Celsius): ')
	stdin.addListener("data",(value) => {
		a = value
			 console.log("Kavin is " + (a + 273))
			stdin.destroy()

	})
}

module.exports.test1 = test1;