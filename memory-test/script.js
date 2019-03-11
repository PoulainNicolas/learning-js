
	// !!!ça ne fonctionne pas quand je crée un fichier script.js et que je mets le lien dans le head!!!
	// ça marche si je mets le lien dans body!!
// déclarations de variables "publiques" car le code doit mémoriser un tas de choses durant la partie

// variable qui compte le nombre de clics du joueur, initialisée à 0 et remise à 0 après 2 clics
let nb_clics = 0;

// variables qui doivent retenir le nom des 2 images cliquées
let mini1 = ''; 
let mini2='';

// variables pour s'assurer que le joueur ne clique pas 2 fois sur la meme case
let case1 = ''; 
let case2='';


let img_ok = 0; 
let nb_erreurs=0;
let le_score=0;
let depart = false; 
let temps_debut = new Date().getTime();
	
	// fonction qui génère les positions aléatoires des images, appelée directement
	
	generation();


let attente = setTimeout(function(){
	for (let i=0;i<12;i++){
	
document.getElementById('img' + i).src = 'mini/miniz.jpg';

}
depart = true;
},4000);
	
	function generation()
	{
		
		let nb_alea; 
		let nb_img="";
		let test = true; 
		let chaine = "";
		
		// boucle pour générer 12 positions différentes
		for (let i=0;i<12;i++)
		{
			while (test==true)
			{
				nb_alea = Math.floor(Math.random()*12) + 1; 
				if(chaine.indexOf("-" + nb_alea + "-")>-1)
					nb_alea = Math.floor(Math.random()*12) + 1;
				else
				{
					nb_img = Math.floor((nb_alea+1)/2); //6 paires pour 12 places ==> 2 générations différentes par image

					// la fonction génération crée les balises img avec un id img+i
					// + gestionnaire d'événement 'onclick' pour vérifier les 2 images cliquées
					document.getElementById('case' + i).innerHTML = "<img style='cursor:pointer;' id='img" + i + "' src='mini/mini" + nb_img + ".jpg' onClick='verifier(\"img" + i + "\", \"mini" + nb_img + "\")' alt='' />";
					chaine += "-" + nb_alea + "-";
					// taille photo
					document.getElementById('img' + i).style.width = '150px';
					document.getElementById('img' + i).style.height = '150px';
					test=false;
				}	
						
			}
			test=true;			
		}
		
	}
// créer la fonction vérifier pour savoir si les 2 images correspondent
// lui donner 2 arguments: la source de l'image pour avoir si c'est la meme et aussi 
// la case pour etre sur que le joueur n'a pas cliqué 2 fois sur la meme case

	function verifier(limg, source){
		// départ= true cad les images sont bien masquées au bout de 4 sec => le jeu peut commencer

		if(depart==true){
			// compter le nombre de clic
			// si 2 clics=> comparer

			nb_clics++;

			// afficher les images cliquées
			document.getElementById(limg).src = "mini/" + source + ".jpg";

			// si le joueur fait son 1er clic
			if(nb_clics==1){
				// mémoriser le nom de l'image et la case
				mini1 = source;
				case1 = limg;

			}
			// si ce n'est pas le 1er clic=> le 2eme
			
			else{

				// je mémorise aussi l'image et la case cliquée
				mini2 = source;
				case2  =limg;

				// puis je fais un autre test
				// s'assurer que le joueur n'a pas cliqué 2 fois sur la meme case
				if(case1 != case2){
					// laisser les images affichées au moins 4 sec que le joueur puise mémoriser
					// on ne peut pas cliquer pdt ce temps
					depart = false;
					// si les 2 images sont différentes
					if(mini1 != mini2){
						// laisser les images visibles 1 seconde puis les retourner
							let attente = setTimeout(function(){
							document.getElementById(case1).src = 'mini/miniz.jpg';
							document.getElementById(case2).src = 'mini/miniz.jpg';

							// dès que les images sont masquées on peut rejouer
							depart=true;

							// réinitialiser le compteur clic a 0
							nb_clics=0;

							// incrémenter le nombre d'erreur d'une unité
							nb_erreurs ++;

							// si le nombre d'erreur est plus petit que 11
							// on ne veut pas de score négatif => si en-dessous de 0 on laisse 0
							if(nb_erreurs<11)
								// une seule action => inutilse de borner avec {}
								// le score sur 10 = 10 - le nombre d'erreurs commises
								le_score=10 - nb_erreurs;
								document.getElementById('score').innerHTML = 'Ton score: '+ le_score + '/10';
							

						},1500)
					}
					// sinon cad si les images correspondent
					else{

						// les images restent affichées et on peut rejouer
						depart = true;

						// on réinitialise le nombre de clics à 0
						nb_clics = 0;

						// on incrément de 2 (1 paire) le nombre d'images trouvées 
						img_ok +=2;

						// si nombre d'images trouvées est de 12 alors partie gagnée
						if(img_ok == 12){

							// voir le temps qu'il est et calculer le temps qui s'est écoulé depuis le début de la partie
							// nouvelle variable dif_temps
							// utilisation de la méthode fllor pour arrondir diviser par mille car millisecondes
							let dif_temps = Math.floor((new Date().getTime() - temps_debut)/1000);
							document.getElementById('score').innerHTML ='<strong>' + le_score + '</strong>/10';
							document.getElementById('temps').innerHTML = 'Vous avez mis<strong>' +" " + dif_temps + '</strong> secondes';
						}
						
					}

				}
				// si le joueur clique 2 fois sur la meme case
				else{
					// si nbclics = 2 (ce qui est forcément le cas) alors je ne prends pas en compte le clic et réinitialise à 1
					if(nb_clics==2) nb_clics=1;
				}
				
			}
		}
	}
	