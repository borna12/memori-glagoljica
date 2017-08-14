// Memory Game
// © 2014 Nate Wiley
// License -- MIT
// best in full screen, works on phones/tablets (min height for game is 500px..) enjoy ;)
// Follow me on Codepen

(function () {
	//localStorage.clear();
	var br = 1;
	var sec = 0;
	var pokusaj = 0;
	var vrijeme = 1;

	var najbolje_vrijeme;
	var najmanji_broj_pokusaja;

	function pad(val) {
		return val > 9 ? val : "0" + val;
	}
	setInterval(function () {
		if (vrijeme == 1) {
			$("#seconds").html(pad(++sec % 60));
			$("#minutes").html(pad(parseInt(sec / 60, 10)));
		}
	}, 1000);
	var Memory = {

		init: function (cards) {
			this.$game = $(".game");
			this.$modal = $(".modal");
			this.$overlay = $(".modal-overlay");
			this.$restartButton = $(".restart");
			this.cardsArray = $.merge(cards, cards);
			this.shuffleCards(this.cardsArray);
			this.setup();
		},

		shuffleCards: function (cardsArray) {
			this.$cards = $(this.shuffle(this.cardsArray));
		},

		setup: function () {
			this.html = this.buildHTML();
			this.$game.html(this.html);
			this.$memoryCards = $(".card");
			this.binding();
			this.paused = false;
			this.guess = null;
		},

		binding: function () {
			this.$memoryCards.on("click", this.cardClicked);
			this.$restartButton.on("click", $.proxy(this.reset, this));
			$(".disclaimer").show();
		},
		// kinda messy but hey
		cardClicked: function () {

			var _ = Memory;
			var $card = $(this);
			if (!_.paused && !$card.find(".inside").hasClass("matched") && !$card.find(".inside").hasClass("picked")) {

				$card.find(".inside").addClass("picked");
				if (!_.guess) {
					_.guess = $(this).attr("data-id");
					$(this).find('p').toggle();
				} else if (_.guess == $(this).attr("data-id") && !$(this).hasClass("picked")) {
					$(".picked").addClass("matched");
					_.guess = null;
					$(".matched").find('p').remove();
					pokusaj++;

					switch ($(this).attr('data-id')) {
						case "1":
							vrijeme = 0;
							swal({
								title: $(this).find('img').attr('alt'),
								html: '<img src="slike/0.jpg" class="ikone"/><br><br>' +
									'<p></p>',
								showCloseButton: true,
								confirmButtonText: '<i class="fa fa-thumbs-up"></i> dalje',
							});
							$('.swal2-confirm').click(function () {
								vrijeme = 1;

							});
							break;
						case "2":
							vrijeme = 0;
							swal({
								title: $(this).find('img').attr('alt'),
								html: '<img src="slike/1.jpg" class="ikone"/><br><br>' +
									'<p></p>',
								showCloseButton: true,
								confirmButtonText: '<i class="fa fa-thumbs-up"></i> dalje',
							});
							$('.swal2-confirm').click(function () {
								vrijeme = 1;

							});
							break;
						case "3":
							vrijeme = 0;
							swal({
								title: $(this).find('img').attr('alt'),
								html: '<img src="slike/2.jpg" class="ikone"/><br><br>' +
									'<p></p>',
								confirmButtonText: '<i class="fa fa-thumbs-up"></i> dalje',
							});
							$('.swal2-confirm').click(function () {
								vrijeme = 1;

							});
							break;
						case "4":
							vrijeme = 0;
							swal({
								title: $(this).find('img').attr('alt'),
								html: '<img src="slike/3.jpg" class="ikone"/><br><br>' +
									'<p></p>',
								showCloseButton: true,
								confirmButtonText: '<i class="fa fa-thumbs-up"></i> dalje',
							});
							$('.swal2-confirm').click(function () {
								vrijeme = 1;

							});
							break;
						case "5":
							vrijeme = 0;
							swal({
								title: $(this).find('img').attr('alt'),
								html: '<img src="slike/4.jpg" class="ikone"/><br><br>' +
									'<p></p>',
								showCloseButton: true,
								confirmButtonText: '<i class="fa fa-thumbs-up"></i> dalje',
							});
							$('.swal2-confirm').click(function () {
								vrijeme = 1;

							});
							break;
						case "6":
							vrijeme = 0;
							swal({
								title: $(this).find('img').attr('alt'),
								html: '<img src="slike/5.jpg" class="ikone"/><br><br>' +
									'<p></p>',
								showCloseButton: true,
								confirmButtonText: '<i class="fa fa-thumbs-up"></i> dalje',
							});
							$('.swal2-confirm').click(function () {
								vrijeme = 1;

							});
							break;
						case "7":
							vrijeme = 0;
							swal({
								title: $(this).find('img').attr('alt'),
								html: '<img src="slike/6.jpg" class="ikone"/><br><br>' +
									'<p></p>',
								showCloseButton: true,
								confirmButtonText: '<i class="fa fa-thumbs-up"></i> dalje',
							});
							$('.swal2-confirm').click(function () {
								vrijeme = 1;

							});
							break;
						case "8":
							vrijeme = 0;
							swal({
								title: $(this).find('img').attr('alt'),
								html: '<img src="slike/7.jpg" class="ikone"/><br><br>' +
									'<p></p>',
								showCloseButton: true,
								confirmButtonText: '<i class="fa fa-thumbs-up"></i> dalje',
							});
							$('.swal2-confirm').click(function () {
								vrijeme = 1;

							});
							break;
						case "9":
							vrijeme = 0;
							swal({
								title: $(this).find('img').attr('alt'),
								html: '<img src="slike/8.jpg" class="ikone"/><br><br>' +
									'<p></p>',
								showCloseButton: true,
								confirmButtonText: '<i class="fa fa-thumbs-up"></i> dalje',
							});
							$('.swal2-confirm').click(function () {
								vrijeme = 1;

							});
							break;
						case "10":
							vrijeme = 0;
							swal({
								title: $(this).find('img').attr('alt'),
								html: '<img src="slike/9.jpg" class="ikone"/><br><br>' +
									'<p></p>',
								showCloseButton: true,
								confirmButtonText: '<i class="fa fa-thumbs-up"></i> dalje',
							});
							$('.swal2-confirm').click(function () {
								vrijeme = 1;

							});
							break;
						case "11":
							vrijeme = 0;
							swal({
								title: $(this).find('img').attr('alt'),
								html: '<img src="slike/10.jpg" class="ikone"/><br><br>' +
									'<p></p>',
								showCloseButton: true,
								confirmButtonText: '<i class="fa fa-thumbs-up"></i> dalje',
							});
							$('.swal2-confirm').click(function () {
								vrijeme = 1;

							});
							break;

					}

				} else {
					pokusaj++;
					$(this).find('p').toggle();
					_.guess = null;
					_.paused = true;
					setTimeout(function () {
						$(".picked").removeClass("picked");
						Memory.paused = false;
						$(".brojevi").show();
					}, 1200);
				}
				if ($(".matched").length == $(".card").length) {
					_.win();
				}
			}
		},

		win: function () {
			this.paused = true;
			setTimeout(function () {
				Memory.showModal();
				Memory.$game.fadeOut();
			}, 1000);
		},

		showModal: function () {
			var minute = Math.floor(sec / 60);
			var sekunde = sec - minute * 60;
			this.$overlay.show();
			this.$modal.fadeIn("slow");
			var najvrijeme = localStorage.getItem('najvrijeme');

			if (najvrijeme === undefined || najvrijeme === null) {
				najvrijeme = sec;
				localStorage.setItem('najvrijeme', sec);
			}

			// If the user has more points than the currently stored high score then
			if (sec < najvrijeme) {
				// Set the high score to the users' current points
				najvrijeme = sec;
				// Store the high score
				localStorage.setItem('najvrijeme', sec);
			}



			// Return the high score

			var najpokusaji = localStorage.getItem('najpokusaji');

			if (najpokusaji === undefined || najpokusaji === null) {
				najpokusaji = pokusaj;
				localStorage.setItem('najpokusaji', pokusaj);
			}

			// If the user has more points than the currently stored high score then
			if (pokusaj < najpokusaji) {
				// Set the high score to the users' current points
				najpokusaji = pokusaj;
				// Store the high score
				localStorage.setItem('najpokusaji', pokusaj);
			}
			var naj_minute = Math.floor(najvrijeme / 60);
			var naj_sekunde = najvrijeme - naj_minute * 60;

			$(".time").html("<br>trenutačni broj pokušaja: " + pokusaj + "</br>najmanji broj pokušaja u igri: " + najpokusaji + "</br></br>vrijeme potrebno za završetak igre: " + minute + " min " + sekunde + " sec</br>najbolje vrijeme: " + naj_minute + " min " + naj_sekunde + " sec</br></br></br><p><a href='#' style='color:black;'>odaberite drugi tip igre</a></p>");
			$(".disclaimer").hide();
		},

		hideModal: function () {
			this.$overlay.hide();
			this.$modal.hide();
		},

		reset: function () {
			stvori_karte();
			this.hideModal();
			this.shuffleCards(this.cardsArray);
			this.setup();
			this.$game.show("slow");
			pokusaj = 0;
			sec = 0;
			br = 1;
		},

		// Fisher--Yates Algorithm -- http://bost.ocks.org/mike/shuffle/
		shuffle: function (array) {
			var counter = array.length,
				temp, index;
			// While there are elements in the array
			while (counter > 0) {
				// Pick a random index
				index = Math.floor(Math.random() * counter);
				// Decrease counter by 1
				counter--;
				// And swap the last element with it
				temp = array[counter];
				array[counter] = array[index];
				array[index] = temp;
			}
			return array;
		},

		buildHTML: function () {
			var frag = '';
			br = 1;
			this.$cards.each(function (k, v) {
				frag += '<div class="card" data-id="' + v.id + '"><div class="inside">\
				<div class="front"><img src="' + v.img + '"\
				alt="' + v.name + '" /></div>\
				<div class="back"><p class="brojevi">' + br + '</p></div></div>\
				</div>';
				if (br < cards.length) {
					br++;
				};
			});
			return frag;
		}
	};
	var cards = []

	function stvori_karte() {
		cards = [{
				name: "Beramski (ljubljanski) misal",
				img: "slike/0.jpg",
				id: 1,
        }, {
				name: "Hrvojev misal",
				img: "slike/1.jpg",
				id: 2
        }, {
				name: "Ilustracija sv. Pavao iz Hrvojeva misala",
				img: "slike/2.jpg",
				id: 3
        }, {
				name: "Konavoski natpis",
				img: "slike/3.jpg",
				id: 4
        }, {
				name: "Kosinj, crkva sv. Vida",
				img: "slike/4.jpg",
				id: 5
        }, {
				name: "Medicejski brevijar",
				img: "slike/5.jpg",
				id: 6
        }, {
				name: "Plominski natips",
				img: "slike/6.jpg",
				id: 7
        }, {
				name: "Prvotisak",
				img: "slike/7.jpg",
				id: 8
        }, {
				name: "Riječki misal",
				img: "slike/8.jpg",
				id: 9
        }, {
				name: "Ročki glagoljski abecedarij",
				img: "slike/9.jpg",
				id: 10
        }, {
				name: "Ročki misal",
				img: "slike/10.jpg",
				id: 11
        }
    ];


		function shuffle(a) {
			var j, x, i;
			for (i = a.length; i; i--) {
				j = Math.floor(Math.random() * i);
				x = a[i - 1];
				a[i - 1] = a[j];
				a[j] = x;
			}
		}


		shuffle(cards);
		cards = cards.slice(1, 11);
		var brojKarata = cards.length;
		Memory.init(cards);

	}


	stvori_karte();

})();
