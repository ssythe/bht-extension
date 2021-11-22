var url = window.location.href

if(url.includes("user/")){
    var url = window.location.href.split('/')
	var user_id = url[4]
		
	var main_div = document.getElementsByClassName('col-6-12')[0]
	var second_div = main_div.getElementsByClassName('card')[0]

	var info = document.createElement("div")
	info.className = "card"

	fetch("https://brick-hill.trade/api/extension/user/" + user_id)
		.then(response => response.json())
		.then((response) => {
			if (response.status == "success") {
				info.innerHTML = `<div class="top blue">
					User info
				</div>
				<div class="content">
					<button class="button bucks flat no-cap"><span class="bucks-icon img-white"></span> ` + response.user.value.toLocaleString("en") + `</button> value
					<br><br>
					<button class="button bits flat no-cap"><span class="bucks-icon img-white"></span> ` + response.user.average.toLocaleString("en") + `</button> average
					<br><br>
					<button class="button blue flat no-cap">#` + response.user.rank.toLocaleString("en") + `</button> richlist rank
					<br><br>
					<button class="button red flat no-cap">` + response.user.specials.toLocaleString("en") + `</button> specials
					<br><br>
					<div class="item-creator">
						Click to <a href="https://brick-hill.trade/user/` + user_id + `" target="_blank" style="text-decoration: underline">view more</a> (not-for-trade serials, historic values, reputation)
					</div>
				</div>`
			} else {
				info.innerHTML = `<div class="top blue">
					User info
				</div>
				<div class="content">
					<div class="item-creator">
						` + response.message + `
					</div>
					<br>
					<div class="item-creator">
						Click to <a href="https://brick-hill.trade/user/` + user_id + `" target="_blank" style="text-decoration: underline">add them</a>
					</div>
				</div>`
			}
		})
		.catch(error => {
			throw error
		})

	main_div.insertBefore(info, second_div.nextSibling)
}
