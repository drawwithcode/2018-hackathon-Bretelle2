var song;
var fft;
var button;
var w;
var nPunte = 6;

var strofa1 = ["Now", "the", "evening", "has", "come", "to", "a", "close", "And", "I've", "had", "my", "last", "dance", "with", "you", "So", "on", "to", "the", "empty", "streets", "we", "go", "And", "it", "might", "be", "my", "last", "chance", "with", "you", "So", "I", "might", "as", "well", "get", "it", "over", "with", "The",  "things", "I", "have", "to", "say",  "Won't",  "wait",   "until",    "another",     "day"]
var intermezzo = ["Shut", "up", "Whoooooo", "Whoooooo", "Whoooooo"]
var strofa2 = ["Check", "this", "out", "The", "Fabulous", "structure", "that's", "coaxed", "out", "of", "rubbles", "puddles", "splash", "Mechanisms", "burn", "with", "beeping", "sounds", "that", "own", "their", "humans", "sold", "as", "Ruthless", "rounds", "of", "radio", "dust, ", "Cranial", "mush, ", "men", "get", "flattened", "out", "Radials", "spun", "on", "dusted", "combatant", "joust", "After", "house", "of", "the", "dead", "heads", "fled, ", "it's", "just", "the", "city", "moans", "Malignant", "kid", "in", "it", "with", "sentence", "of", "sinister", "conferred", "Magna-funk", "asbestos, ", "the", "best", "at", "closed-quarters", "shit", "Some", "will", "gravitate", "to", "the", "falcon", "and", "burn", "in", "wordlessness", "Hangin'", "with", "the", "herd", "is", "my", "joy", "We", "buoy", "ordertake", "employ", "When", "the", "farmers", "feed", "the", "murder", "rate", "ploy", "We", "stow", "collected", "rebel", "factions", "in", "dirt", "and", "just", "follow", "The", "citizens", "all", "love", "to", "be", "loved, ", "we", "just", "follow", "Figure", "they", "ate", "the", "kids, ", "homey", "So", "fuck", "em", "save", "the", "adults", "Kids", "are", "patriotic, ", "robotic, ", "operate", "catapults", "And", "goose-step", "over", "innocence", "Vagrant", "of", "Reaganomics", "phasing", "Read", "the", "books", "that", "will", "burn", "at", "the", "barn", "raising", "(Independent", "like", "a", "fuck)", "(Oh, ", "Jesus)", "You", "misinterpreted", "that", "Funcrush", "shit", "So", "man, ", "funcrush", "this", "Spectacular", "dawning", "of", "the", "heardthinner", "faction", "where", "distraction", "is", "bliss", "Tyrell", "took", "a", "sabatical", "but", "back", "for", "the", "new", "semester", "(rockin", "that)", "Class", "action", "suit", "from", "the", "Laundromat", "of", "velour", "and", "pressed", "polyester", "American", "history", "exo-bytes", "cypher", "with", "the", "tainted", "offspring, ", "gimme", "nodos", "quick", "You", "need", "to", "haul", "that", "mega-dumb", "style", "to", "the", "antique", "roadshow, ", "bitch", "The", "system", "bleeds", "for", "the", "radio", "angry, ", "rock", "that", "wound", "aesthetic", "The", "name", "of", "this", "routine", "is", "live", "at", "man", "you", "just", "don't", "get", "it", "Please", "try", "to", "compartmentalize", "my", "dick", "With", "a", "little", "bit", "a", "that", "bitch", "hubris", "When", "the", "ritalin", "starts", "to", "fade", "I", "might", "get", "lucid", "Every", "mindfuck", "I", "handout", "comes", "with", "a", "free", "month", "of", "internet", "access", "And", "an", "updated", "year", "2003", "version", "of", "the", "mega", "clapper", "(you", "know", "the", "drill, ", "clap", "off)", "This", "is", "the", "third", "installment", "of", "a", "prequel", "that", "was", "never", "written", "right", "Filmed", "with", "that", "classic", "Brooklyn", "magic, ", "without", "Lucasarts", "graphics", "Rendered", "cuddly", "comic", "relief", "creatures", "or", "terrible", "child", "actors", "Get", "off", "that", "jade", "elephant, ", "you're", "stoned, ", "and", "remember", "everything", "backwards"]
function cambiaSong() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

function preload() {
  song = loadSound('01 Fantastic Damage.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // createCanvas(256, 256);
  colorMode(RGB);
  angleMode(DEGREES);
  button = createButton('play/stop');
  button.mousePressed(cambiaSong);
  song.play();
  fft = new p5.FFT(0.9, 128);
  w = width/64;
  frameRate(30);
}

function draw() {
  background(0);
  var spectrum = fft.analyze();
  noStroke();
  translate(width / 2, height / 2);
  fill(255, 255, 255, 0)
  stroke(255, 255, 255, 75)
  // text(frameCount, 0, 13)



if (frameCount<4000) {
  for (var i = 0; i < spectrum.length; i++) {
    var angle = map(i, 0, spectrum.length, 0, 360*nPunte);
    var amp = spectrum[i];
    var y = map (amp, 0, 256, height, 0);
    // rect(i*w, y, w, height - y);
    var r = map(amp, 0, 256, 0, 100);
    var x = r * cos(angle-frameCount/6);
    var y = r * sin(angle-frameCount/3);
    // stroke(i, 255, 255);
    line(0, 0, x, y);
    }
  }

  if (frameCount<4000) {
    for (var i = 0; i < spectrum.length; i++) {
      var angle = map(i, 0, spectrum.length, 0, 360*nPunte);
      var amp = spectrum[i];
      var y = map (amp, 0, 256, height, 0);
      // rect(i*w, y, w, height - y);
      var r = map(amp, 0, 256, 0, 100);
      var x = r * cos(angle-frameCount/6);
      var y = r * sin(angle-frameCount/3);
      // stroke(i, 255, 255);
      line(0, 0, x, y);
      }
    }

    stroke(255,85)
    for (var i = 0; i < spectrum.length; i++) {
      var angle = map(i, 0, spectrum.length, 0, 360*amp);
      var amp = spectrum[i];
      var y = map (amp, 0, 256, height, 0);
      // rect(i*w, y, w, height - y);
      var r = map(amp, 0, 256, 0, 100);
      var x = r * cos(angle);
      var y = r * sin(angle);
      // stroke(i, 255, 255);
      line(x*4, y*4, x*3.8, y*3.8);
      }
      //comparsa testo
      if (frameCount > 370 && frameCount < 480) {
      for (var i = 0; i < 8; i++) {
        text(strofa1[i], -width/2 + 13, (-height/2 + 13)+(13*i) )
      }
    }
      if (frameCount > 540 && frameCount < 580) {
      for (var i = 8; i < 16; i++) {
        text(strofa1[i], -width/2 + 13, (-height/2 + 13)+(13*(i-8)) )
      }
    }

    if (frameCount > 660 && frameCount < 700) {
    for (var i = 16; i < 24; i++) {
      text(strofa1[i], -width/2 + 13, (-height/2 + 13)+(13*(i-16)) )
    }
  }
    if (frameCount > 780 && frameCount < 820) {
    for (var i = 24; i < 33; i++) {
      text(strofa1[i], -width/2 + 13, (-height/2 + 13)+(13*(i-24)) )
    }
  }
    if (frameCount > 1020 && frameCount < 1060) {
    for (var i = 33; i < 43; i++) {
      text(strofa1[i], -width/2 + 13, (-height/2 + 13)+(13*(i-33)) )
    }
  }
    if (frameCount > 1200 && frameCount < 1240) {
    for (var i = 43; i < 50; i++) {
      text(strofa1[i], -width/2 + 13, (-height/2 + 13)+(13*(i-43)) )
    }
  }
    if (frameCount > 1290 && frameCount < 1320) {
    for (var i = 50; i < 56; i++) {
      text(strofa1[i], -width/2 + 13, (-height/2 + 13)+(13*(i-50)) )
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
