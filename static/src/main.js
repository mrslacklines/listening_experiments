const NATURAL_AUDIO_URL_BASE = "https://f0-naturalness-evaluation-set.s3.eu-central-1.amazonaws.com/natural/";
const SYNTHETIC_AUDIO_URL_BASE = "https://f0-naturalness-evaluation-set.s3.eu-central-1.amazonaws.com/synthetic_interpolated/";
const AUDIO_FILENAMES = [
  "amu_pl_ilo_BAZA_2006A_zbitki_A0025",
  "amu_pl_ilo_BAZA_2006A_zbitki_A0036",
  "amu_pl_ilo_BAZA_2006A_zbitki_A0048",
  "amu_pl_ilo_BAZA_2006A_zbitki_A0050",
  "amu_pl_ilo_BAZA_2006A_zbitki_A0104",
  "amu_pl_ilo_BAZA_2006A_zbitki_A0106",
  "amu_pl_ilo_BAZA_2006A_zbitki_A0107",
  "amu_pl_ilo_BAZA_2006A_zbitki_A0115",
  "amu_pl_ilo_BAZA_2006A_zbitki_A0119",
  "amu_pl_ilo_BAZA_2006A_zbitki_A0121",
  "amu_pl_ilo_BAZA_2006A_zbitki_A0135",
  "amu_pl_ilo_BAZA_2006A_zbitki_A0136",
  "amu_pl_ilo_BAZA_2006A_zbitki_A0139",
  "amu_pl_ilo_BAZA_2006A_zbitki_A0141",
  "amu_pl_ilo_BAZA_2006A_zbitki_A0151",
  "amu_pl_ilo_BAZA_2006A_zbitki_A0153",
  "amu_pl_ilo_BAZA_2006A_zbitki_A0166",
  "amu_pl_ilo_BAZA_2006A_zbitki_A0173",
  "amu_pl_ilo_BAZA_2006A_zbitki_A0174",
  "amu_pl_ilo_BAZA_2006A_zbitki_A0194",
  "amu_pl_ilo_BAZA_2006A_zbitki_A0198",
  "amu_pl_ilo_BAZA_2006A_zbitki_A0203",
  "amu_pl_ilo_BAZA_2006A_zbitki_A0213",
  "amu_pl_ilo_BAZA_2006A_zbitki_A0244",
  "amu_pl_ilo_BAZA_2006A_zbitki_A0248",
  "amu_pl_ilo_BAZA_2006A_zbitki_A0249",
  "amu_pl_ilo_BAZA_2006A_zbitki_A0263",
  "amu_pl_ilo_BAZA_2006A_zbitki_A0300",
  "amu_pl_ilo_BAZA_2006A_zbitki_A0326",
  "amu_pl_ilo_BAZA_2006A_zbitki_A0327",
  "amu_pl_ilo_BAZA_2006A_zbitki_A0342",
  "amu_pl_ilo_BAZA_2006A_zbitki_A0353",
  "amu_pl_ilo_BAZA_2006A_zbitki_A0360",
  "amu_pl_ilo_BAZA_2006B_B0015",
  "amu_pl_ilo_BAZA_2006B_B0025",
  "amu_pl_ilo_BAZA_2006B_B0031",
  "amu_pl_ilo_BAZA_2006B_B0032",
  "amu_pl_ilo_BAZA_2006B_B0049",
  "amu_pl_ilo_BAZA_2006B_B0061",
  "amu_pl_ilo_BAZA_2006B_B0072",
  "amu_pl_ilo_BAZA_2006B_B0088",
  "amu_pl_ilo_BAZA_2006B_B0108",
  "amu_pl_ilo_BAZA_2006C_C0003",
  "amu_pl_ilo_BAZA_2006C_C0009",
  "amu_pl_ilo_BAZA_2006C_C0015",
  "amu_pl_ilo_BAZA_2006C_C0023",
  "amu_pl_ilo_BAZA_2006C_C0051",
  "amu_pl_ilo_BAZA_2006C_C0059",
  "amu_pl_ilo_BAZA_2006C_C0083",
  "amu_pl_ilo_BAZA_2006C_C0089",
  "amu_pl_ilo_BAZA_2006C_C0092",
  "amu_pl_ilo_BAZA_2006C_C0097",
  "amu_pl_ilo_BAZA_2006C_C0110",
  "amu_pl_ilo_BAZA_2006C_C0142",
  "amu_pl_ilo_BAZA_2006C_C0143",
  "amu_pl_ilo_BAZA_2006C_C0149",
  "amu_pl_ilo_BAZA_2006C_C0160",
  "amu_pl_ilo_BAZA_2006C_C0162",
  "amu_pl_ilo_BAZA_2006C_C0171",
  "amu_pl_ilo_BAZA_2006C_C0173",
  "amu_pl_ilo_BAZA_2006C_C0183",
  "amu_pl_ilo_BAZA_2006C_C0184",
  "amu_pl_ilo_BAZA_2006C_C0189",
  "amu_pl_ilo_BAZA_2006C_C0206",
  "amu_pl_ilo_BAZA_2006C_C0208",
  "amu_pl_ilo_BAZA_2006C_C0214",
  "amu_pl_ilo_BAZA_2006C_C0216",
  "amu_pl_ilo_BAZA_2006C_C0221",
  "amu_pl_ilo_BAZA_2006C_C0225",
  "amu_pl_ilo_BAZA_2006C_C0233",
  "amu_pl_ilo_BAZA_2006C_C0234",
  "amu_pl_ilo_BAZA_2006C_C0246",
  "amu_pl_ilo_BAZA_2006C_C0247",
  "amu_pl_ilo_BAZA_2006C_C0256",
  "amu_pl_ilo_BAZA_2006C_C0258",
  "amu_pl_ilo_BAZA_2006C_C0261",
  "amu_pl_ilo_BAZA_2006C_C0268",
  "amu_pl_ilo_BAZA_2006C_C0271",
  "amu_pl_ilo_BAZA_2006C_C0278",
  "amu_pl_ilo_BAZA_2006C_C0281",
  "amu_pl_ilo_BAZA_2006C_C0286",
  "amu_pl_ilo_BAZA_2006C_C0294",
  "amu_pl_ilo_BAZA_2006C_C0306",
  "amu_pl_ilo_BAZA_2006C_C0311",
  "amu_pl_ilo_BAZA_2006C_C0313",
  "amu_pl_ilo_BAZA_2006C_C0316",
  "amu_pl_ilo_BAZA_2006C_C0319",
  "amu_pl_ilo_BAZA_2006C_C0359",
  "amu_pl_ilo_BAZA_2006C_C0362",
  "amu_pl_ilo_BAZA_2006C_C0380",
  "amu_pl_ilo_BAZA_2006C_C0390",
  "amu_pl_ilo_BAZA_2006C_C0393",
  "amu_pl_ilo_BAZA_2006C_C0401",
  "amu_pl_ilo_BAZA_2006C_C0411",
  "amu_pl_ilo_BAZA_2006C_C0420",
  "amu_pl_ilo_BAZA_2006C_C0423",
  "amu_pl_ilo_BAZA_2006C_C0432",
  "amu_pl_ilo_BAZA_2006C_C0434",
  "amu_pl_ilo_BAZA_2006C_C0441",
  "amu_pl_ilo_BAZA_2006C_C0452",
  "amu_pl_ilo_BAZA_2006C_C0464",
  "amu_pl_ilo_BAZA_2006C_C0469",
  "amu_pl_ilo_BAZA_2006C_C0479",
  "amu_pl_ilo_BAZA_2006C_C0496",
  "amu_pl_ilo_BAZA_2006C_C0500",
  "amu_pl_ilo_BAZA_2006C_C0519",
  "amu_pl_ilo_BAZA_2006C_C0536",
  "amu_pl_ilo_BAZA_2006C_C0545",
  "amu_pl_ilo_BAZA_2006C_C0551",
  "amu_pl_ilo_BAZA_2006C_C0567",
  "amu_pl_ilo_BAZA_2006C_C0568",
  "amu_pl_ilo_BAZA_2006C_C0574",
  "amu_pl_ilo_BAZA_2006C_C0575",
  "amu_pl_ilo_BAZA_2006C_C0580",
  "amu_pl_ilo_BAZA_2006C_C0604",
  "amu_pl_ilo_BAZA_2006C_C0608",
  "amu_pl_ilo_BAZA_2006C_C0610",
  "amu_pl_ilo_BAZA_2006C_C0631",
  "amu_pl_ilo_BAZA_2006C_C0635",
  "amu_pl_ilo_BAZA_2006C_C0637",
  "amu_pl_ilo_BAZA_2006C_C0659",
  "amu_pl_ilo_BAZA_2006C_C0671",
  "amu_pl_ilo_BAZA_2006D_D0005",
  "amu_pl_ilo_BAZA_2006D_D0007",
  "amu_pl_ilo_BAZA_2006D_D0021",
  "amu_pl_ilo_BAZA_2006D_D0023",
  "amu_pl_ilo_BAZA_2006D_D0051",
  "amu_pl_ilo_BAZA_2006D_D0056",
  "amu_pl_ilo_BAZA_2006D_D0069",
  "amu_pl_ilo_BAZA_2006D_D0090a",
  "amu_pl_ilo_BAZA_2006D_D0091",
  "amu_pl_ilo_BAZA_2006D_D0096",
  "amu_pl_ilo_BAZA_2006D_D0098a",
  "amu_pl_ilo_BAZA_2006D_D0100",
  "amu_pl_ilo_BAZA_2006D_D0122b",
  "amu_pl_ilo_BAZA_2006D_D1029",
  "amu_pl_ilo_BAZA_2006D_D1042",
  "amu_pl_ilo_BAZA_2006D_D1063",
  "amu_pl_ilo_BAZA_2006D_D1075",
  "amu_pl_ilo_BAZA_2006D_D1096",
  "amu_pl_ilo_BAZA_2006D_D1118",
  "amu_pl_ilo_BAZA_2006D_D1136",
  "amu_pl_ilo_BAZA_2006D_D1140",
  "amu_pl_ilo_BAZA_2006D_D1142a",
  "amu_pl_ilo_BAZA_2006D_D1147",
  "amu_pl_ilo_BAZA_2006D_D1158",
  "amu_pl_ilo_BAZA_2006D_D1164",
  "amu_pl_ilo_BAZA_2006D_D1165",
  "amu_pl_ilo_BAZA_2006E_E0860",
  "amu_pl_ilo_BAZA_2006E_E0890",
  "amu_pl_ilo_BAZA_2006E_E0920",
  "amu_pl_ilo_BAZA_2006E_E0948",
  "amu_pl_ilo_BAZA_2006E_E0951",
  "amu_pl_ilo_BAZA_2006E_E0961",
  "amu_pl_ilo_BAZA_2006E_E0968",
  "amu_pl_ilo_BAZA_2006E_E0978b",
  "amu_pl_ilo_BAZA_2006E_E0985",
  "amu_pl_ilo_BAZA_2006E_E0996",
  "amu_pl_ilo_BAZA_2006E_E1005",
  "amu_pl_ilo_BAZA_2006E_E1014",
  "amu_pl_ilo_BAZA_2006E_E1023",
  "amu_pl_ilo_BAZA_2006E_E1031",
  "amu_pl_ilo_BAZA_2006E_E1044",
  "amu_pl_ilo_BAZA_2006E_E1047",
  "amu_pl_ilo_BAZA_2006E_E1070",
  "amu_pl_ilo_BAZA_2006E_E1088",
  "amu_pl_ilo_BAZA_2006E_E1128",
  "amu_pl_ilo_BAZA_2006E_E1132",
  "amu_pl_ilo_BAZA_2006E_E1138",
  "amu_pl_ilo_BAZA_2006E_E1144",
  "amu_pl_ilo_BAZA_2006E_E1149",
  "amu_pl_ilo_BAZA_2006E_E1158",
  "amu_pl_ilo_BAZA_2006E_E1166",
  "amu_pl_ilo_BAZA_2006E_E1179a",
  "amu_pl_ilo_BAZA_2006E_E1186",
  "amu_pl_ilo_BAZA_2006E_E1211",
  "amu_pl_ilo_BAZA_2006E_E1227",
  "amu_pl_ilo_BAZA_2006E_E1237",
  "amu_pl_ilo_BAZA_2006E_E1244",
  "amu_pl_ilo_BAZA_2006E_E1248",
  "amu_pl_ilo_BAZA_2006E_E1278",
  "amu_pl_ilo_BAZA_2006E_E1304",
  "amu_pl_ilo_BAZA_2006E_E1333",
  "amu_pl_ilo_BAZA_2006E_E1334",
  "amu_pl_ilo_BAZA_2006E_E1338",
  "amu_pl_ilo_BAZA_2006E_E1340",
  "amu_pl_ilo_BAZA_2006E_E1341",
  "amu_pl_ilo_BAZA_2006E_E1360",
  "amu_pl_ilo_BAZA_2006E_E1388",
  "amu_pl_ilo_BAZA_2006E_E1396",
  "amu_pl_ilo_BAZA_2006E_E1400"
];

function saveData() {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'save-results');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function() {
    if(xhr.status == 200){
      var response = JSON.parse(xhr.responseText);
    }
  };
  xhr.send(jsPsych.data.get().json());
}

function transformListOfFilenamesToPaths(fileNames, dir) {
  for (var i = 0; i < fileNames.length; i++) {
    fileNames[i] = dir +fileNames[i] + ".wav";
  }
  return fileNames
}

function getMOSTestAudioList(fileNames, naturalFilesDir, syntheticFilesDir) {
  var naturalRandomSample = jsPsych.randomization.sampleWithoutReplacement(fileNames, 1);
  var syntheticRandomSample = jsPsych.randomization.sampleWithoutReplacement(fileNames, 1);

  var testList = [];

  testList.push(...transformListOfFilenamesToPaths(naturalRandomSample, naturalFilesDir));
  testList.push(...transformListOfFilenamesToPaths(syntheticRandomSample, syntheticFilesDir));

  // jsPsych does the following for us and we define the randomization through the test procedure object
  // return jsPsych.randomization.shuffle(testList);
  return testList
}

function audioListToMOSStimuli(audioList) {
  var stimuli = [];
  for (var i = 0; i < audioList.length; i++) {
     stimuli.push({ stimulus: audioList[i] });
  }
  return stimuli
}

function getABXStimuli(fileNames, naturalFilesDir, syntheticFilesDir) {
  var randomSamples = jsPsych.randomization.sampleWithoutReplacement(fileNames, 1);

  var stimuli = []
  var audioTestSet = []

  for (var i = 0; i < randomSamples.length; i++) {
    sounds = jsPsych.randomization.shuffle([
      naturalFilesDir + randomSamples[i] + ".wav",
      syntheticFilesDir + randomSamples[i] + ".wav"
    ])
    audioTestSet.push(...sounds)
    stimuli.push(
      {
        sound_A: sounds[0],
        sound_B: sounds[1],
        sound_X: jsPsych.randomization.sampleWithoutReplacement(sounds, 1)[0],
      }
    );
  }

  return [stimuli, audioTestSet]
}

function getMOSTestAudioListFromStimuli(stimuliList) {

}

// =====================
// EXPERIMENT DEFINITION
// =====================

var MOSAudioTestSet = getMOSTestAudioList(AUDIO_FILENAMES, NATURAL_AUDIO_URL_BASE, SYNTHETIC_AUDIO_URL_BASE);
var MOSStimuliList = audioListToMOSStimuli(MOSAudioTestSet);
var [ABXStimuliList, ABXAudioTestSet] = getABXStimuli(AUDIO_FILENAMES, NATURAL_AUDIO_URL_BASE, SYNTHETIC_AUDIO_URL_BASE);


var welcome = {
  type: "html-button-response",
  stimulus: "<h1>Ocena naturalności syntetycznej mowy.</h1></br>" +
      "<p>Badanie składa się z dwóch części.</p>" +
      "<br>W trakcie części <strong>pierwszej</strong> Twoim zadaniem będzie <strong>ocena naturalności</strong> syntetycznej mowy,</br>" +
      "a w trakcie części <strong>drugiej</strong> będziesz musiał(a) <strong>wychwycić subtelne różnice</strong> między brzmieniem dwóch wersji " +
      "tego samego zdania.</p>" +
      "<p><strong>Uwaga! Każde nagranie usłyszysz tylko raz. Nagrania odwtarzają się automatycznie i nie można ich zatrzymać. </strong></p>" +
      "<p> Upewnij się, że jesteś w cichym spokojnym miejscu i jeśli możesz załóż słuchawki.</p>" +
      "<strong>Powodzenia! :)</strong>",
  choices: ['Dalej..'],
  data: { type: 'info' }
};

var mos_info = {
  type: "html-button-response",
  stimulus: "<h1>Część 1: Ocena naturalności</h1><p>W trakcie tej części eksperymentu usłyszysz 20 krótkich zdań.</br>" +
      "Twoim zadaniem jest ocena naturalności mowy.</p>" +
      "<p>Wszystkie nagrania zawierają naturalną ludzką mowę ale w części z nich <strong>intonacja</strong> (melodia mowy)</br>" +
      "została podmieniona na sztuczną, wysyntezowana przez moją sieć neuronową.</p>" +
      "<p><strong>Każde nagranie usłyszysz tylko raz.</strong></p>" +
      "<p>Po usłyszeniu nagrania oceń je w skali od 1 do 5, gdzie:</p>" +
      "<p><strong>1 to mowa zła (zupełnie nienaturalna, maszynowa),</strong></br>" +
      "2 - słaba</br>" +
      "3 - średnia</br>" +
      "4 - dobra</br>" +
      "<strong>5 - znakomita (bardzo naturalna, ludzka).</strong></p></br>" +
      "<p>Naciskają odpowiednio <strong>klawisze od 1 do 5</strong>.</p>",
  choices: ['Rozpocznij'],
  data: { type: 'info' }
};

var abx_info = {
  type: "html-button-response",
  stimulus: "<h1>Część 2: Wychwytywanie różnic pomiędzy zdaniami</h1><p>W trakcie tej części eksperymentu zaprezentowanych </br>" +
      "zostanie 10 par różnych wersji tego samego zdania (A i B). Następnie, jako trzecie nagranie usłyszysz jeszcze raz</br>" +
      "<strong>zdanie A lub zdanie B</strong>. Twoim zadaniem jest zdecydowanie, <strong>które nagranie usłyszałeś ponownie.</strong></p>" +
      "<p>Zdecyduj naciskając odpowiednio <strong>klawisze [a] lub [b]</strong>.</p>",
  choices: ['Rozpocznij'],
  data: { type: 'info' }
};

var pause = {
  type: 'html-keyboard-response',
  stimulus: '<div style="font-size:60px;">...</div>',
  choices: jsPsych.NO_KEYS,
  trial_duration: 1000,
  data: { type: 'pause' }
}

var test_mos = {
  type: "audio-keyboard-response",
  stimulus: jsPsych.timelineVariable('stimulus'),
  choices: ['1', '2', '3', '4', '5'],
  prompt: "<p>Oceń naturalność usłyszanego nagrania</p></br>" +
      "<small>(klawisze od 1 do 5; 1 to mowa nienaturalna, brzmiąca sztucznie, a 5 mowa typowo ludzka, bardzo naturalna).</small>",
  data: { type: 'mos' }
}

var play_A = {
  type: "audio-keyboard-response",
  stimulus: jsPsych.timelineVariable('sound_A'),
  prompt: "<p><strong>Wersja A</strong></p><p>(słuchaj uważnie)</p>",
  trial_ends_after_audio: true,
  data: {
    type: 'abx',
    stage: 'a'
  }
}

var play_B = {
  type: "audio-keyboard-response",
  stimulus: jsPsych.timelineVariable('sound_B'),
  prompt: "<p><strong>Wersja B</strong></p><p>(słuchaj uważnie)</p>",
  trial_ends_after_audio: true,
  data: {
    type: 'abx',
    stage: 'b'
  }
}

var play_X = {
  type: "audio-keyboard-response",
  stimulus: jsPsych.timelineVariable('sound_X'),
  choices: ['A', 'B'],
  prompt: "<p><strong>Wersja X</strong></p></br><p>Zdecyduj czy usłyszałeś ponownie wersję [A] czy wersję [B]?</p>",
  data: {
    type: 'abx',
    stage: 'x'
  }
}

var naturalness_eval_procedure = {
  timeline: [pause, test_mos],
  timeline_variables: MOSStimuliList,
  randomize_order: true
};

var abx_discrimination_procedure = {
  timeline: [pause, play_A, pause, play_B, pause, play_X],
  timeline_variables: ABXStimuliList,
  randomize_order: true
};

var save_results = {
  type: 'call-function',
  func: saveData
}

// var debrief_block = {
//   type: "html-keyboard-response",
//   stimulus: function() {
//
//     var trials = jsPsych.data.get().filter({test_part: 'test'});
//     var correct_trials = trials.filter({correct: true});
//     var accuracy = Math.round(correct_trials.count() / trials.count() * 100);
//     var rt = Math.round(correct_trials.select('rt').mean());
//
//     return "<p>You responded correctly on "+accuracy+"% of the trials.</p>"+
//     "<p>Your average response time was "+rt+"ms.</p>"+
//     "<p>Press any key to complete the experiment. Thank you!</p>";
//
//   }
// };

jsPsych.init({
  timeline: [welcome, mos_info, naturalness_eval_procedure, abx_info, abx_discrimination_procedure, save_results],
  use_webaudio: false,
  preload_audio: MOSAudioTestSet.concat(ABXAudioTestSet),
  on_finish: function() {
    jsPsych.data.displayData();
  },
  default_iti: 250
});
