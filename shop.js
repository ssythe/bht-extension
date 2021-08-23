var url = window.location.href

if(url.includes("shop/")){
    var url = window.location.href.split('/')
	var item_id = url[4]
		
	var main_div = document.getElementsByClassName("col-10-12 push-1-12 item-holder")[0]
	var second_div = document.getElementsByClassName("card mb4")[0]

	var info = document.createElement("div")
	info.className = "card mb4"

	fetch("https://brick-hill.trade/api/extension/item/" + item_id)
		.then(response => response.json())
		.then((response) => {
			if (response.status == "success") {
				info.innerHTML = `<div class="padding-bottom">
					<div class="content item-page">
						<div class="ellipsis">
							<span class="medium-text bold ablack-text">Item info</span>
						</div>
						<br>
						<button class="button bits flat no-cap">` + response.item.demand + `</button> demand
						<br><br>
						<button class="button bucks flat no-cap"><span class="bucks-icon img-white"></span> ` + response.item.value.toLocaleString("en") + `</button> value
						<br><br>
						<button class="button blue flat no-cap">` + response.item.shorthand + `</button> shorthand
						<br><br>
						<div class="item-creator">
							Click to <a href="https://brick-hill.trade/item/` + item_id + `" target="_blank" style="text-decoration: underline">view more</a> (owners, not-for-trade serials/inactive owners, historic values)
						</div>
					</div>
				</div>`
			} else {
				info.innerHTML = `<div class="padding-bottom">
					<div class="content item-page">
						<div class="ellipsis">
							<span class="medium-text bold ablack-text">Item info</span>
						</div>
						<br>
						<div class="item-creator">
							` + response.message + `
						</div>
						<br>
						<div class="item-creator">
							Click to <a href="https://brick-hill.trade/item/` + item_id + `" target="_blank" style="text-decoration: underline">view more</a> (owners, not-for-trade serials/inactive owners)
						</div>
					</div>
				</div>`
			}
		})
		.catch(error => {
			throw error
		})

	main_div.insertBefore(info, second_div.nextSibling)
}