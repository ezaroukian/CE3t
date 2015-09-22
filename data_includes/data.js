//genData.js makes all the test/filler items that are added via genWrapper()
//var manualSendResults = true;
var manualSendResults = true;
var shuffleSequence = genSeq();

var defaults = [
  "Separator", {
    transfer: 1000,
    normalMessage: "Please wait for the next statement.",
    errorMessage: "Wrong. Please wait for the next statement.",
	hideProgressBar: false,
  },
  "SeparatorHTML", {
    transfer: "keypress",
    normalMessage: "<h2 style='color:green'>Correct!</h2>",
    errorMessage: "<h2 style='color:red'>Incorrect!</h2>",
	hideProgressBar: true,
    countsForProgressBar: false,
  },
 "MySeparator", {
    normalMessage: "<h2 style='color:green'>Correct!</h2><p>The rule and diagram are repeated below.</p>",
    errorMessage: "<h2 style='color:red'>Incorrect!</h2>",
	countsForProgressBar: false,
	hideProgressBar: true,
  },
  "AcceptabilityJudgment", {
    as: ["1", "2", "3", "4", "5", "6", "7"],
    presentAsScale: true,
    instructions: "Use number keys or click boxes to answer.",
    leftComment: "(bad)", rightComment: "(good)",
  },
  "Question", {
    randomOrder: false
  },  
  "PracticeQuestion", {
    hideProgressBar: true,
	countsForProgressBar: false,
  },
  "Message", {
    hideProgressBar: true,
	countsForProgressBar: false,
  },
  "Form", {
    hideProgressBar: true,
    countsForProgressBar: false,
    continueOnReturn: true,
  }
];

var items = [];
   
items = items.concat(genInst());
items = items.concat(wrapper());

//alert(items);
