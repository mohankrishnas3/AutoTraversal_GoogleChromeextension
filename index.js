// let btn = document.querySelector('.switch');
// let text = document.querySelector('.block>span')
// let state = false
// btn.addEventListener('click',()=>{
// 	if(!state){
// 		text.innerText = 'On'
// 		state = true
// 	}
// 	else{
// 		text.innerText = 'Off'
// 		state = false	
// 	}
// 	})

		

// function eventMessage(content,clickType,message,from, to){
// try{	
// chrome.tabs.query({
//     active: true,
//     currentWindow: true
//   }, function (tabs) {
//     chrome.tabs.sendMessage(
//         tabs[0].id,
//         {from: 'popup', subject: clickType, data:content,text :message,start:from,end:to}
//         );
// });
// } catch(e) {
// 	console.log(e);
// }
// }
// btn.onclick =()=>{
// 	if(errors.numError !== undefined && errors.numError !== null){
// 		numError.innerText = errors.numError
// 	}
// 	else if(messageText.value === ''){
// 		msgError.innerText = 'Please enter some message';
// 		return console.log(messageText.value);
// 	}
// 	else{
// 		numError.innerText =  null;
// 		msgError.innerText = null;
// 		errors.numError = null;
//  eventMessage(parseCsv(text.value),'send',messageText.value,randStart,randEnd)}};

// prepare.onclick = ()=>{
// 	let data = parseCsv(text.value);
// 	if(!data){
// 		numError.innerText = 'Somethings wrong here,Please check the format';
// 		return console.log(data);
// 	}
// 	else{
// 		numError.innerText = null;
// 	eventMessage(data,'prep',messageText.value,randStart,randEnd)}};

