var neg = "cannot";
//var neg = "isnot";
//var neg = "diff";

var P1B1 = "the person P1 reads the book B1";
var P1B2 = "the person P1 reads the book B2";
var P2B1 = "the person P2 reads the book B1";	
var P2B2 = "the person P2 reads the book B2";
var P2iP1 = "the person P2 is the person P1";
var B2iB1 = "the book B2 is the book B1";

var P1nB1 = "the person P1 cannot read the book B1";
var P1nB2 = "the person P1 cannot read the book B2";	
var P2nB1 = "the person P2 cannot read the book B1";	
var P2nB2 = "the person P2 cannot read the book B2";
var P2nP1 = "the person P2 cannot be the person P1";
var B2nB1 = "the book B2 cannot be the book B1";

switch(neg){
	case "cannot":
		break;
	case "isnot":
		P1nB1 = "the person P1 does not read the book B1";
		P1nB2 = "the person P1 does not read the book B2";	
		P2nB1 = "the person P2 does not read the book B1";	
		P2nB2 = "the person P2 does not read the book B2";
		P2nP1 = "the person P2 is not the person P1";
		B2nB1 = "the book B2 is not the book B1";
		break;
	case "diff":	
		P2nP1 = "there is a person named P2 that is different to the person P1";
		B2nB1 = "there is a book named B2 that is different to the book B1";
		break;
}

var parts = [P1B1,P1B2,P2B1,P2B2,P1nB1,P1nB2,P2nB1,P2nB2,P2iP1,B2iB1,P2nP1,B2nB1];

function buildCE(form, order, multi, neg){
	var conj1 = "error1";
	var conj2 = "error2";
	var cons = "error";

	switch(neg){
		case "can":
			break;
		case "isn":
			P1nB1 = "the person P1 does not read the book B1";
			P1nB2 = "the person P1 does not read the book B2";	
			P2nB1 = "the person P2 does not read the book B1";	
			P2nB2 = "the person P2 does not read the book B2";
			P2nP1 = "the person P2 is not the person P1";
			B2nB1 = "the book B2 is not the book B1";
			break;
		case "dif":	
			P2nP1 = "there is a person named P2 that is different to the person P1";
			B2nB1 = "there is a book named B2 that is different to the book B1";
			break;
	}
	
	switch(form){
		case "11n13"://11n13 2B: P1B1 / B2nB1, P1nB2 
			if(multi=="2B"){
				conj1 = P1B1;
				conj2 = B2nB1;
				cons = P1nB2;
			}
			else if(multi=="2P"){
				var temp = "error";
			}
			var temp1 = "error";
			break;
		case "13n11"://13n11 2B: P1B1 / B2nB1, P1B2
			if(multi=="2B"){
				conj1 = P1B1;
				conj2 = B2nB1;
				cons = P1B2;
			}
			else if (multi=="2P"){
				var temp = "error";
			}
			var temp1 = "error";
			break;
		case "31n11"://31n11 2P: P1B1 / P2nP1, P2B1
			if(multi=="2B"){
				//
				var temp = "error";
			}
			else if (multi=="2P"){
				conj1 = P1B1;
				conj2 = P2nP1;
				cons = P2B1;
			}
			var temp1 = "error";
			break;
		case "11n31"://11n31 2P: P1B1 / P2nP1, 
			if(multi=="2B"){
				//
				var temp = "error";
			}
			else if (multi=="2P"){
				conj1 = P1B1;
				conj2 = P2nP1;
				cons = P2nB1;
			}
			var temp1 = "error";
			break;
		case "1xn3x"://1xn3x 2P2B: P1B1 P2B2, P2iP1
			if(multi=="2B2P"){
				var temp = "error";
			}
			else if (multi=="2P2B"){
				conj1 = P1B1;
				conj2 = P2B2;
				cons = P2iP1;
			}
			var temp1 = "error";
			break;
		case "x1nx3"://x1nx3 2B2P: P1B1 P2B2, B2iB1
			if(multi=="2B2P"){
				conj1 = P1B1;
				conj2 = P2B2;
				cons = B2iB1;
			}
			else if (multi=="2P2B"){
				var temp = "error";
			}
			var temp1 = "error";
			break;
		case "x3nx1":
			if(multi=="2B2P"){
				conj1 = P1B1;
				conj2 = B2nB1;
				cons = P2B2;
			}
			else if (multi=="2P2B"){
				var temp = "error";
			}
			var temp1 = "error";
			break;
		case "3xn1x":
			if(multi=="2B2P"){
				var temp = "error";
			}
			else if (multi=="2P2B"){
				conj1 = P1B1;
				conj2 = P2nP1;
				cons = P2B2;
			}
			var temp1 = "error";
			break; 
		default:
			conj1=conj2=cons="ERROR!!";
	}
	if (order=="r"){
		var temp = conj1;
		conj1 = conj2;
		conj2 = temp;
	} 

	//take r/o/u?
	//take 11n13,11n31,13n11,31n11,...
	//11n13 2B: P1B1 / B2nB1, P1nB2 
	//13n11 2B: P1B1 / B2nB1, P1B2 
	//31n11 2P: P1B1 / P2nP1, P2B1
	//11n31 2P: P1B1 / P2nP1, P2nB1
	//1xn3x 2P2B: P1B1 P2B2, P2iP1
	//x1nx3 2B2P: P1B1 P2B2, B2iB1
	//x3nx1 2B2P: P1B1 / B2nB1, P2B2
	//3xn1x 2P2B: P1B1 / P2nP1, P2B2
	
	
	return {type: form+"_"+order+"_"+multi+"_"+neg, rule: "if ( "+conj1+" ) and ( "+conj2+" ) then ( "+cons+" )."};
}


//neg added superficially
/* var ce11n13_nn_o_2B_can = buildCE("11n13","o","2B", "can");
var ce11n13_nn_r_2B_isn = buildCE("11n13","r","2B", "isn");

var ce13n11_np_o_2B_dif = buildCE("13n11","o","2B", "dif");
var ce13n11_np_r_2B_can = buildCE("13n11","r","2B", "can");

var ce31n11_np_o_2P_isn = buildCE("31n11","o","2P", "isn");
var ce31n11_np_r_2P_dif = buildCE("31n11","r","2P", "dif");

var ce11n31_nn_o_2P_can = buildCE("11n31","o","2P", "can");
var ce11n31_nn_r_2P_isn = buildCE("11n31","r","2P", "isn");

var ce1xn3x_pp_u_2P2B_dif = buildCE("1xn3x","u","2P2B", "dif");

var cex1nx3_pp_u_2B2P_can = buildCE("x1nx3","u","2B2P", "can");

var cex3nx1_np_o_2B2P_isn = buildCE("x3nx1","o","2B2P", "isn");
var cex3nx1_np_r_2B2P_dif = buildCE("x3nx1","r","2B2P", "dif");

var ce3xn1x_np_o_2P2B_can = buildCE("3xn1x","o","2P2B", "can");
var ce3xn1x_np_r_2P2B_isn = buildCE("3xn1x","r","2P2B", "isn"); */





/* //(hopefully) all the CE rules
var CErulesList = [
 ce11n13_nn_o_2B, ce11n13_nn_r_2B, 
 ce13n11_np_o_2B, ce13n11_np_r_2B, 
 ce31n11_np_o_2P, ce31n11_np_r_2P,
 ce11n31_nn_o_2P, ce11n31_nn_r_2P,
 ce1xn3x_pp_u_2P2B,
 cex1nx3_pp_u_2B2P,
 cex3nx1_np_o_2B2P, cex3nx1_np_r_2B2P,
 ce3xn1x_np_o_2P2B, ce3xn1x_np_r_2P2B
];  */

var CErulesList2 = [];

var diffs = ["can","isn","dif"];
for (i=0;i<diffs.length;i++){
	CErulesList2.push(	buildCE("11n13","o","2B", diffs[i]) );
	CErulesList2.push(	buildCE("11n13","r","2B", diffs[i]) );

	CErulesList2.push(	buildCE("13n11","o","2B", diffs[i]) );
	CErulesList2.push(	buildCE("13n11","r","2B", diffs[i]) );

	CErulesList2.push(	buildCE("31n11","o","2P", diffs[i]) );
	CErulesList2.push(	buildCE("31n11","r","2P", diffs[i]) );

	CErulesList2.push(	buildCE("11n31","o","2P", diffs[i]) );
	CErulesList2.push(	buildCE("11n31","r","2P", diffs[i]) );

	CErulesList2.push(	buildCE("1xn3x","u","2P2B", diffs[i]) );

	CErulesList2.push(	buildCE("x1nx3","u","2B2P", diffs[i]) );

	CErulesList2.push(	buildCE("x3nx1","o","2B2P", diffs[i]) );
	CErulesList2.push(	buildCE("x3nx1","r","2B2P", diffs[i]) );

	CErulesList2.push(	buildCE("3xn1x","o","2P2B", diffs[i]) );
	CErulesList2.push(	buildCE("3xn1x","r","2P2B", diffs[i]) );
} 




var tempLink = "http://i1341.photobucket.com/albums/o753/ezaroukian/11_zpsatl1xhmu.png";
//ontographs
var ontoList = [
{type: "11", link: "http://i1341.photobucket.com/albums/o753/ezaroukian/11new_zpsplmvl6ul.png"},//"http://i1341.photobucket.com/albums/o753/ezaroukian/11_zpsatl1xhmu.png"
{type: "13", link: "http://i1341.photobucket.com/albums/o753/ezaroukian/13new_zpsysmrjtpm.png"},//"http://i1341.photobucket.com/albums/o753/ezaroukian/13_zpslqb6lf25.png"
{type: "31", link: "http://i1341.photobucket.com/albums/o753/ezaroukian/31new_zpsnevqzba3.png"},//"http://i1341.photobucket.com/albums/o753/ezaroukian/31_zpss87hqnkb.png"
{type: "33", link: "http://i1341.photobucket.com/albums/o753/ezaroukian/33_zpsy18d3v6x.png"}
]; 

//Turn them into items for IBEX
function ibexItem(onto,CErule){
	var type = onto.type+"-"+CErule.type;//
	var image = "<img src='"+onto.link+"' height='360' >";//html containing ontograph link on google drive? test with http://tinyurl.com/ohleh6j
	var quest = CErule.rule+"<br>"+image+"<br><br><br>Is the diagram consistent with the rule?";
	var ans = ["Yes","No"];	
	var cor = 1;
	//alert(CErule.type.split("_")[0]);
	switch(CErule.type.split("_")[0]){
		case "11n13":
			if (onto.type == "11" || onto.type == "31"){cor=0;}
			break;
		case "13n11":
			if (onto.type == "13" || onto.type == "33"){cor=0;}
			break;
		case "31n11":
			if (onto.type == "31" || onto.type == "33"){cor=0;}
			break;
		case "11n31":
			if (onto.type == "11" || onto.type == "13"){cor=0;}
			break;
		case "1xn3x":
			if (onto.type == "13"){cor=0;}
			break;
		case "x1nx3":
			if (onto.type == "31"){cor=0;}
			break;
		case "x3nx1":
			if (onto.type == "11" || onto.type == "13" || onto.type == "33"){cor=0;}
			break;
		case "3xn1x":
			if (onto.type == "11" || onto.type == "31" || onto.type == "33"){cor=0;}
			break;
	}
	////testing
	//alert(quest);
	return [ [type, "Question", {"q": "<span class='q'>"+quest+"</span>", "as": ans, "hasCorrect": cor } ] ];
}

function ibexItemsList(ontoList,CErulesList){
	output = [];
	for (o=0;o<ontoList.length;o++){
		for (c=0;c<CErulesList.length;c++){
			output = output.concat(ibexItem(ontoList[o],CErulesList[c]));
			//alert(output);
		}
	}
	//alert(output.length);
	return output;
}

function wrapper(){
	return ibexItemsList(ontoList,CErulesList2);
}



//
	var ex1 = "the person Mary reads the book Moby-Dick.";
	var ex1img = "http://i1341.photobucket.com/albums/o753/ezaroukian/1_zpsitpxpxiy.png";
	var ex1exp = "<div style='width:40em;'><p> In the diagram, <span class='q'>Mary</span> reads <span class='q'>Moby-Dick</span>.</p></div>";
	var ex2 = "the person Mary reads the book Middlemarch.";
	var ex2exp = "<div style='width:40em;'><p> In the diagram, <span class='q'>Mary</span> reads <span class='q'>Moby-Dick</span>. She does not read <span class='q'>Middlemarch</span>.</p></div>";
	var ex2img = "http://i1341.photobucket.com/albums/o753/ezaroukian/1_zpsitpxpxiy.png";
	var ex4 = "if (the person P1 reads the book B1) then (the person P1 has as name Mary).";
	var ex4img = "http://i1341.photobucket.com/albums/o753/ezaroukian/1_zpsitpxpxiy.png";
	var ex4exp = " <div style='width:40em;'><p> To determine if the diagram is consistent with this rule, we need to find the cases in the diagram where the 'if'-clause is true, then check whether the 'then'-clause is true. </p> <ul>	<li>	IF: The 'if'-clause is true when <span class='q'>P1=Mary</span> and <span class='q'>B1=Moby-Dick</span> (<span class='q'>the person Mary reads the book Moby Dick</span>)	</li>	<li>THEN: When <span class='q'>P1=Mary</span> and <span class='q'>B1=Moby-Dick</span>, the 'then'-clause (<span class='q'>the person Mary has as name Mary</span>) is true </li> </ul></div>";
	var ex5 = "if (the person P1 reads the book B1) then (the person P1 has as name Mary).";
	var ex5img = "http://i1341.photobucket.com/albums/o753/ezaroukian/2_zpstsuxtudr.png";
	var ex5exp = "<div style='width:40em;'><p> Again, to determine if the diagram is consistent with this rule, we need to find the cases in the diagram where the 'if'-clause is true, then check whether the 'then'-clause is true. </p> <ul>	<li>		IF: The 'if'-clause is true when		<ol>			<li><span class='q'>P1=John</span> and <span class='q'>B1=War and Peace</span> (<span class='q'>the person John reads the book War and Peace</span>), and when 			</li>			<li><span class='q'>P1=Mary</span> and <span class='q'>B1=Moby-Dick</span> (<span class='q'>the person Mary reads the book Moby Dick</span>)			</li>		</ol>	</li>	<li>		THEN:		<ol>			<li>When <span class='q'>P1=John</span> and <span class='q'>B1=War and Peace</span>, the 'then'-clause (<span class='q'>the person John has as name Mary</span>) is FALSE 			</li>			<li>When <span class='q'>P1=Mary</span> and <span class='q'>B1=Moby-Dick</span>, the 'then'-clause (<span class='q'>the person Mary has as name Mary</span>) is true 			</li>		</ol>	</li> </ul></div>";
	var ex6 = "if (the person P1 reads the book B1) then (the book B1 has as name War and Peace).";
	var ex6img = "http://i1341.photobucket.com/albums/o753/ezaroukian/2_zpstsuxtudr.png";
	var ex6exp = "<div style='width:40em;'><p> To determine if the diagram is consistent with this rule, we need to find the cases in the diagram where the 'if'-clause is true, then check whether the 'then'-clause is true. </p> <ul>	<li>		IF: The 'if'-clause is true when		<ol>			<li><span class='q'>P1=John</span> and <span class='q'>B1=War and Peace</span> (<span class='q'>the person John reads the book War and Peace</span>), and when 			</li>			<li><span class='q'>P1=Mary</span> and <span class='q'>B1=Moby-Dick</span> (<span class='q'>the person Mary reads the book Moby Dick</span>)	</li>		</ol>	</li>	<li>		THEN:		<ol>			<li>When <span class='q'>P1=John</span> and <span class='q'>B1=War and Peace</span>, the 'then'-clause (<span class='q'>the book War and Peace has as name War and Peace</span>) is true			</li>			<li>When <span class='q'>P1=Mary</span> and <span class='q'>B1=Moby-Dick</span>, the 'then'-clause (<span class='q'>the book Moby-Dick has as name War and Peace</span>) is FALSE 			</li>		</ol>	</li> </ul></div>";
	var ex7 = "if (the person P1 reads the book B1) then (the book B1 has as name Moby-Dick).";
	var ex7img = "http://i1341.photobucket.com/albums/o753/ezaroukian/3_zpskhezeis8.png";
	var ex7exp = "<div style='width:40em;'><p> To determine if the diagram is consistent with this rule, we need to find the cases in the diagram where the 'if'-clause is true, then check whether the 'then'-clause is true. </p> <ul>	<li>		IF: The 'if'-clause is true when		<ol>			<li><span class='q'>P1=John</span> and <span class='q'>B1=Moby-Dick</span> (<span class='q'>the person John reads the book Moby-Dick</span>), and when 			</li>			<li><span class='q'>P1=Mary</span> and <span class='q'>B1=Moby-Dick</span> (<span class='q'>the person Mary reads the book Moby-Dick</span>)	</li>		</ol>	</li>	<li>		THEN:		<ol>			<li>When <span class='q'>P1=John</span> and <span class='q'>B1=Moby-Dick</span>, the 'then'-clause (<span class='q'>the book Moby-Dick has as name Moby-Dick</span>) is true 			</li>			<li>When <span class='q'>P1=Mary</span> and <span class='q'>B1=Moby-Dick</span>, the 'then'-clause (<span class='q'>the book Moby-Dick has as name Moby-Dick</span>) is true 			</li>		</ol>	</li> </ul></div>";
	
	var ex3 = "if (the person P1 has as name Peter) then (the person P1 reads the book War and Peace).";
	var ex3img = "http://i1341.photobucket.com/albums/o753/ezaroukian/1pwp_zpsi30xtvud.png";
	var ex3exp = "<div style='width:40em;'><p> To determine if the diagram is consistent with this rule, we need to find the cases in the diagram where the 'if'-clause is true, then check whether the 'then'-clause is true. </p> <ul><li>	IF: The 'if'-clause is true when <span class='q'>P1=Peter</span> (<span class='q'>the person Peter has as name Peter</span>)</li>	<li>THEN: When <span class='q'>P1=Peter</span>, the 'then'-clause (<span class='q'>the person Peter reads the book War and Peace</span>) is true </li> </ul></div>";
	var ex26 = ex25;
	var ex26img = "http://i1341.photobucket.com/albums/o753/ezaroukian/1pwp_zpsi30xtvud.png";
	var ex26exp = "<div style='width:40em;'><p>To determine if the diagram is consistent with this rule, we need to find the cases where the 'if'-clause is true, then check whether the 'then'-clause is true. </p> <ul>	<li>The 'if'-clause is true when <span class='q'>P1=John</span>. (When <span class='q'>P1=Mary</span> or <span class='q'>P1=Peter</span>, the 'if'-clause is false, since neither has the name <span class='q'John</span>)	</li>	<li> When <span class='q'>P1=John</span>, the 'then'-clause (<span class='q'>John reads War and Peace</span>) is true </li> </ul></div>";
	
	
function genInst(){


	
	function frameEx(rule,link,skip){
		frame = "<div align='center'><p><span class='q'>"+rule+"</span></p><br/><img src='"+link+"' height='360'></div>";
		if(!skip){ frame += "<br>Is the diagram consistent with the rule?"; }//if not specified, add directions to choose an option.
		return frame;
	}
	
	var defaultEM = '<h2 style="color:red">Incorrect!</h2>';
	var defaultCM = '<h2 style="color:green">Correct!</h2>';
	
	var isCons = "<p>The diagram IS consistent with the rule.</p>";
	var notCons = "<p>The diagram is NOT consistent with the rule.</p>";
	
	var repeated = "";//"<p> The rule and diagram are repeated below.</p>";
	
	var inIsCons = '<div style="width:40em;">'+defaultEM+isCons+repeated+'</div>';
	var inNotCons = '<div style="width:40em;">'+defaultEM+notCons+repeated+'</div>';
	var coIsCons = '<div style="width:40em;">'+defaultCM+isCons+repeated+'</div>';
	var coNotCons = '<div style="width:40em;">'+defaultCM+notCons+repeated+'</div>';
	
	instItems = [
	["sep", "SeparatorHTML", {
        transfer: "keypress",
        normalMessage: "<div align='center'><p><i>Press any key to continue.</i></p><p><i>Remember to respond as <b>quickly</b> and as <b>accurately</b> as possible.</i></p></div>",
        ignoreFailure: true,
		hideProgressBar: false,
    }],
    ["inst", "Form", {
        html: { include: "survey.html" },
    } ],
    ["inst", "Message", {
        html: {include: "1instructions1.html"},
    }],
    ["inst", "PracticeQuestion", {
        q: "<h3>Example 1:</h3>"+frameEx(ex1,ex1img),
        as: ["Yes","No"], hasCorrect: "Yes",
        html: {include: "2example1.html"},
    }],
	["inst", "MySeparator", {
        html: "<h3 align='center'>Example 1:</h3>"+frameEx(ex1,ex1img,true),
		normalMessage: coIsCons+ex1exp,
		errorMessage: inIsCons+ex1exp,
    }],    
	
    ["inst", "PracticeQuestion", {
        q: "<h3>Example 2:</h3>"+frameEx(ex2,ex2img),
        as: ["Yes","No"], hasCorrect: "No",
        html: {include: "3example2.html"},
    }],
	["inst", "MySeparator", {
		html: "<h3 align='center'>Example 2:</h3>"+frameEx(ex2,ex2img,true),
		normalMessage: coNotCons+ex2exp,
        errorMessage: inNotCons+ex2exp,
    }], 
	
	["inst", "PracticeQuestion", {
        q: "<h3>Example 3:</h3>"+frameEx(ex3,ex3img),
        as: ["Yes","No"], hasCorrect: "Yes",
        html: {include: "4example3.html"},
    }],
	["inst", "MySeparator", {
		html: "<h3 align='center'>Example 3:</h3>"+frameEx(ex3,ex3img,true),
		normalMessage: coIsCons+ex3exp,
        errorMessage: inIsCons+ex3exp,
    }], 
	
    ["inst", "PracticeQuestion", {
        q: "<h3>Example 4:</h3>"+frameEx(ex4,ex4img),
        as: ["Yes","No"], hasCorrect: "Yes",
        html: {include: "5example4.html"},
    }],
	["inst", "MySeparator", {
		html: "<h3 align='center'>Example 4:</h3>"+frameEx(ex4,ex4img,true),
		normalMessage: coIsCons+ex4exp,
        errorMessage: inIsCons+ex4exp,
    }], 
	
    ["inst", "PracticeQuestion", {
        q: "<h3>Example 5:</h3>"+frameEx(ex5,ex5img),
        as: ["Yes","No"], hasCorrect: "No",
        html: {include: "6example5.html"},
    }],
	["inst", "MySeparator", {
		html: "<h3 align='center'>Example 5:</h3>"+frameEx(ex5,ex5img,true),
		normalMessage: coNotCons+ex5exp,
        errorMessage: inNotCons+ex5exp,
    }], 
	
	["inst", "PracticeQuestion", {
        q: "<h3>Example 6:</h3>"+frameEx(ex6,ex6img),
        as: ["Yes","No"], hasCorrect: "No",
        html: {include: "7example6.html"},
    }],
	["inst", "MySeparator", {
		html: "<h3 align='center'>Example 6:</h3>"+frameEx(ex6,ex6img,true),
		normalMessage: coNotCons+ex6exp,
        errorMessage: inNotCons+ex6exp,

    }],
	
	["inst", "PracticeQuestion", {
        q: "<h3>Example 7:</h3>"+frameEx(ex7,ex7img),
        as: ["Yes","No"], hasCorrect: "Yes",
        html: {include: "7example6.html"},
    }],	
	["inst", "MySeparator", {
		html: "<h3 align='center'>Example 7:</h3>"+frameEx(ex7,ex7img,true),
		normalMessage: coIsCons+ex7exp,
        errorMessage: inIsCons+ex7exp,
    }],
	
    ["inst", "Message", {
        html: {include: "instructions-end.html"},
    }],
	["end", "Form", {
        html: { include: "endSurvey.html" },
    } ],
	["end", "__SendResults__", { }],
	["end", "Message", {
        html: { include: "code.html" },
		transfer: null,
    } ],
	];
	
	return instItems;
}

//







function genSeq(){
	var cid = seq("inst",sepWith("sep",rshuffle(rshuffle(
		"11-11n13_o_2B_can","13-11n13_o_2B_can","31-11n13_r_2B_isn","33-11n13_r_2B_isn",
		"11-13n11_r_2B_can","13-13n11_r_2B_can","31-13n11_o_2B_dif","33-13n11_o_2B_dif",
		"11-31n11_o_2P_isn","13-31n11_r_2P_dif","31-31n11_r_2P_dif","33-31n11_o_2P_isn",
		"11-11n31_r_2P_isn","13-11n31_o_2P_can","31-11n31_o_2P_can","33-11n31_r_2P_isn",
		"11-1xn3x_u_2P2B_dif","13-1xn3x_u_2P2B_dif",
		"31-x1nx3_u_2B2P_can","33-x1nx3_u_2B2P_can",
		"11-x3nx1_o_2B2P_isn","31-x3nx1_r_2B2P_dif",
		"13-3xn1x_o_2P2B_can","33-3xn1x_r_2P2B_dif"
  		))),"end");
  
	var idc = seq("inst",sepWith("sep",rshuffle(rshuffle(
		"11-11n13_o_2B_isn","13-11n13_o_2B_isn","31-11n13_r_2B_dif","33-11n13_r_2B_dif",
		"11-13n11_r_2B_isn","13-13n11_r_2B_isn","31-13n11_o_2B_can","33-13n11_o_2B_can",
		"11-31n11_o_2P_dif","13-31n11_r_2P_can","31-31n11_r_2P_can","33-31n11_o_2P_dif",
		"11-11n31_r_2P_dif","13-11n31_o_2P_isn","31-11n31_o_2P_isn","33-11n31_r_2P_dif",
		"11-1xn3x_u_2P2B_can","13-1xn3x_u_2P2B_can",
		"31-x1nx3_u_2B2P_isn","33-x1nx3_u_2B2P_isn",
		"11-x3nx1_o_2B2P_dif","31-x3nx1_r_2B2P_can",
		"13-3xn1x_o_2P2B_isn","33-3xn1x_r_2P2B_can"
		))),"end");
  
    	var dci = seq("inst",sepWith("sep",rshuffle(rshuffle(
		"11-11n13_o_2B_dif","13-11n13_o_2B_dif","31-11n13_r_2B_can","33-11n13_r_2B_can",
		"11-13n11_r_2B_dif","13-13n11_r_2B_dif","31-13n11_o_2B_isn","33-13n11_o_2B_isn",
		"11-31n11_o_2P_can","13-31n11_r_2P_isn","31-31n11_r_2P_isn","33-31n11_o_2P_can",
		"11-11n31_r_2P_can","13-11n31_o_2P_dif","31-11n31_o_2P_dif","33-11n31_r_2P_can",
		"11-1xn3x_u_2P2B_isn","13-1xn3x_u_2P2B_isn",
		"31-x1nx3_u_2B2P_dif","33-x1nx3_u_2B2P_dif",
		"11-x3nx1_o_2B2P_can","31-x3nx1_r_2B2P_isn",
		"13-3xn1x_o_2P2B_dif","33-3xn1x_r_2P2B_isn"
   		))),"end");
   
	var newOrd = Math.floor((Math.random() * 3)); 
	//alert(newOrd);
	var options = [cid,idc,dci];
	  
	return options[newOrd];
}


//for testing in browser
//document.getElementById("ex4").innerHTML = ex4exp;  

//document.getElementById("textDiv1").innerHTML = CErulesList2;		 
//document.getElementById("textDiv2").innerHTML = ce11n13_nn_r_2B.rule ;
//document.getElementById("textDiv3").innerHTML = ibexItem(ontoList[0],CErulesList2[0]);
//document.getElementById("textDiv4").innerHTML = ibexItemsList(ontoList,CErulesList2);

