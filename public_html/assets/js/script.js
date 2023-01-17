
// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// protfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    });
});


var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('sumbit-error')

function vaildateName(){
  var name = document.getElementById('contact-name').value
  
  if(name.length == 0){
    nameError.innerHTML = 'Name is required';
    return false;
  }
  if(!name.match(/^[a-zA-Z]*\s{1}[a-zA-Z]*$/)){
    nameError.innerHTML = 'Write the full name';
    return false;
  }
  nameError.innerHTML = 'vaild';
  return true;
  
}

function vaildateEmail(){
  var email = document.getElementById('contact-email').value
  
  if(email.length == 0){
    emailError.innerHTML = 'Email is required';
    return false;
  }
  var regx = /^\S+@\S+\.\S+$/;
  if(regx.test(email) === false){
    emailError.innerHTML = 'Invaild email';
    return false;
  }
  emailError.innerHTML = 'vaild';
  return true;
  
}

function vaildateMessage(){
  var message = document.getElementById('contact-msg').value
  var minReq = 10;
  var left = minReq - message.length

  if(left>0){
    messageError.innerHTML = left+'more characters';
    return false;
  }
  messageError.innerHTML = 'vaild';
  return true;
}

function vaildateForm(){
  if(!vaildateName() || !vaildateEmail() || !vaildateMessage()){
    submitError.innerHTML = 'It incomplete , fill all';
    return false

  }
  
  
  
}

// google maps
// function initMap() {
// // Styles a map in night mode.
//     var map = new google.maps.Map(document.getElementById('map'), {
//         center: {lat: 10.011243, lng: 76.232164},
//         zoom: 12,
//         scrollwheel:  false,
//         navigationControl: false,
//         mapTypeControl: false,
//         scaleControl: false,
//       styles: [
//         {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
//         {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
//         {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
//         {
//           featureType: 'administrative.locality',
//           elementType: 'labels.text.fill',
//           stylers: [{color: '#d59563'}]
//         },
//         {
//           featureType: 'poi',
//           elementType: 'labels.text.fill',
//           stylers: [{color: '#d59563'}]
//         },
//         {
//           featureType: 'poi.park',
//           elementType: 'geometry',
//           stylers: [{color: '#263c3f'}]
//         },
//         {
//           featureType: 'poi.park',
//           elementType: 'labels.text.fill',
//           stylers: [{color: '#6b9a76'}]
//         },
//         {
//           featureType: 'road',
//           elementType: 'geometry',
//           stylers: [{color: '#38414e'}]
//         },
//         {
//           featureType: 'road',
//           elementType: 'geometry.stroke',
//           stylers: [{color: '#212a37'}]
//         },
//         {
//           featureType: 'road',
//           elementType: 'labels.text.fill',
//           stylers: [{color: '#9ca5b3'}]
//         },
//         {
//           featureType: 'road.highway',
//           elementType: 'geometry',
//           stylers: [{color: '#746855'}]
//         },
//         {
//           featureType: 'road.highway',
//           elementType: 'geometry.stroke',
//           stylers: [{color: '#1f2835'}]
//         },
//         {
//           featureType: 'road.highway',
//           elementType: 'labels.text.fill',
//           stylers: [{color: '#f3d19c'}]
//         },
//         {
//           featureType: 'transit',
//           elementType: 'geometry',
//           stylers: [{color: '#2f3948'}]
//         },
//         {
//           featureType: 'transit.station',
//           elementType: 'labels.text.fill',
//           stylers: [{color: '#d59563'}]
//         },
//         {
//           featureType: 'water',
//           elementType: 'geometry',
//           stylers: [{color: '#17263c'}]
//         },
//         {
//           featureType: 'water',
//           elementType: 'labels.text.fill',
//           stylers: [{color: '#515c6d'}]
//         },
//         {
//           featureType: 'water',
//           elementType: 'labels.text.stroke',
//           stylers: [{color: '#17263c'}]
//         }
//       ]
//     });
// }
