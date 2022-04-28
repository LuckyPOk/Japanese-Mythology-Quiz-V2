
let currentQuestion = 0;
let currentHint = 0;
let score = 0;
let hints = 0;
let maxHints = 3;
let timeleft = 10; // 10 second timer
let downloadTimer;
let questions = [
   {
	"question": "What is the name of this Yokai?",
	"a": "Kasha(火車)",
	"b": "Chōchinbi(提灯火)",
	"c": "Furaribi(ふらり火)",
	"d": "Onibi(鬼火)",
	"image":"quizimages/q1.jpg",
	"answer": "b",
	"hint":"The name is derived fom a Japanese paper lantern."
   },
   {
	"question": "What exactly is the story the mythical creature known as the Suzaku(朱雀)?",
	"a": "Suzaku is one of the shijin, or Four Symbols, which are important mythological figures in Taoism.",
	"b": "Suzaku originated from Chinese mythology, and with two birds (Male and Female), they represent the duality of the universe.",
	"c": "Suzaku are very simply the Japanese interpretation of the pheonix.",
	"d": "Suzaku are just firey birds. No much else to say.",
	"image":"quizimages/q2.png",
	"answer": "a",
	"hint":"There is only one Suzaku."
   },
   {
	"question": "What is the name of this famous Kitsune?",
	"a": "Saburoumaru Gitsune (三郎丸狐)",
	"b": "Osaki Gitsune(オサキ狐)",
	"c": "Denpachi Gitsune (伝八狐)",
	"d": "Gonpachi Gitsune (権八狐)",
	"image":"quizimages/q3.jpg",
	"answer": "c",
	"hint":"Has 'Hachi' in his name."
   },
   {
	"question": "What exactly is the story the mythical creature known as the Baku (獏)?",
	"a": "It keeps people safe by fighting off evil spirits and yokai.",
	"b": "It is a highly vicious monster that attacks humans.",
	"c": "It is a harmless creature that sometimes plays tricks on humans.",
	"d": "It feeds on the bad dreams of humans, bringing good luck and health.",
	"image":"quizimages/q4.jpg",
	"answer": "d",
	"hint":"This creature is considered 'Good'."
   },
   {
	"question": "What real life animal is the Yokai Mujina (貉)?",
	"a": "A Racoon.",
	"b": "A Ferret.",
	"c": "A Badger.",
	"d": "A Fox.",
	"image":"quizimages/q5.jpg",
	"answer": "c",
	"hint":"Gets mixed up in some regions with Racoons."
   },
   {
	"question": "What is the name of this mythical creature?",
	"a": "Hōō (鳳凰)",
	"b": "Gumyōchō (共命鳥)",
	"c": "Aosagibi (青鷺火)",
	"d": "Basan (波山)",
	"image":"quizimages/q6.png",
	"answer": "b",
	"hint":"It's name means 'Interconnected lives' in Japanese."
   },
    {
	"question": "What is the role of Enma Daiō (閻魔大王) in the afterlife?",
	"a": "To judge the souls of the newly dead, sending them to their next location based on their life.",
	"b": "To inflict punishment upon those who fell to Jigoku (Hell) for the crimes or evil deeds hey have commited.",
	"c": "To guard the gates of Jigoku (Hell), not letting anyone ut until their punishment has been dealt.",
	"d": "To test the newly dead as they pass through Meido (冥途) , where they are judged fro all the good and evil they commited in their lives.",
	"image":"quizimages/q7.png",
	"answer": "a",
	"hint":"'Daiō' means 'Great King'."
   },
   {
	"question": "What is the phrase that is said to stop the effects of the Yokai Betobetosan (べとべとさん)?",
	"a": "See you later, Betobetosan!",
	"b": "Care to join me for a walk, Betobetosan?",
	"c": "On your left, Betobetosan.",
	"d": "After you, Betobetosan.",
	"image":"quizimages/q8.jpg",
	"answer": "d",
	"hint":"You don't want to encourage it to stay."
   },
   {
	"question": "What is the mythical creature Kotobuki (寿) a combination of?",
	"a": "Animals thought to bring good luck in Japan.",
	"b": "The 12 animals from the Chinese zodiac.",
	"c": "Similar to a chimera; some random animals.",
	"d": "A set of animals transported from outside Japan.",
	"image":"quizimages/q9.png",
	"answer": "b",
	"hint":"What is combined do have significance."
   },
   {
	"question": "What tree type is the spirit Bake ichō no sei (化け銀杏の精) a spirit of?",
	"a": "Ginkgo trees.",
	"b": "River Birch trees.",
	"c": "Sugar Maple trees.",
	"d": "Quaking Aspen trees.",
	"image":"quizimages/q10.jpg",
	"answer": "a",
	"hint":"The tree has interesting shaped leafs."
   }
 ];
 

 
window.onload = function () {
	 document.getElementById("score").innerHTML = score + " / " + questions.length;
	 loadQuestion();
	 
	  // call the annonymous function every 1000 ms or 1 second
	  downloadTimer = setInterval(timer, 1000);
	 
	 
	 
 };
 
 
 let timer = function(){
	  
		  // update display
		  document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
		  timeleft -= 1;  // decrement time left
		  
		  // if time runs out, end timer
		  if(timeleft <= 0){
			clearInterval(downloadTimer);
			document.getElementById("countdown").innerHTML = "Finished";
			message = "You ran out of time!";
			document.getElementById("lightbox").style.display = "block";
			document.getElementById("message").innerHTML = message;
			currentQuestion++;
	  }
	};
 
 let getHintF = function() {
	  document.getElementById("hintButton").onclick = null;
	 if (hints < maxHints) {
		 let currentHint = questions[currentQuestion].hint;
		 document.getElementById("hint").innerHTML = currentHint;
		 hints++;
	 } else {
		 let currentHint = "You have no more hints left.";
		 document.getElementById("hint").innerHTML = currentHint;
	 }
 };
 
 function loadQuestion() {
     
    // close light box for first question
    if (currentQuestion == 0) {
       document.getElementById("lightbox").style.display = "none";
    }
     
    // load the image
    let img = document.getElementById("image");
    img.src = questions[currentQuestion].image;
    img.style.maxWidth = "70vh";
	img.style.maxHeight = "80vh";
    
    // load the question and answers
    document.getElementById("question").innerHTML = questions[currentQuestion].question;
    document.getElementById("a").innerHTML = "A. " + questions[currentQuestion].a;
    document.getElementById("b").innerHTML = "B. " + questions[currentQuestion].b;
    document.getElementById("c").innerHTML = "C. " + questions[currentQuestion].c;
    document.getElementById("d").innerHTML = "D. " + questions[currentQuestion].d;
	
	document.getElementById("hintButton").onclick = getHintF;
	
 } // loadQuestion
 
 
 function markIt(ans) {
     
    let message = "";
    clearInterval(downloadTimer);
    if (ans == questions[currentQuestion].answer) {
        
       // add 1 to score
       score++;
       
       // display score 
       document.getElementById("score").innerHTML = score + " / " + questions.length;
       
	   if (currentQuestion == 0){
		   message = "Correct! Your score is " + score + " / " + questions.length + ". The Chōchinbi got it's from a Chōchin, a hand held paper lantern. They are generally said to be the work of other Yokai, being used to light the way at night.";
	   } else if (currentQuestion == 1) {
		   message = "Correct! Your score is " + score + " / " + questions.length + ". Suzaku is one of the Shijin alongside Seiyuu (青竜), Genbu (玄武), and Byakko (白虎).";
	   } else if (currentQuestion == 2) {
		   message = "Correct! Your score is " + score + " / " + questions.length + ". Denpachi was famous for being one of the best and hardest working students in a buddhist temple in the Chiba prefecture.";
	   }else if (currentQuestion == 3) {
		   message = "Correct! Your score is " + score + " / " + questions.length + ". As well as getting rid of the bad dreams people have, the Baku is said to bring good luck and health to people just with it's presence, driving evil spirits and Yokai away.";
	   }else if (currentQuestion == 4) {
		  message = "Correct! Your score is " + score + " / " + questions.length + ". Mujina are one of the less famous shape-shifting Yokai in Japan, alongside Tanukis (Racoons) and Kitsunes (Foxes)."; 
	   }else if (currentQuestion == 5) {
		  message = "Correct! Your score is " + score + " / " + questions.length + ". Gumyōchō is a two headed bird from Buddhist cosmology, and represent interconnectedness; one of the core Buddhist tenets."; 
	   }else if (currentQuestion == 6) {
		  message = "Correct! Your score is " + score + " / " + questions.length + ". Despite his role and appearance, he is said to be kind and compassionate, wishing to save every soul from damnation."; 
	   }else if (currentQuestion == 7) {
		  message = "Correct! Your score is " + score + " / " + questions.length + ". This Yokai can be intimidating with its invisible footstep sounds from behind you, but has no actual harm."; 
	   }else if (currentQuestion == 8) {
		  message = "Correct! Your score is " + score + " / " + questions.length + ". Although not much is known about the creature, it is said that a mere image of it is enough to protect someone from sickness and disease."; 
	   }
    } else if (currentQuestion == 0 && score == 0) {
		message = "Incorrect... Your score is " + score + " / " + questions.length + ". The correct answer is B, Chōchinbi(提灯火)."; 
	}else if (currentQuestion == 1 && score <= 1) {
		message = "Incorrect... Your score is " + score + " / " + questions.length + ". The correct answer is A, One of the Shijin."; 
	}else if (currentQuestion == 2 && score <= 2) {
		message = "Incorrect... Your score is " + score + " / " + questions.length + ". The correct answer is C, Denpachi Gitsune (伝八狐)."; 
	}else if (currentQuestion == 3 && score <= 3) {
		message = "Incorrect... Your score is " + score + " / " + questions.length + ". The correct answer is D, It feeds on bad dreams."; 
	}else if (currentQuestion == 4 && score <= 4) {
		message = "Incorrect... Your score is " + score + " / " + questions.length + ". The correct answer is C, A Badger."; 
	}else if (currentQuestion == 5 && score <= 5) {
		message = "Incorrect... Your score is " + score + " / " + questions.length + ". The correct answer is B, Gumyōchō."; 
	}else if (currentQuestion == 6 && score <= 6) {
		message = "Incorrect... Your score is " + score + " / " + questions.length + ". The correct answer is A, To judge the souls of the newly dead."; 
	}else if (currentQuestion == 7 && score <= 7) {
		message = "Incorrect... Your score is " + score + " / " + questions.length + ". The correct answer is D, To judge the souls of the newly dead."; 
	}else if (currentQuestion == 8 && score <= 8) {
		message = "Incorrect... Your score is " + score + " / " + questions.length + ". The correct answer is B, The 12 animals from the Chinese zodiac."; 
	}else {
       message = "Incorrect :< Your score is " + score + " / " + questions.length; 
    } // else
		
	
  
 
    
    // move to the next question
	currentQuestion++;
	document.getElementById("hint").innerHTML = "You have used " + hints + " / " + maxHints + " hints.";
	
    if (currentQuestion >= questions.length) {
       // create a special message
       message = "The answer to the final question was A, Ginkgo trees. Your final score is " + score + " / " + questions.length + ", with an accuracy of " + ((score / questions.length) * 100) + "%. You used a total of " + hints + " / " + maxHints + " hints.";
    } else {
       loadQuestion();
    }
    
    // show the lightbox
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("message").innerHTML = message;
  
 }  // markIt
 
 function closeLightBox() {
    document.getElementById("lightbox").style.display = "none";
	loadQuestion();
	timeleft = 10;
	downloadTimer = setInterval(timer, 1000);
 } // closeLightbox
 
 if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}