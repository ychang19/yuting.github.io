$(document).ready(function() {
  $('#largeimg').on('click', function() {
    $('#firstimg').fadeIn();
    $('#first-imageA').fadeIn();
    $('#first-imageB').fadeIn();
    
  });

  $('#first-imageA').on('click', function() {
    $('#secondimg1').fadeIn();
    $('#second-imageA').fadeIn();
    $('#second-imageAB').fadeIn();
  });

  $('#first-imageB').on('click', function() {
    $('#secondimg2').fadeIn();
    $('#second-imageB').fadeIn();
    $('#second-imageBB').fadeIn();
  });

  $('#second-imageA').on('click', function() {
    $('#thirdimg1').fadeIn();
    $('#third-imageA').fadeIn();
    $('#third-imageAB').fadeIn();
  });

    $('#second-imageAB').on('click', function() {
    $('#thirdimg2').fadeIn();
    $('#third-imageB').fadeIn();
    $('#third-imageBB').fadeIn();
  });

     $('#second-imageB').on('click', function() {
    $('#thirdimg3').fadeIn();
    $('#third-imageC').fadeIn();
    $('#third-imageCB').fadeIn();
  });

       $('#second-imageBB').on('click', function() {
    $('#thirdimg4').fadeIn();
    $('#third-imageD').fadeIn();
    $('#third-imageDB').fadeIn();
  });

        $('.small-image').hover(function() {
    $(this).css('transform', 'scale(1.5)');
  }, function() {
    $(this).css('transform', 'scale(1)');
  });

        $('.pclass').on('click', function() {
    var clickedId = $(this).attr('id');
    var additionalTextId = clickedId + "-additional";
    $('#' + additionalTextId).fadeIn();
  });










});

