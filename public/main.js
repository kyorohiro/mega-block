var app = new Vue({
	el: "#app",
	data: {
		message: "Hello Vue!!",
		seen: true
	}
});

(function main() {
	console.log(app.message);
})();
