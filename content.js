



let data;
var fileid1;
chrome.runtime.onMessage.addListener(
	function(request, sender,response){
		if(!request.active){
			console.log('Doc-mments Off')
			return null;
		}

		console.log(request.comments)
		data = request.comments;
		fileid1 = request.fileid;

if(request.comments){


							
const comment_box = (word,comment)=>{
	
const commentBox = document.createElement('div');

//const commentHead = document.createElement('div');
const commentBody = document.createElement('div');
const commentData = document.createElement('div');
//const commentAnchor = document.createElement('p');
const commentreplyinput = document.createElement("input");
const commentreplysubmit = document.createElement("button");

commentreplyinput.placeholder = "Type your reply here..";
commentreplysubmit.textContent = "Submit"

const commentValue = document.createElement('p');
commentBox.className = "comment-block";
commentBody.className = "body";
//commentHead.className = "head";
commentData.className = "data";
commentreplyinput.className = "replytextbox"
commentreplysubmit.className = "replysubmitbutton"

commentreplysubmit.setAttribute("id", "replysubmitbutton");
commentBox.setAttribute("id", "comment-block");





// commentBox.className = "comment-block1";
// commentBody.className = "body1";
// commentHead.className = "head1";
// commentData.className = "data1";



//commentAnchor.innerText = word;
commentValue.innerText = comment;


commentData.append(commentValue);
commentBody.append(commentData);
//commentBody.append(commentreplyinput);
//commentBody.append(commentreplysubmit);
//commentHead.append(commentAnchor);
//commentBox.append(commentHead);
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
var dom_num = 27;
var dom_anchor_string = document.querySelector("body > script:nth-child("+ dom_num +")").text
console.log(dom_anchor_string)

var first_index = dom_anchor_string.indexOf("doco_anchor") - 17
if (first_index < 0)
{
	if( dom_num == 27)
	{
		dom_num = 26;
		dom_anchor_string = document.querySelector("body > script:nth-child("+ dom_num +")").text
	}
}

first_index = dom_anchor_string.indexOf("doco_anchor") - 17
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

/*

	let chunked= [];
	var k1,i1,i2, i9, i10;
	var paragraph_count = document.querySelector("#kix-appview > div.kix-appview-editor-container > div > div:nth-child(1) > div.kix-zoomdocumentplugin-outer > div > div > div > div:nth-child(2) > div > div.kix-page-content-wrapper > div:nth-child(1) > div > div > div:nth-child(1) > div > div").childElementCount;
	var parentnode_selector = "#kix-appview > div.kix-appview-editor-container > div > div:nth-child(1) > div.kix-zoomdocumentplugin-outer > div > div > div > div:nth-child(2) > div > div.kix-page-content-wrapper > div:nth-child(1) > div > div > div:nth-child(1) > div > div";
	k1 = 0;
	loop1:
	while ( k1< anchor_index_list.length)
	{
		var count0 = 0;

		var count1 = 0;
		var count2 = 0;
		var count3 = 0;
		var count4 = 0;
		var page_count = document.querySelector("#kix-appview > div.kix-appview-editor-container > div > div:nth-child(1) > div.kix-zoomdocumentplugin-outer > div > div > div > div:nth-child(2)").childElementCount;

		for( i10 =1; i10 <= page_count; i10++)
		{	
			var pagenode_selector = "#kix-appview > div.kix-appview-editor-container > div > div:nth-child(1) > div.kix-zoomdocumentplugin-outer > div > div > div > div:nth-child(2) > div:nth-child("+i10+")";
			var count0 = count0 + document.querySelector(pagenode_selector).textContent.replace(/[\u200B-\u200D\uFEFF]/g, '').length ;

			if(anchor_index_list[k1][2]<= count0 )
			{
				console.log("page number"+ i10);
				count1 = count0 - document.querySelector(pagenode_selector).textContent.replace(/[\u200B-\u200D\uFEFF]/g, '').length;


				var paragraph_count = document.querySelector(pagenode_selector+" > div.kix-page-content-wrapper > div:nth-child(1) > div > div > div:nth-child(1) > div > div").childElementCount;

				for ( i1 = 1; i1 <= paragraph_count; i1++)
				{
					var parentnode_selector = pagenode_selector+" > div.kix-page-content-wrapper > div:nth-child(1) > div > div > div:nth-child(1) > div > div";
				    
					var childnode = " > div:nth-child("+i1+")"
					var childnode_selector = parentnode_selector + childnode

					var count1 = count1 +  document.querySelector(childnode_selector).textContent.replace(/[\u200B-\u200D\uFEFF]/g, '').length ;// - 2*(document.querySelector(childnode_selector).textContent.split(" ").length-1) - 3
					//console.log("count"+ count1);
					//console.log("anchor_index_list",anchor_index_list[k1][2])
					if(anchor_index_list[k1][2]<= count1)
					{
						 console.log("paragraph number"+i1);
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
							//console.log("line count for "+i2 +" "+count2);
							count2 = count2 + document.querySelector(line_childnode_selector).textContent.replace(/[\u200B-\u200D\uFEFF]/g, '').length;
							//console.log("line count for "+i2 +" "+count2);
							if(anchor_index_list[k1][2]< count2)
							{
								console.log("line"+i2);

								count3 = count2 - document.querySelector(line_childnode_selector).textContent.replace(/[\u200B-\u200D\uFEFF]/g, '').length;
								var line_child_count =  document.querySelector(line_childnode_selector+ " > div.kix-lineview-content > span:nth-child(2) > span").childElementCount;
								//var line_child_span1 = " ";
								//console.log("line child count "+ line_child_count+" count3 "+count3);
								for(i9 = 1; i9<= line_child_count; i9++)
								{

									if(document.querySelector(line_childnode_selector+ " > div.kix-lineview-content > span:nth-child(2) > span > span:nth-child("+i9+")") == null)
									{
											count3 = count3 + document.querySelector(line_childnode_selector+ " > div.kix-lineview-content > span:nth-child(2) > span > a:nth-child("+i9+")").textContent.replace(/[\u200B-\u200D\uFEFF]/g, '').length;
											//var line_child_span = document.querySelector(line_childnode_selector+ " > div.kix-lineview-content > span:nth-child(2) > span > a:nth-child("+i9+")");
									}
									else{
										count3 = count3 + document.querySelector(line_childnode_selector+ " > div.kix-lineview-content > span:nth-child(2) > span > span:nth-child("+i9+")").textContent.replace(/[\u200B-\u200D\uFEFF]/g, '').length;
											//var line_child_span = document.querySelector(line_childnode_selector+ " > div.kix-lineview-content > span:nth-child(2) > span > a:nth-child("+i9+")");

									}
									console.log("count3 "+count3);
									console.log("anchor_index_list "+anchor_index_list[k1][2] );
									if(anchor_index_list[k1][2] < count3)
									{
											//var line_child_span = document.querySelector(line_childnode_selector+ " > div.kix-lineview-content > span:nth-child(2) > span > span:nth-child("+i9+")");
											//var line_child_span = line_child_span1;
										if(document.querySelector(line_childnode_selector+ " > div.kix-lineview-content > span:nth-child(2) > span > span:nth-child("+i9+")") == null)
									   {
														var line_child_span = document.querySelector(line_childnode_selector+ " > div.kix-lineview-content > span:nth-child(2) > span > a:nth-child("+i9+")");
												}
												else{
														var line_child_span = document.querySelector(line_childnode_selector+ " > div.kix-lineview-content > span:nth-child(2) > span > span:nth-child("+i9+")");

													}
											console.log(line_childnode_selector);
											//anchor_coord.push(anchor_index_list[k1][0], line_child_span.getBoundingClientRect().x -110 +   (line_child_span.textContent.replace(/[\u200B-\u200D\uFEFF]/g, '').length - anchor_index_list[k1][2] )*(line_child_span.getBoundingClientRect().width)/(line_child_span.textContent.replace(/[\u200B-\u200D\uFEFF]/g, '').length)  , line_child_span.getBoundingClientRect().y - 195 +window.scrollY);//paragraph_element.left + window.scrollX, paragraph_element.top + window.scrollY);
											count4 = ((anchor_index_list[k1][1]+anchor_index_list[k1][2])/2) - count3 + line_child_span.textContent.replace(/[\u200B-\u200D\uFEFF]/g, '').length; ;
											var line_offset = (count4 )*(line_child_span.getBoundingClientRect().width)/(line_child_span.textContent.replace(/[\u200B-\u200D\uFEFF]/g, '').length); 
											console.log("count4 "+ count4);
											//anchor_coord.push(anchor_index_list[k1][0], line_child_span.getBoundingClientRect().x -78 + line_offset, line_child_span.getBoundingClientRect().y - 90 +window.scrollY);//paragraph_element.left + window.scrollX, paragraph_element.top + window.scrollY);
											anchor_coord.push(anchor_index_list[k1][0], line_child_span, line_offset);//paragraph_element.left + window.scrollX, paragraph_element.top + window.scrollY);

											chunked.push(anchor_coord);
											k1 = k1 + 1;
											continue loop1;
									}
								}

								//var line_element = document.querySelector(line_childnode_selector);
								//console.log(line_childnode_selector);
								//anchor_coord.push(anchor_index_list[k1][0], line_element.getBoundingClientRect().x -110 , line_element.getBoundingClientRect().y - 195 +window.scrollY);//paragraph_element.left + window.scrollX, paragraph_element.top + window.scrollY);
								//chunked.push(anchor_coord);
								//k1 = k1 + 1;
								//continue loop1;
							}
							
						}
						
					}

				}
			}
		}	

	k1 = k1 + 1
	}
console.log("anchor coord are ")
console.log(chunked);
*/


	let chunked= [];	
	var k1,i1,i2, i9;
	var paragraph_count = document.querySelector("#kix-appview > div.kix-appview-editor-container > div > div:nth-child(1) > div.kix-zoomdocumentplugin-outer > div > div > div > div:nth-child(2) > div > div.kix-page-content-wrapper > div:nth-child(1) > div > div > div:nth-child(1) > div > div").childElementCount;
	var parentnode_selector = "#kix-appview > div.kix-appview-editor-container > div > div:nth-child(1) > div.kix-zoomdocumentplugin-outer > div > div > div > div:nth-child(2) > div > div.kix-page-content-wrapper > div:nth-child(1) > div > div > div:nth-child(1) > div > div";
	k1 = 0;
	loop1:
	while ( k1< anchor_index_list.length)
	{

		var count1 = 0;
		var count2 = 0;
		var count3 = 0;
		var count4 = 0;

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
					//console.log("line count for "+i2 +" "+count2);
					count2 = count2 + document.querySelector(line_childnode_selector).textContent.replace(/[\u200B-\u200D\uFEFF]/g, '').length;
					//console.log("line count for "+i2 +" "+count2);
					if(anchor_index_list[k1][2]< count2)
					{
						console.log("line"+i2);

						count3 = count2 - document.querySelector(line_childnode_selector).textContent.replace(/[\u200B-\u200D\uFEFF]/g, '').length;
						var line_child_count =  document.querySelector(line_childnode_selector+ " > div.kix-lineview-content > span:nth-child(2) > span").childElementCount;
						//var line_child_span1 = " ";
						//console.log("line child count "+ line_child_count+" count3 "+count3);
						for(i9 = 1; i9<= line_child_count; i9++)
						{

							if(document.querySelector(line_childnode_selector+ " > div.kix-lineview-content > span:nth-child(2) > span > span:nth-child("+i9+")") == null)
							{
									count3 = count3 + document.querySelector(line_childnode_selector+ " > div.kix-lineview-content > span:nth-child(2) > span > a:nth-child("+i9+")").textContent.replace(/[\u200B-\u200D\uFEFF]/g, '').length;
									//var line_child_span = document.querySelector(line_childnode_selector+ " > div.kix-lineview-content > span:nth-child(2) > span > a:nth-child("+i9+")");
							}
							else{
								count3 = count3 + document.querySelector(line_childnode_selector+ " > div.kix-lineview-content > span:nth-child(2) > span > span:nth-child("+i9+")").textContent.replace(/[\u200B-\u200D\uFEFF]/g, '').length;
									//var line_child_span = document.querySelector(line_childnode_selector+ " > div.kix-lineview-content > span:nth-child(2) > span > a:nth-child("+i9+")");

							}
							console.log("count3 "+count3);
							console.log("anchor_index_list "+anchor_index_list[k1][2] );
							if(anchor_index_list[k1][2] < count3)
							{
									//var line_child_span = document.querySelector(line_childnode_selector+ " > div.kix-lineview-content > span:nth-child(2) > span > span:nth-child("+i9+")");
									//var line_child_span = line_child_span1;
								if(document.querySelector(line_childnode_selector+ " > div.kix-lineview-content > span:nth-child(2) > span > span:nth-child("+i9+")") == null)
							   {
												var line_child_span = document.querySelector(line_childnode_selector+ " > div.kix-lineview-content > span:nth-child(2) > span > a:nth-child("+i9+")");
										}
										else{
												var line_child_span = document.querySelector(line_childnode_selector+ " > div.kix-lineview-content > span:nth-child(2) > span > span:nth-child("+i9+")");

											}
									console.log(line_childnode_selector);
									//anchor_coord.push(anchor_index_list[k1][0], line_child_span.getBoundingClientRect().x -110 +   (line_child_span.textContent.replace(/[\u200B-\u200D\uFEFF]/g, '').length - anchor_index_list[k1][2] )*(line_child_span.getBoundingClientRect().width)/(line_child_span.textContent.replace(/[\u200B-\u200D\uFEFF]/g, '').length)  , line_child_span.getBoundingClientRect().y - 195 +window.scrollY);//paragraph_element.left + window.scrollX, paragraph_element.top + window.scrollY);
									count4 = ((anchor_index_list[k1][1]+anchor_index_list[k1][2])/2) - count3 + line_child_span.textContent.replace(/[\u200B-\u200D\uFEFF]/g, '').length; ;
									var line_offset = (count4 )*(line_child_span.getBoundingClientRect().width)/(line_child_span.textContent.replace(/[\u200B-\u200D\uFEFF]/g, '').length); 
									console.log("count4 "+ count4);
									//anchor_coord.push(anchor_index_list[k1][0], line_child_span.getBoundingClientRect().x -78 + line_offset, line_child_span.getBoundingClientRect().y - 90 +window.scrollY);//paragraph_element.left + window.scrollX, paragraph_element.top + window.scrollY);
									anchor_coord.push(anchor_index_list[k1][0], line_child_span, line_offset);//paragraph_element.left + window.scrollX, paragraph_element.top + window.scrollY);

									chunked.push(anchor_coord);
									k1 = k1 + 1;
									continue loop1;
							}
						}

						//var line_element = document.querySelector(line_childnode_selector);
						//console.log(line_childnode_selector);
						//anchor_coord.push(anchor_index_list[k1][0], line_element.getBoundingClientRect().x -110 , line_element.getBoundingClientRect().y - 195 +window.scrollY);//paragraph_element.left + window.scrollX, paragraph_element.top + window.scrollY);
						//chunked.push(anchor_coord);
						//k1 = k1 + 1;
						//continue loop1;
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
	





	var current_anchor;
	y= 0;
	x=0;
	i = 0;
	var element_comment;
	var offset_1;
			
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
					var code_1 = event.code;
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
						document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollTo(0, 0);
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
					//anchor_coord.push(anchor_index_list[k1][0], line_child_span.getBoundingClientRect().x -78 + line_offset, line_child_span.getBoundingClientRect().y - 90 +window.scrollY);//paragraph_element.left + window.scrollX, paragraph_element.top + window.scrollY);
					element_comment = chunked[i][1];
					offset_1 = chunked[i][2];
					box.style.position = "absolute";
					box.style.left = chunked[i][1].getBoundingClientRect().x -78 + chunked[i][2] + 'px';
					box.style.top = chunked[i][1].getBoundingClientRect().y - 80 + 'px';
					//chunked[i][1].tabIndex = -1;
					//setTimeout(function() { chunked[i][1].focus() }, 3000);
					//document.scroll(box.style.left, box.style.top)
					current_anchor = chunked[i][0];
					console.log("curren anchor inside keyboard event", current_anchor);

					const elem = document.querySelector('.comment-block');
					//var topPos = elem.offsetTop;
					//document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollTop = topPos;
					//document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollIntoView(false);
					//document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollTop -= 10;

					//const yOffset = -10; 

					
					var y = chunked[i][1].getBoundingClientRect().top;
					var x = chunked[i][1].getBoundingClientRect().x;
					var body_container = document.querySelector("#kix-appview > div.kix-appview-editor-container > div");
					//document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollTo({ left: x, top: y , behavior: 'smooth'});

					

					if(y > 300)
					{
						//y = y + 300;
						body_container.scrollBy(0,+20);
						//document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollTo({ top: y - 600  , behavior: 'smooth'});
						//document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollTo({ top: y - 600  , behavior: 'smooth'});
						document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollBy({  top: y+ 700 , behavior: 'smooth'});
					}

					if(y < 600)
					{
						//y = y + 300;
						body_container.scrollBy(0,+20);
						document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollTo({ top: y - 100  , behavior: 'smooth'});
						document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollTo({ top: y - 100 , behavior: 'smooth'});


						
					}


					if(x  > 500)
					{
						//y = y + 300;
						body_container.scrollBy(0,+20);
						document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollTo({ left: x - 500 + 200 , behavior: 'smooth'});
						document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollTo({ left: x - 500 + 200 , behavior: 'smooth'});
					
						
					}



					if(x  < 500)
					{
						//y = y + 300;
						body_container.scrollBy(0,+20);
						document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollTo({ left: x -200  , behavior: 'smooth'});
						document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollTo({ left: x -200 , behavior: 'smooth'});
					
						
					}
					



					// var keyboardEvent = document.createEvent("KeyboardEvent");
					// var initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? "initKeyboardEvent" : "initKeyEvent";


					// keyboardEvent[initMethod](
					//                    "keydown", // event type : keydown, keyup, keypress
					//                     true,     // bubbles
					//                     true,     // cancelable  
					//                     window,   // viewArg: should be window  
					//                     false,    // ctrlKeyArg  
					//                     false,    // altKeyArg
					//                     false,    // shiftKeyArg
					//                     false,    // metaKeyArg
					//                    102,               // keyCodeArg,
					//                     0); 


					// document.dispatchEvent(keyboardEvent);
					// document.dispatchEvent(keyboardEvent);
					// document.dispatchEvent(keyboardEvent);
					// document.dispatchEvent(keyboardEvent);
					// document.dispatchEvent(keyboardEvent);
					// document.dispatchEvent(keyboardEvent);
					// document.dispatchEvent(keyboardEvent);
					// document.dispatchEvent(keyboardEvent);
					// document.dispatchEvent(keyboardEvent);
					// document.dispatchEvent(keyboardEvent);
					// document.dispatchEvent(keyboardEvent);

					// console.log("y co ordinates is ",y);

					//chunked[i][1].scrollIntoView(false);


					// This is the main function where which pass two ref parameters of Parent element & Child element
					// parent123 = document.querySelector("#kix-appview > div.kix-appview-editor-container > div > div:nth-child(1) > div.kix-zoomdocumentplugin-outer");
					// child123 = chunked[i][1];
					// const scrollIntoView = (parent123, child123) => {
					  
					//   const parentBounding = parent.getBoundingClientRect(),
					//     clientBounding = child.getBoundingClientRect();
					  
					//   const parentBottom = parentBounding.bottom,
					//     parentTop = parentBounding.top,
					//     clientBottom = clientBounding.bottom,
					//     clientTop = clientBounding.top;
					  
					//   if (parentTop >= clientTop) {
					//     scrollTo(parent, -(parentTop - clientTop), 300);
					//   } else if (clientBottom > parentBottom) {
					//     scrollTo(parent, clientBottom - parentBottom, 300);
					//   }
					  
					// };
					// function scrollTo(element, to, duration) {
					  
					//   let start = element.scrollTop,
					//     currentTime = 0,
					//     increment = 20;
					  
					//   let animateScroll = function() {
					//     currentTime += increment;
					    
					//     let val = easeInOutQuad(currentTime, start, to, duration);
					//     element.scrollTop = val;
					    
					//     if (currentTime < duration) {
					//       setTimeout(animateScroll, increment);
					//     }
					//   };
					  
					//   animateScroll();
					// }
					// // Function for smooth scroll animation with the time duration
					// function easeInOutQuad(time, startPos, endPos, duration) {
					//   time /= duration / 2;
					  
					//   if (time < 1) return (endPos / 2) * time * time + startPos;
					// time--;
					//   return (-endPos / 2) * (time * (time - 2) - 1) + startPos;
					// }




					if (elem === document.activeElement) {
					    console.log('Element has focus!');
					} else {
					    console.log('Element is not focused.');
					    //document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollTo(0,box.style.top);
					    //elem.scrollIntoView(false);
					    elem.focus({preventScroll:false});


					}
					


					//box.style.position = "absolute";
					//box.style.left = chunked[i][1]+'px';
					//box.style.top = chunked[i][2]+'px';
					//box.focus();
					console.log(i);
					console.log(chunked[i][1], chunked[i][2]);
					i = i +1;	
					
				 
						
					}

					if(name === 'Shift')
					{
						//alert("you pressed shift key");

						let highlighter5553 = document.querySelectorAll('.comment-block');
									

						if(highlighter5553)
						{
							let box5553 = document.querySelectorAll('.comment-block');
											
											
							for(let b of box5553)
							{
								if(document.body.hasChildNodes(b) )
								{
									document.body.removeChild(b)
								}
							}

						}
						
						
					}

					if(name === "ArrowUp")
					{
						console.log("up arrow is pressed");
						const y12 = document.querySelector("#kix-appview > div.kix-appview-editor-container > div");
						y = y + 20;
						document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollBy(0, -20);
					}

					if(name === "ArrowDown")
					{
						console.log("up arrow is pressed");
						const y12 = document.querySelector("#kix-appview > div.kix-appview-editor-container > div");
						y = y + 20;
						document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollBy(0, +20);
					}

					if(name === "ArrowLeft")
					{
						console.log("up arrow is pressed");
						const y12 = document.querySelector("#kix-appview > div.kix-appview-editor-container > div");
						y = y + 20;
						document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollBy(-20, 0);
					}

					if(name === "ArrowRight")
					{
						console.log("up arrow is pressed");
						const y12 = document.querySelector("#kix-appview > div.kix-appview-editor-container > div");
						y = y + 20;
						document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollBy(+20, 0);
					}




				}, false);


				document.querySelector("#kix-appview > div.kix-appview-editor-container > div").addEventListener('scroll', function(e) {
                
					//var highlighter_001 = document.getElementById('docs-docos-commentsbutton');
					var highlighter_001 = document.getElementById('docs-revisions-sidebar-title'); 
					if(!highlighter_001)
					{
						console.log("Its scrolling");
						let box = document.querySelector('.comment-block');
				  		box.style.position = "absolute";
						box.style.left = element_comment.getBoundingClientRect().x -78 + offset_1 + 'px';
						box.style.top = element_comment.getBoundingClientRect().y - 95 + 'px';
						console.log("co ordinates are left: "+box.style.left+", Top: "+box.style.top)
					}





				});

/*
				document.querySelector("body > div.comment-block > div > button").addEventListener("click",function(){
					//alert("you pressed submit button");
					var reply_textbox = document.querySelector("body > div.comment-block > div > input").value;
					console.log("present one textContent", content);
					console.log("curren anchor inside mouse submit click", current_anchor);

				})

*/	 

			

				let highlighter = document.querySelectorAll('.comment-block');
				

				if(highlighter)
				{	
					document.body.addEventListener('click',(e)=>
					{


						if(e.target.id === "replysubmitbutton")
						{
							alert(e.target.className);
							var reply_textbox = document.querySelector("body > div.comment-block > div > input").value;
							console.log("present one textContent", reply_textbox );
							console.log("curren anchor inside mouse submit click", current_anchor);
							var comment123;
							for(let c3 = 0; c3< request.comments.items.length; c3++)
							{
								if(request.comments.items[c3].anchor == current_anchor)
								{
										comment123 = request.comments.items[c3].commentId;
										
								}
							}

/*	
						
							 	var port = chrome.runtime.connect();  
							 port.postMessage({from: 'popup'});
							 port.disconnect();
								
						const msg = 'Hello from content Script ⚡';
						chrome.runtime.sendMessage(tabs[0].id, { message: msg }, function (response) {
						  console.log(response);
						});



							chrome.extension.sendMessage({commentid : comment123 , replyword:reply_textbox}, function(response) {
   									 console.log("message sent from content file");
									});
							
								chrome.runtime.sendMessage({type: "notification", options: { 
								    type: "basic", 
								    //iconUrl: chrome.extension.getURL("icon128.png"),
								    title: "Test",
								    message: "Test"

								}});


							chrome.runtime.sendMessage({commentid : comment123 , replyword:reply_textbox}, (response) => {
							  // 3. Got an asynchronous response with the data from the background
							  console.log('received user data', response);
							  //initializeUI(response);
							});

							chrome.runtime.sendMessage({commentid : comment123 , replyword:reply_textbox}, function(response) {
  							console.log(response.farewell);
							});

							var port = chrome.runtime.connect();
							   
							port.postMessage({commentid : comment123 , replyword:reply_textbox});
							    

/*
							    chrome.identity.getAuthToken({interactive: true}, function(token) {
							      let init = {
							        method: 'GET',
							        async: true,
							        headers: {
							          Authorization: 'Bearer ' + token,
							          'Content-Type': 'application/json'
							        },
							        'contentType': 'json'
							      };
							      fetch(
							          'https://www.googleapis.com/drive/v3/files/'+fileid1+'/comments/'+comment123+'/replies?fields=*&key=AIzaSyAKEG6a2HiQ3FDyVJonAK2nmamViZRaMQ4',
							          init)
							          .then((response) => response.json())
							          .then(function(data) {							          	
										console.log(data)
								});
							}) ;

*/
//
						}



					})
				}



function getRGB(str){
  var match = str.match(/rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/);
  return match ? {
    red: match[1],
    green: match[2],
    blue: match[3]
  } : {};
}

	var e1;
	var element_comment_lastedited;
	var chunked_lastedit123= [];
	var last_edited_details = "";

				var elem = document.getElementById('docs-notice');
				elem.addEventListener("click", () => {
					//alert("checked");
					console.log('checked');

					let highlighter5552 = document.querySelectorAll('.comment-block');
								

					if(highlighter5552)
					{
						let box5552 = document.querySelectorAll('.comment-block');
										
										
						for(let b of box5552)
						{
							if(document.body.hasChildNodes(b) )
							{
								document.body.removeChild(b)
							}
						}

					}




					








					var rowgroup = document.getElementById("docs-revisions-sidebar");
				    rowgroup.addEventListener("click", () => {
						//alert("again checked");
						console.log('again checked');



								var btns = document.querySelectorAll('[class="docs-revisions-tile"]');
								btns.forEach(i => {
								  i.addEventListener('click', function (event) {
										console.log(i.textContent);
										last_edited_details = i.ariaLabel;
									}, false);
								})


								let highlighter555 = document.querySelectorAll('.comment-block');
								

								if(highlighter555)
								{
										let box555 = document.querySelectorAll('.comment-block');
										
										
										for(let b of box555)
										{
											if(document.body.hasChildNodes(b) )
											{
													document.body.removeChild(b)
											}
										}

								}








							//var highlighter_007 = document.getElementById('docs-revisions-sidebar-title'); 
							//if(highlighter_007)
							//{
							    chunked_lastedit123= [];
							    var k1_lastedit ,i1_lastedit= 0;
							    var i2_lastedit , i9_lastedit ;
							    var paragraph_count_lastedit = document.querySelector("#kix-appview > div.kix-appview-editor-container > div > div:nth-child(6) > div.kix-zoomdocumentplugin-outer > div > div > div > div:nth-child(2) > div > div.kix-page-content-wrapper > div:nth-child(1) > div > div > div:nth-child(1) > div > div").childElementCount;
							    var parentnode_selector_lastedit = "#kix-appview > div.kix-appview-editor-container > div > div:nth-child(6) > div.kix-zoomdocumentplugin-outer > div > div > div > div:nth-child(2) > div > div.kix-page-content-wrapper > div:nth-child(1) > div > div > div:nth-child(1) > div > div";
							    k1_lastedit = 0;
								var count1_lastedit = 0;
								var count2_lastedit = 0;
								var count3_lastedit = 0;
								var count4_lastedit = 0;
								var previous = "rgb(32, 33, 34)";
								var present = "";

								console.log("paragraph count "+ paragraph_count_lastedit);
								for ( i1_lastedit = 1; i1_lastedit <= paragraph_count_lastedit; i1_lastedit++)
								{
									var childnode_lastedit = " > div:nth-child("+i1_lastedit+")"
									var childnode_selector_lastedit = parentnode_selector_lastedit + childnode_lastedit;
									console.log("paragraph"+i1_lastedit);						
									var line_count_lastedit = document.querySelector(childnode_selector_lastedit).childElementCount;
									console.log("  number of lines "+ line_count_lastedit);							
									for(i2_lastedit = 1; i2_lastedit<= line_count_lastedit; i2_lastedit++)
									{				
											var line_childnode_lastedit = " > div:nth-child("+i2_lastedit+")";
											var line_childnode_selector_lastedit = childnode_selector_lastedit + line_childnode_lastedit;
											console.log("  line"+i2_lastedit);												
											var line_child_count_lastedit =  document.querySelector(line_childnode_selector_lastedit + " > div.kix-lineview-content > span:nth-child(2) > span").childElementCount;
											console.log("  js path for line"+ line_childnode_selector_lastedit + " > div.kix-lineview-content > span:nth-child(2) > span");
											console.log("    number of span elements "+ line_child_count_lastedit);
											for(i9_lastedit = 1; i9_lastedit<= line_child_count_lastedit; i9_lastedit++)
											{
												if(document.querySelector(line_childnode_selector_lastedit+ " > div.kix-lineview-content > span:nth-child(2) > span > span:nth-child("+i9_lastedit+")") == null)
												{
													var line_child_span_lastedit = document.querySelector(line_childnode_selector_lastedit+ " > div.kix-lineview-content > span:nth-child(2) > span > a:nth-child("+i9_lastedit+") > span");
													console.log("    anchor element span "+i9_lastedit);
													//console.log("	 element color is "+ line_child_span_lastedit.style.color);
													present = line_child_span_lastedit.style.color
													if(line_child_span_lastedit.style.color == "rgb(0, 121, 107)")
													{
														console.log("    changed element");
														
													}
													console.log("    present color "+ present);
													console.log("    previous color "+ previous); 
													if((previous == "rgb(32, 33, 34)" || previous == "rgb(6, 69, 173)"|| previous == "") && (present == "rgb(0, 121, 107)"))
													{
														console.log("first element changed");
														chunked_lastedit123.push(line_child_span_lastedit);
													}

												}
												else
												{
													var line_child_span_lastedit = document.querySelector(line_childnode_selector_lastedit+ " > div.kix-lineview-content > span:nth-child(2) > span > span:nth-child("+i9_lastedit+")");
													console.log("    span element "+i9_lastedit);
													//console.log("    element color is "+ line_child_span_lastedit.style.color);
													present = line_child_span_lastedit.style.color
													if(line_child_span_lastedit.style.color == "rgb(0, 121, 107)")
													{
														console.log("    changed element");
													}
													console.log("    present color "+ present);
													console.log("    previous color "+ previous);
													if((previous == "rgb(32, 33, 34)" || previous == "rgb(6, 69, 173)" || previous == "") && (present == "rgb(0, 121, 107)"))
													{
														console.log("first element changed");
														chunked_lastedit123.push(line_child_span_lastedit);
													}
												}
												var span_text = line_child_span_lastedit.textContent.replace(/[\u200B-\u200D\uFEFF]/g, '')
												console.log("    Text content is below");
												console.log("    "+span_text);
												previous = present;
													
											}																		
									}


								}

							//}





					});
						
						e1= 0;
						
						document.addEventListener('keydown', (event) => {
							var name = event.key;
							var code = event.code;
							if (e1 >= chunked_lastedit123.length)
							{
								document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollTo(0, 0);
								e1 = 0;
							 }	
							if (name === 'n') {


								let highlighter5551 = document.querySelectorAll('.comment-block');
								

								if(highlighter5551)
								{
										let box5551 = document.querySelectorAll('.comment-block');
										
										
										for(let b of box5551)
										{
											if(document.body.hasChildNodes(b) )
											{
													document.body.removeChild(b)
											}
										}

								}


								document.body.prepend(comment_box("",last_edited_details))
								let box_lastedit = document.querySelector('.comment-block');
			     		
								//box.style.transform = `translate(${chunked[i][0]}px,${chunked[i][1]}px)`
								//anchor_coord.push(anchor_index_list[k1][0], line_child_span.getBoundingClientRect().x -78 + line_offset, line_child_span.getBoundingClientRect().y - 90 +window.scrollY);//paragraph_element.left + window.scrollX, paragraph_element.top + window.scrollY);
								element_comment_lastedited = chunked_lastedit123[e1];
								box_lastedit.style.position = "absolute";
								box_lastedit.style.left = chunked_lastedit123[e1].getBoundingClientRect().x  -50 + 'px';
								box_lastedit.style.top = chunked_lastedit123[e1].getBoundingClientRect().y - 90 + 'px';
								console.log("you pressed n co ordinates are left: "+box_lastedit.style.left+", Top: "+box_lastedit.style.top)


								var y_last = chunked_lastedit123[e1].getBoundingClientRect().top;
								var x_last = chunked_lastedit123[e1].getBoundingClientRect().x;
								var body_container_last = document.querySelector("#kix-appview > div.kix-appview-editor-container > div");
								//document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollTo({ left: x, top: y , behavior: 'smooth'});

								if(y_last > 300)
								{
									//y = y + 300;
									body_container_last.scrollBy(0,+20);
									//document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollTo({ top: y - 600  , behavior: 'smooth'});
									//document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollTo({ top: y - 600  , behavior: 'smooth'});
									document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollTo(0, y_last - 350);
									console.log("y>350");
									//chunked_lastedit123[e1].scrollIntoView();

								}

								if(y_last < 300)
								{
									//y = y + 300;
									//body_container_last.scrollBy(0,+20);
									//document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollTo({ top: y_last -100 , behavior: 'smooth'});
									//document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollTo({ top: y_last -100 , behavior: 'smooth'});
									document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollTo(0, y_last - 250 );
									console.log("y<300");

									//chunked_lastedit123[e1].scrollIntoView();

									
								}


								if(x_last  > 500)
								{
									//y = y + 300;
									body_container_last.scrollBy(0,+20);
									document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollTo({ left: x_last - 500 + 200 , behavior: 'smooth'});
									document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollTo({ left: x_last - 500 + 200 , behavior: 'smooth'});
									console.log("x > 500");
									
								}



								if(x_last  < 500)
								{
									//y = y + 300;
									body_container_last.scrollBy(0,+20);
									document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollTo({ left: x_last -200  , behavior: 'smooth'});
									document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollTo({ left: x_last -200 , behavior: 'smooth'});
									console.log("x < 500");
									
								}
								



/*								

								if(y_last > 300)
								{
									//y = y + 300;
									body_container_last.scrollBy(0,+20);
									//document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollTo({ top: y - 600  , behavior: 'smooth'});
									//document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollTo({ top: y - 600  , behavior: 'smooth'});
									document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollBy({  top: y_last- 600  , behavior: 'smooth'});
								}

								if(y_last < 600)
								{
									//y = y + 300;
									body_container_last.scrollBy(0,+20);
									document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollTo({ top: y_last - 100 + 300  , behavior: 'smooth'});
									document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollTo({ top: y_last - 100 + 300, behavior: 'smooth'});


									
								}


								if(x_last  > 500)
								{
									//y = y + 300;
									body_container_last.scrollBy(0,+20);
									document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollTo({ left: x_last - 800   , behavior: 'smooth'});
									document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollTo({ left: x_last - 800   , behavior: 'smooth'});
								
									
								}



								if(x_last  < 500)
								{
									//y = y + 300;
									body_container_last.scrollBy(0,+20);
									document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollTo({ left: x_last -200  , behavior: 'smooth'});
									document.querySelector("#kix-appview > div.kix-appview-editor-container > div").scrollTo({ left: x_last -200 , behavior: 'smooth'});
								
									
								}

*/
								console.log("you pressed n");
								
								e1 = e1 + 1;

							}
							if (event.ctrlKey) {
								//alert(`Combination of ctrlKey + ${name} \n Key code Value: ${code}`);
								return;
							} else {
								//alert(`Key pressed ${name} \n Key code Value: ${code}`);
								return;
							}








						}, false);




								document.querySelector("#kix-appview > div.kix-appview-editor-container > div").addEventListener('scroll', function(e) {
			                
											//var highlighter_001 = document.getElementById('docs-docos-commentsbutton');
											var highlighter_006 = document.getElementById('docs-revisions-sidebar-title'); 
											if(highlighter_006)
											{
												console.log("Its scrolling");
												let box_lastedit_scrolling = document.querySelector('.comment-block');
										  		box_lastedit_scrolling.style.position = "absolute";
												box_lastedit_scrolling.style.left = element_comment_lastedited.getBoundingClientRect().x -50 + 'px';
												box_lastedit_scrolling.style.top = element_comment_lastedited.getBoundingClientRect().y - 90 + 'px';
												console.log("co ordinates are left: "+box_lastedit_scrolling.style.left+", Top: "+box_lastedit_scrolling.style.top)
											}


									});




				  });





					//var rowgroup = document.querySelector("#docs-revisions-sidebar > div.docs-revisions-sidebar-revisions-list-container");


				

	
					

	
//}}

//	},5000) 
}})


const baseURL = 'https://doc.google.com/';
console.log("Doc-mments connected")


// 