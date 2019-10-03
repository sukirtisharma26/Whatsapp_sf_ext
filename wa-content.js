console.log("whatsapp extention-wa");

// let para = document.getElementsByClassName('_3Jvyf');

// for (elt of para){
//     console.log(elt);
//  elt.style["backgroud-color"]= 'yellow!important';
// }

// chrome.runtime.onMessage.addListener(gotMessage);

// function gotMessage(message,sender,sendResponse){
//     console.log(message.txt);
// }


//web whatsapp

$(window).on('load', function(){ 
  setTimeout(function(){

      $("div.app").animate({'width':'77%'}, 400);
      var div=document.createElement("div"); 
      document.body.appendChild(div); 
      div.style.cssText="display:block;margin-right:0%";
      div.id = "ext-block";

      var div2=document.createElement("div"); 
      document.getElementById('ext-block').appendChild(div2);
      div2.id = "ext-block-header";div2.innerText="test123";
      var div2=document.createElement("div"); 
      document.getElementById('ext-block').appendChild(div2);
      div2.id = "ext-block-body";
    
 }, 6000);
});

// Onclick contacts from the list
// $('body').on('click', '#side', function(){
  $(document).on('click','body #side .X7YrQ',function(){
    let attr = $(this).find('img').attr('src');
    if(attr){
      var url = new URL(attr);
      var phoneNumber = url.searchParams.get("u");
      var phoneNumberInt = phoneNumber.replace(/[a-z`~!@#$%^&*()_|+\=?; :'",.<>\{\}\[\]\\\/]/gi,'');;;

      $('div#ext-block-body').html(phoneNumberInt);
      $('div#ext-block-body').attr('data-number', phoneNumberInt);
    }else{

      $('div#ext-block-body').html('Unable to fetch number .Please open contact information and click on phone number.');
    }

  });
// });


// onclick contact info

$('body').on('click', '._6xQdq', function(){
  var phoneNumberInt =  $(this).html().replace(/[a-z`~!@#$%^&*()_|+\-=?; :'",.<>\{\}\[\]\\\/]/gi,'');

  $('div#ext-block-body').html(phoneNumberInt);
  $('div#ext-block-body').attr('data-number', phoneNumberInt);
  

});


chrome.tabs.getCurrent(function(tab){
    console.log(tab);
});
