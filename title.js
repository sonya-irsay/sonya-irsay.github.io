document.getElementById("title").textContent = generateTitle();
// document.getElementById("subtitle").textContent = generateSubtitle();

// var myVar;
//
// function myFunction() {
//     myVar = setInterval(generateTitle, 3000);
// }
//
// function alertFunc() {
//     alert("Hello!");
// }

// function sayHi() {
//   alert('Hello');
// }
//
// setTimeout(sayHi, 1000);

// let timerId = setInterval(() => generateTitle, 1000);

function generateTitle() {
	var intro =
		[
			"Through",
			"In",
			"Within"
		];

	var primary_nouns =
		[
			"practice",
			"art practice",
			"art",
			"artwork",
			"work",
			"body of work",
			"art-making"
		];

	var verb =
		[
			"develops",
			"investigates",
			"explores",
			"deals with",
			"tries to understand",
			"aims to understand",
			"aims to explore",
			"focuses on",
			"expands on"
		];

	var secondary_nouns =
		[
			"the intersections of",
			"transformations of",
			"intersections between",
			"the interchange of",
			"the junction of",
			"play between",
			"the joining of",

			"the confluence of",
			"the opposition of",

			"the tension between"
		];

		var theme_one =
		[
			"space",
			"architecture",
			"lived space",
			"urban space",
			"vernacular",
			"protest",
			"the art world",
			"permanence",
			"public space",
			"private space",
			"power",
			"action",
			"ruins",
			"traces"
		];

		var theme_two =
		[
			"labour",
			"the everyday",
			"defiance",
			"transience",
			"permanence",
			"symbols",
			"monuments",
			"survival",
			"empowerment",
			"language",
			"mediation",
			"change",
			"technology",
			"digital tools",
			"homes",
			"memory",
			"territory",
			"territory"
		];

	var intro = _.sample(intro);
	var primary_noun = _.sample(primary_nouns);
	var verb = _.sample(verb);
	var secondary_noun = _.sample(secondary_nouns);
	var theme_one = _.sample(theme_one);
	var theme_two =_.sample(theme_two);

	var title = "";
	if (Math.random() < 0.5) {
		//title = name_prefix + " " + primary_noun + " and the " + adjective + " " + secondary_noun;
		title = intro + " her " + primary_noun + " Sanie Irsay " + verb + " " + secondary_noun + " " + theme_one + " and " + theme_two + ".";
	}
	else {
		// title = "The " + adjective + " " + secondary_noun + " of " + name_prefix + " " + primary_noun;
		title = intro + " her " + primary_noun + " Sanie Irsay " + verb + " " + secondary_noun + " " + theme_one + " and " + theme_two + ".";
	}

	return title;
}

setTimeout(function(){
   window.location.reload(1);
}, 5000);
