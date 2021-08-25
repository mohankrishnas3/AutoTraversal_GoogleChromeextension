



let data;
chrome.runtime.onMessage.addListener(
	function(request, sender,response){
		if(!request.active){
			console.log('Doc-mments Off')
			return null;
		}

		console.log(request.comments)
		data = request.comments;
if(request.comments){


							
const comment_box = (word,comment)=>{
	
const commentBox = document.createElement('div');

const commentHead = document.createElement('div');
const commentBody = document.createElement('div');
const commentData = document.createElement('div');
const commentAnchor = document.createElement('p');

const commentValue = document.createElement('p');
commentBox.className = "comment-block";
commentBody.className = "body";
commentHead.className = "head";
commentData.className = "data";


commentAnchor.innerText = word;
commentValue.innerText = comment;


commentData.append(commentValue);
commentBody.append(commentData);
commentHead.append(commentAnchor);
commentBox.append(commentHead);
commentBox.append(commentBody);


return commentBox;
}


/*
const indexer = (arr,elementList)=>{
result=[];
for(let i = 0; i<arr.length;i++){

tempObj = {'pos':[],'value':arr[i].content,'word':arr[i].context.value,'replies':arr[i].replies};


for(let e = 0;e<elementList.length;e++){
let cur = elementList[e].innerHTML.toString();

if(cur.includes(arr[i].context.value)){
line= {'index': e,'wordPos':[cur.indexOf(arr[i].context.value)]};
tempObj.pos.push(line);

}}result.push(tempObj)



}return result}

function changer(lineArray,lineNum,index,word,value,replies){

let lineAt = lineArray[lineNum].innerHTML.toString()

let start = lineAt.slice(0,index);
console.log('STart:'+start)
let middle = lineAt.slice(index,index+word.length);
console.log('middle: '+middle )
let end = lineAt.slice(index+word.length,1200);

let newline = `${start}<span class='commentElem' id='commentElem' data-value = "${value}" data-anchor="${word}" data-replies='${replies}'>${middle}</span>${end}`;

return newline;
}

setTimeout(()=>{

let script = document.querySelector("body > script:nth-child(28)")
console.log(script)



let lineElements = document.querySelectorAll("div.kix-lineview-content > span:nth-child(2) > span > span")



if(lineElements){
	indexed = indexer(request.comments.items,lineElements)
	console.log(indexed)
		if(indexed){
			let newLine;
			for(let i of indexed){
				for(let j of i.pos){
					lineNum = j.index
					for(let z of j.wordPos){
						if(lineElements[j.index].innerHTML.toString().includes('data-anchor="'+i.word)){
							console.log(j)
							console.log(lineElements[j.index])
						continue;}
						newLine = changer(lineElements,j.index,z,i.word,i.value,i.replies);		
					}
					if(newLine){
				lineElements[j.index].innerHTML = newLine }
				}}
			}
		}

let highlighter = document.querySelectorAll('.commentElem')
if(highlighter)
{	
	document.body.addEventListener('click',(e)=>
	{

		if (e.target.id === "traversal_button")
		{
			console.log("button pressed");
		}
		if(e.target.id === "commentElem")
		{
				s = e.target

			posX = s.getBoundingClientRect().x;
			posY = s.getBoundingClientRect().y;
			Width = s.getBoundingClientRect().width;
			Hieght = s.getBoundingClientRect().height;

			
			document.body.prepend(comment_box(s.dataset.anchor,s.dataset.value,[]))
			let box = document.querySelector('.comment-block');
			if(box){
				console.log(posX, posY, Width, Hieght)
			
				box.style.transform = `translate(${posX-80}px,${posY-195}px)`
			}
		}
		else
		{
			let boxes = document.querySelectorAll('.comment-block');
				for(let b of boxes)
				{
					if(document.body.hasChildNodes(b) )
					{
							document.body.removeChild(b)
					}
				}
		}
	})
}
*/

console.log("comments are");
console.log(request.comments)
var dom_anchor_string = document.querySelector("body > script:nth-child(27)").text
console.log(dom_anchor_string)

var first_index = dom_anchor_string.indexOf("doco_anchor") - 17
var last_index= dom_anchor_string.lastIndexOf("doco_anchor") + 99
var anchor_string_trim = dom_anchor_string.substring(first_index, last_index)
var bracket_lastindex = anchor_string_trim.lastIndexOf("}")
var anchor_string = '[' + anchor_string_trim.substring(0,bracket_lastindex+1) + ']'
console.log(first_index);
console.log(last_index);
console.log(anchor_string);

//var json_dom_string = '[' + dom_anchor_string.substring(20, dom_anchor_string.length - 238) + ']'
//var json_dom_string = '[' + anchor_string + ']'
//console.log(json_dom_string)
var json_dom_string =  anchor_string 
var json_dom_data = JSON.parse(json_dom_string);//JSON.stringify(json_dom_string);
console.log(json_dom_data)
console.log("before")
//console.log(json_dom_data[0].s)
console.log("after")

let anchor_index_list = new Array();
for(let i = 0; i < json_dom_data.length; i++) {
	
			let anchor_index = [];
		anchor_index.push(json_dom_data[i].sm.das_a.cv.opValue.toString());
		anchor_index.push(json_dom_data[i].si);
		anchor_index.push(json_dom_data[i].ei);
		anchor_index_list.push(anchor_index);
	 
		
}
console.log(anchor_index_list)

let chunked= [];
var k1,i1,i2;
var paragraph_count = document.querySelector("#kix-appview > div.kix-appview-editor-container > div > div:nth-child(1) > div.kix-zoomdocumentplugin-outer > div > div > div > div:nth-child(2) > div > div.kix-page-content-wrapper > div:nth-child(1) > div > div > div:nth-child(1) > div > div").childElementCount;
var parentnode_selector = "#kix-appview > div.kix-appview-editor-container > div > div:nth-child(1) > div.kix-zoomdocumentplugin-outer > div > div > div > div:nth-child(2) > div > div.kix-page-content-wrapper > div:nth-child(1) > div > div > div:nth-child(1) > div > div";
k1 = 0;
loop1:
while ( k1< anchor_index_list.length)
{

	var count1 = 0;
	var count2 = 0;

	for ( i1 = 1; i1 <= paragraph_count; i1++)
	{
		var childnode = " > div:nth-child("+i1+")"
		var childnode_selector = parentnode_selector + childnode
		var count1 = count1 +  document.querySelector(childnode_selector).textContent.replace(/[\u200B-\u200D\uFEFF]/g, '').length ;// - 2*(document.querySelector(childnode_selector).textContent.split(" ").length-1) - 3
		//console.log("count"+ count1);
		//console.log("anchor_index_list",anchor_index_list[k1][2])
		if(anchor_index_list[k1][2]<= count1)
		{
			console.log("paragraph"+i1);
			let anchor_coord = [];
			
			//var paragraph_element = document.querySelector(childnode_selector); //.getBoundingClientRect();
			//anchor_coord.push(anchor_index_list[k1][0], paragraph_element.getBoundingClientRect().x - 80, paragraph_element.getBoundingClientRect().y - 195);//paragraph_element.left + window.scrollX, paragraph_element.top + window.scrollY);
			//chunked.push(anchor_coord);
			
			var line_count = document.querySelector(childnode_selector).childElementCount;
			count2 = count1 - document.querySelector(childnode_selector).textContent.replace(/[\u200B-\u200D\uFEFF]/g, '').length;
			for(i2 = 1; i2<= line_count; i2++)
			{				
				var line_childnode = " > div:nth-child("+i2+")";
				var line_childnode_selector = childnode_selector + line_childnode;
				console.log("line count for "+i2 +" "+count2);
				count2 = count2 + document.querySelector(line_childnode_selector).textContent.replace(/[\u200B-\u200D\uFEFF]/g, '').length;
				console.log("line count for "+i2 +" "+count2);
				if(anchor_index_list[k1][2]< count2)
				{
					console.log("line"+i2);

					//count3 = count3 - document.querySelector(line_childnode_selector).textContent.replace(/[\u200B-\u200D\uFEFF]/g, '').length;
					//var line_child_count =  document.querySelector(line_childnode_selector+ "> div.kix-lineview-content").childElementCount;
					//for(i9; i9<= line_child_count: i9++)
					//{
						//var
					//}

					var line_element = document.querySelector(line_childnode_selector);
					//console.log(line_childnode_selector);
					anchor_coord.push(anchor_index_list[k1][0], line_element.getBoundingClientRect().x -110 , line_element.getBoundingClientRect().y - 195 +window.scrollY);//paragraph_element.left + window.scrollX, paragraph_element.top + window.scrollY);
					chunked.push(anchor_coord);
					k1 = k1 + 1;
					continue loop1;
				}
				
			}
			
		}

	}
	k1 = k1 + 1
}
console.log("anchor coord are ")
console.log(chunked);


/*
console.log("button before")
const traversal_button = document.createElement("div");
traversal_button.id = 'traversal_button_id';
traversal_button.className = "traversal_button";
document.body.prepend(traversal_button)
let buttonShort = document.querySelector('.traversal_button');
buttonShort.style.transform = `translate(230px,35px)`
buttonShort.style.width = '70px'; // setting the width to 200px
buttonShort.style.height = '30px'; // setting the height to 200px
buttonShort.style.background = 'teal'; // setting the background color to teal
buttonShort.style.color = 'white'; // setting the color to white
buttonShort.style.fontSize = '20px'; // setting the font size to 20px
console.log("button after")
*/
/*
buttonShort.addEventListener("click", function() {
	console.log("you clicked button")
});
*/

//dummy array
//let chunked = [[40,150], [400,400], [200,200]];

//for(let i = 0; i < chunked.length; i++) {  
	
	i = 0;
			
			document.addEventListener('keydown', (event) => {
					var name = event.key;
					var code = event.code;
					if (name === 'Control') {
						// Do nothing.
						return;
					}
					if (event.ctrlKey) {
						//alert(`Combination of ctrlKey + ${name} \n Key code Value: ${code}`);
						return;
					} else {
						//alert(`Key pressed ${name} \n Key code Value: ${code}`);
						return;
					}
				}, false);

				// Add event listener on keyup
				document.addEventListener('keyup', (event) => {
					var name = event.key;
					if (name === 'Control') {
						//alert('Control key pressed');

						let boxes = document.querySelectorAll('.comment-block');
					for(let b of boxes)
					{
						if(document.body.hasChildNodes(b) )
						{
								document.body.removeChild(b)
						}
					}


						console.log("control key pressed")
						if (i >= chunked.length){
									i = 0;
							 }	 
							 var comment123 = " ";
							 var word123 = " ";
						for(let c2 = 0; c2< request.comments.items.length; c2++)
						{
								if(request.comments.items[c2].anchor == chunked[i][0])
								{
										comment123 = request.comments.items[c2].content;
										word = request.comments.items[c2].context.value;
								}
						}
						document.body.prepend(comment_box(word,comment123))
						let box = document.querySelector('.comment-block');
     		
					//box.style.transform = `translate(${chunked[i][0]}px,${chunked[i][1]}px)`
					box.style.position = "absolute";
					box.style.left = chunked[i][1]+'px';
					box.style.top = chunked[i][2]+'px';
					console.log(i);
					console.log(chunked[i][1], chunked[i][2]);
					i = i +1;	
					
				 
						
					}
				}, false);
					

	
//}}

//	},5000) 
}})
const baseURL = 'https://doc.google.com/';
console.log("Doc-mments connected")


// 