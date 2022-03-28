var pos = 0, quest, title, question, choice, choices, chA, chB, chC, chD, correct = 0;
var questions = [
     ["En combien de temps la Terre fait-elle le tour du soleil ?","24h","4 mois","1 an","Le temps de jouer à notre jeu","C"],
			["Comment s'appelle l’explosion par laquelle a commencé l'univers ?","Le Bang-Bang","Le Big-Bang","Le Bling-Bling","Le Gucci-Gang","B"],
			["A quelle date Spoutnik a été envoyé dans l’espace ?","1957","1967","1890","1977","A",],
			["Le soleil est ...","une lune","une planète","une étoile","un satellite naturel","C"],
			["Quel soleil est le plus chaud entre toutes les propositions ? Un soleil ...","jaune","blanc","rouge","bleu","D"],
			["Combien de temps met la lumière du soleil à nous parvenir ?","8 secondes","8 heures","8 minutes","8 jours","C"],
			["Quelle est la vitesse de la lumière ?","Environ 300 km/sec","Environ 300 000 km/sec","Environ 3 km/sec","Sa vitesse est infinie","B"],
			["Quelle est la plus grosse planète du système solaire ?","Terre","Saturne","Jupiter","Pluton","C"],
			["L'Année-Lumière sert à mesurer :","Le temps","La distance","La vitesse","La lumière","B"],
			["Quelle planète est la plus proche de la Terre ?","Vénus","Mars","La lune","Pandora","A"],
			["Qu-est-ce qu'est la Voie Lactée ?","Le nom de notre système solaire","Notre univers","Notre galaxie","Le dessert de demain à la cantine","C"],
			["Combien de planètes compte la Voie lactée ?","7","6","8","Des milliards et de milliards de planètes","D"],
			["Qu'est-ce qu'est une exoplanète ?","Une planète exotique","Une planète orbitant autour d'une étoile autre que le Soleil","une planète artificielle","Ça n'existe pas","B"],
			["Quel objet n'est pas à l'origine d'une innovation pour la conquête spaciale ?","Les satellites","Les semelles pour chaussures","Les matériaux à mémoire de forme","Les cours en télé-travail","D"],
			["Qu'est-ce-qu'un trou de ver ?(en astrophysique)","un raccourci à travers l'espace-temps","un composant d'un satellite","une constante mathématique","un ver qui mange des planètes","A"],
			["Que va-t-il se passer en 2061 ?","L'être humain va mettre le pied sur Mars","Notre galaxie va entrer en collision avec la galaxie d'Andromède","La comète de Halley va faire son apparition","ON VA TOUS MOURIR par un astéroïde !","C"],
			["En quelle année la première fusée a-t-elle décollé du sol ?","En 1945","En 1926","En 1957","C'est quoi déjà une fusée ?","B"],
			["Qu'est-ce qu'une astromobile ?","C'est un petit robot qui se déplace sur une autre surface que la surface terrestre","C'est la prochaine génération de navettes spaciales","C'est une voiture volante","Une quoi ? Non, ça n'existe pas","A"],
			["Quelle navette spatiale a envoyé le module Columbus à bord de la station spatiale internationale ?","Endeavour","Moonraker","Atlantis","Enterprise","C"],
			["(Bonus) Entre ces films, lequel ne comporte pas de voyages spatiaux :","Avatar","Avengers EndGame","Star Wars","E.T, l'extraterrestre","D"]
		];
		function _(x){
	return document.getElementById(x);
}
function renderQuestion(){
	quest = _("quest");
	if(pos >= questions.length){
		quest.innerHTML = "<h2>Tu as "+correct+" réponse(s) correcte(s) pour "+questions.length+" questions </h2>";
		_("title").innerHTML = "FIN DE QUIZZ";
		pos = 0;
		correct = 0;
		return false;
	}
	_("title").innerHTML = "Question "+(pos+1)+" sur "+questions.length;
	question = questions[pos][0];
	chA = questions[pos][1];
	chB = questions[pos][2];
	chC = questions[pos][3];
	chD = questions[pos][4];
	quest.innerHTML = "<h3>"+question+"</h3>";
	quest.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
	quest.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
	quest.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br>";
	quest.innerHTML += "<input type='radio' name='choices' value='D'> "+chD+"<br><br>";
	quest.innerHTML += "<button onclick='checkAnswer()'>Suivant </button>";
}
function checkAnswer(){
	choices = document.getElementsByName("choices");
	for(var i=0; i<choices.length; i++){
		if(choices[i].checked){
			choice = choices[i].value;
		}
	}
	if(choice == questions[pos][5]){
		correct++;
	}
	pos++;
	renderQuestion();
}
window.addEventListener("load", renderQuestion, false);