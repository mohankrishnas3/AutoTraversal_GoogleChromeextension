var url;
var fileid;
  
chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    url = tabs[0].url;
    // use `url` here inside the callback because it's asynchronous!
    var parts = url.match(/\/d\/(.+)\//);
  if (parts == null || parts.length < 2) {
    fileid= url;
  } else {
    fileid = parts[1];
    console.log(fileid);
  }
});

//     chrome.identity.getAuthToken({interactive: true}, function(token) {
//       let init = {
//         method: 'GET',
//         async: true,
//         headers: {
//           Authorization: 'Bearer ' + token,
//           'Content-Type': 'application/json'
//         },
//         'contentType': 'json'
//       };
//       fetch(
//           'https://www.googleapis.com/drive/v2/files/'+fileid+'/comments?key=AIzaSyDLAy6mAlGhRQxxO3ZGX2T-VuZ-6kNVqyE',
//           init)
//           .then((response) => response.json())
//           .then(function(data) {
//           	console.log(state)
// 			console.log(data)
// chrome.tabs.query({active:true,currentWindow:true},function(tabs){
// 	chrome.tabs.sendMessage(tabs[0].id , {comments :data  , active:state})
// 	   })
//             }
//         });
    

let btn = document.querySelector('.switch');
let text = document.querySelector('#state')
let state = false
btn.addEventListener('click',()=>{
	if(!state){
		text.innerText = 'On'
		state = true
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
          'https://www.googleapis.com/drive/v2/files/'+fileid+'/comments?key=AIzaSyAKEG6a2HiQ3FDyVJonAK2nmamViZRaMQ4',
          init)
          .then((response) => response.json())
          .then(function(data) {
          	console.log(state)
			console.log(data)

chrome.tabs.query({active:true,currentWindow:true},function(tabs){
	chrome.tabs.sendMessage(tabs[0].id , {comments :data  , active:state})
	   })
	});
}) ;
	}
	else{
		text.innerText = 'Off'
		state = false
chrome.tabs.query({active:true,currentWindow:true},function(tabs){
	chrome.tabs.sendMessage(tabs[0].id , { active:state})
   })}

})
  


 