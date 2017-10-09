console.log('js sourced');

$(document).ready(readyNow);

function readyNow(){
  $('.generate').on('click', generateClick);
}

var generateCount = 0;

function generateClick(){
  generateCount++;
  $newDiv = $('<div></div>');
  $('body').append($newDiv);
  $('body').append('<div><p>' + generateCount + '</p><button class="swap">Swap</button><button class="delete">Delete</button>');
  $('.swap').on('click', function(){
    $(this).parent().css('background-color', 'yellow');
  });
  $('.delete').on('click', function(){
    $(this).parent().remove();
  });
}
