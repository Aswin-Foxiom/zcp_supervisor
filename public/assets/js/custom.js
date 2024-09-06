/*------------------------------------- Onboarding Screen -------------------------------------*/
$(document).on('click', '.skip_btn_1', function(){
  $("#first").removeClass("active");
  $(".first_slide").removeClass("active");  
  $("#second").addClass("active");
  $(".second_slide").addClass("active");
});

$(document).on('click', '.skip_btn_2', function(){
  $("#second").removeClass("active");
  $(".second_slide").removeClass("active");
  $("#third").addClass("active");
  $(".third_slide").addClass("active");
});

/*------------------------------------- Show Hide Password -------------------------------------*/
$(document).on('click', '#eye, #eye1', function() {
  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $(this).parent().find("input");
  if (input.attr("type") === "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});

/*-------------------------------------OTP Section-------------------------------------*/
$(document).ready(function() {
  if ($('#otp').length > 0) {
    $('.digit-group').find('input').each(function() {
      $(this).attr('maxlength', 1);
      
      // Check if input already has a value and add the "filled" class
      if ($(this).val() !== '') {
        $(this).addClass('filled');
      }
      
      $(this).on('keyup', function(e) {
        var thisVal = $(this).val();
        var parent = $($(this).parent());
        
        if (e.keyCode === 8 || e.keyCode === 37) {
          $(this).removeClass('filled'); // Remove class from current input
          var prev = parent.find('input#' + $(this).data('previous'));
          if (prev.length) {
            $(prev).select();
          }
        } else {
          var next = parent.find('input#' + $(this).data('next'));

          if (!$.isNumeric(thisVal)) {
            $(this).val('');
            return false;
          }

          if (next.length) {
            $(this).addClass('filled'); // Add class to current input
            $(next).select();
          } else {
            $(this).addClass('filled'); // Add class to current input if it's the last one
            if (parent.data('autosubmit')) {
              parent.submit();
            }
          }
        }
      });
    });
  }
});

/*------------------------------------- Prefrered language -------------------------------------*/
$(document).on('click', '.language-sec-wrap', function() {
  $('.language-sec-wrap').removeClass('selected');
  $(this).addClass('selected');
  $(this).find('input').prop('checked', true);
});

/*------------------------------------- Delete Or Deactive -------------------------------------*/
function continueAction() {
  const form = document.getElementById('deleteDeactivateForm');
  const selectedAction = form.querySelector('input[name="action"]:checked').value;
  if (selectedAction === 'delete') {
    window.location.href = 'delete-account.html';
  } else if (selectedAction === 'deactivate') {
    window.location.href = 'deactive-account.html';
  }
}

/*------------------------------------- Invite friend -------------------------------------*/
$(document).ready(function() {
  $(document).on('click', '.friend-select input', function() {
    var content = $(this);
    if (content.is(":checked")) {
      content.parent().addClass("active");
      content.parent().siblings().children(".custom-radio-sel-friend").addClass("active");
    } else {
      content.parent().siblings().children(".custom-radio-sel-friend").removeClass("active");
      content.parent().removeClass("active");
    }

    if (content.parent().hasClass('active')) {
      content.parent().children(".custom-radio-sel-friend").text("Invite");
    } else {
      content.parent().children(".custom-radio-sel-friend").text("Invited");
    }
  });
});

/*------------------------------------- Infinite Marquee -------------------------------------*/
document.querySelectorAll('.logos').forEach(function (logosContainer) {
  const copy = logosContainer.querySelector('.logos-slide').cloneNode(true);
  logosContainer.appendChild(copy);
});

/*------------------------------------- Favourite Hide Show -------------------------------------*/
$('.item-bookmark').on('click',function(){
  $(this).toggleClass('active');
}); 

/*------------------------------------- Read More Text-------------------------------------*/
$(document).on('click', '.moreless-button', function() {
  $('.moretext').toggleClass('d-inline');

  if ($(this).text() == "Read less") {
    $(this).text("Read more");
  } else {
    $(this).text("Read less");
  }
});

/*------------------------------------- Increment Decrement-------------------------------------*/
$(document).on('click', '.add', function() {
  let input = $(this).prev();
  if (input.val() < 100) {
    input.val(+input.val() + 1);
  }
});

$(document).on('click', '.sub', function() {
  let input = $(this).next();
  if (input.val() > 1) {
    input.val(+input.val() - 1);
  }
});

/*-------------------------------------Toggle method -------------------------------------*/
function toggleConnection(element) {
  let isConnected = element.innerText === 'Connected';
  isConnected = !isConnected;
  if (isConnected) {
    element.innerText = 'Connected';
    element.style.color = '#00D061';
    element.style.cursor = 'pointer'
  } else {
    element.innerText = 'Not Connected';
    element.style.color = '#FC342F';
    element.style.cursor = 'pointer';
  }
}
$(document).ready(function() {
  $('.progress-row').each(function() {
    var percentage = $(this).data('percentage');
    $(this).find('.progress-bar').append('<div></div>').find('div').css('width', percentage + '%');
    $(this).find('.percentage').text(percentage + '%');
  });
});

/*------------------------------------- Star Rating-------------------------------------*/
$(document).on('click', '.rating-sec', function() {
    // Remove 'active' class from all and add it to the clicked element
    $('.rating-sec').removeClass('active');
    $(this).addClass('active');

    // Update star images based on the active class
    $('.rating-sec').each(function() {
      const starImg = $(this).find('.filter-star-img img');
      const imgSrc = $(this).hasClass('active') ? 'assets/svg/white-star.svg' : 'assets/svg/grey-star.svg';
      starImg.attr('src', imgSrc);
    });
  });

/*------------------------------------- Modal Popup-------------------------------------*/
$(document).ready(function() {
  $('#confirm-order-btn').on('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        $('#payment-processing-modal').modal('show');
        
        setTimeout(function() {
          $('#payment-processing-modal').modal('hide');
          $('#order-failed-modal').modal('show');
        }, 3000); // Change this value to adjust the delay
      });

  $('#order-confirmation-btn').on('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        $('#order-failed-modal').modal('hide');
        $('#order-confirmed-modal').modal('show');
      });
});

/*-------------------------------------Faq Section-------------------------------------*/
$(document).ready(function() {
  $('.nested-accordion').find('.comment').slideUp();
  $(document).on('click', '.nested-accordion h3', function() {
    $(this).next('.comment').slideToggle(100);
    $(this).toggleClass('selected');
  });
});

/*------------------------------------- Payment -------------------------------------*/
// Add Text In Card
function updateLokiBox(lokiBoxId, inputField) {
  document.getElementById(lokiBoxId).innerText = inputField.value;
}

// Add Card Number 16 digit
function maskNumber() {
  let inputNumber = document.getElementById('cardNumber').value;
  let digitsOnly = inputNumber.replace(/\D/g, '');
  let maskedPart = digitsOnly.substring(0, 12).replace(/./g, '*');
  let lastPart = digitsOnly.substring(12);
  let maskedNumber = maskedPart.replace(/(.{4})/g, '$1 ').trim() + ' ' + lastPart;
  document.getElementById('lokiCardNumber').textContent = maskedNumber;
}

// Add CVV Number Only Three
function validateInputcvv(inputField) {
  inputField.value = inputField.value.replace(/\D/g, '');
  if (inputField.value.length > 3) {
    inputField.value = inputField.value.slice(0, 3);
  }
  document.getElementById('lokiCVV').textContent = inputField.value;
}
$('.enter-amount input').on('click',function(){
  $(this).addClass('active');
}); 

/*-------------------------------------Update profile img-------------------------------------*/
$(document).ready(function () {
  // Function to read and display the selected image
  var readURL = function (input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $('.profile-pic').attr('src', e.target.result);
      }
      reader.readAsDataURL(input.files[0]);
    }
  };
  // Handle file input change
  $(document).on('change', '.file-upload', function () {
    readURL(this);
  });

  // Trigger file input click on button click
  $(document).on('click', '.upload-button', function () {
    $('.file-upload').click();
  });
});

/*-------------------------------------Preloder-------------------------------------*/
$(window).on("load", function() {
  $('.preloader').delay(500).fadeOut(500); 
});

/*-------------------------------------Wallet Screen-------------------------------------*/
$(".payment-mode .check-select-mode input[type='radio']").change(function(){
  var item=$(this);    
  if(item.is(":checked"))
  {
    window.location.href= item.data("target")
  }    
});

/*-------------------------------------Anchore Tag Link Added-------------------------------------*/
$(".cloth-redirect").wrap('<a href="clothes.html"></a>');
$(".single-cloth-redirect").wrap('<a href="single-clothes.html"></a>');
$(".shoes-redirect").wrap('<a href="shoes.html"></a>');
$(".single-shoes-redirect").wrap('<a href="single-shoes.html"></a>');
$(".electronic-redirect").wrap('<a href="electronics.html"></a>');
$(".single-electronic-redirect").wrap('<a href="single-electronic.html"></a>');


