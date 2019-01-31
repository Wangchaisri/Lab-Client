
let stdin = process.openStdin()
var a
var test1 = function() {
	console.log('Enter Temperature (Celsius): ')
	stdin.addListener("data",(value) => {
		a = ( +(value.toString().trim()) + 273.15 )
		console.log("Kalvin is " + a )
		stdin.destroy()
	})
}

module.exports.test1 = test1;