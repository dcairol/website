$(document).ready(function(){ // load scripts once document is ready

  // assign window height to introduction =================================================================== //
  $(function(){
    $('section#introduction').css({'height':(($(window).height())-190)+'px'});
    $(window).resize(function(){
    $('section#introduction').css({'height':(($(window).height())-190)+'px'});
    });
  });



  // scrollTo behavior ====================================================================================== //
  $("nav").onePageNav();
  $("p.contact-link").localScroll();



  // random fact load ======================================================================================= //

  $("div.fact").addClass("hidden");                                 //hide all div.fact elements on page load
  facts = new Array();                                              //create new array called 'facts'
  $(".facts").find(".fact").each(function(){                        //find divs with class fact and add them to array by their unique ids
    var id = $(this).attr("id");
    facts.push(id);
  });
  var randomNumber = Math.floor(Math.random() * facts.length);      //choose random number based on length of array 'facts'
  $(function(){                                                     //remove class 'hidden' from randomly chosen fact
    $("#" + facts[randomNumber]).removeClass("hidden");
  });




  // show popovers on click for mobile ====================================================================== //
  $("div.trigger").click(function(){
    $("div.popover, div.popover-top").is(":visible").hide();
    $(this).children("div").show();
  });
  $("h2.trigger").click(function(){
    $("div.popover, div.popover-top").is(":visible").hide();
    $(this).next().show();
  });



  // Next and Previous links for client section ============================================================= //
  $('ul.client-logos').removeClass('hidden');
  $('section.client').hide();
  $('section.client:first').show();
  $('li.perkstreet-logo-small').click(function() {
    $('section.client').hide();
    $('section#perkstreet').show();
  });
  $('li.arcadia-solutions-logo-small').click(function() {
    $('section.client').hide();
    $('section#arcadia-solutions').show();
  });
  $('li.arcadia-solutions-logo-small').click(function() {
    $('section.client').hide();
    $('section#arcadia-solutions').show();
  });
  $('li.fresh-tilled-soil-logo-small').click(function() {
    $('section.client').hide();
    $('section#fresh-tilled-soil').show();
  });
  $('li.indie-pay-logo-small').click(function() {
    $('section.client').hide();
    $('section#indie-pay').show();
  });
  $('li.tauntr-logo-small').click(function() {
    $('section.client').hide();
    $('section#tauntr').show();
  });
  $('li.w2-logo-small').click(function() {
    $('section.client').hide();
    $('section#w2').show();
  });

  checkArrows = function() {
    var hasNextElem = $('section.client:visible').next().length > 0;
    var hasPrevElem = $('section.client:visible').prev().length > 0;
    if (hasNextElem) {
      $('li.right-arrow').show();
    } else {
      $('li.right-arrow').hide();
    }
    if (hasPrevElem) {
      $('li.left-arrow').show();
    } else {
      $('li.left-arrow').hide();
    }
  }
  checkArrows();
  $('li.right-arrow').click(function() {
    $('section.client:visible').hide().next().show();
    checkArrows();
  });
  $('li.left-arrow').click(function() {
    $('section.client:visible').hide().prev().show();
    checkArrows();
  });	



  // initialize jQuery Tweet for PerkStreet ================================================================= //
  $(function(){
    $(".perkstreet-tweets").tweet({
      username: "perkstreet",
      join_text: null,
      count: 3,
      loading_text: "loading tweets..."
    });
  });



  // initialize jQuery Tweet for Arcadia Solutions ========================================================== //
  $(function(){
    $(".arcadia-solutions-tweets").tweet({
      username: "arcadiahealthit",
      join_text: null,
      count: 3,
      loading_text: "loading tweets..."
    });
  });


  // initialize jQuery Tweet for Fresh Tilled Soil ================================================================= //
  $(function(){
    $(".fresh-tilled-soil-tweets").tweet({
      username: "freshtilledsoil",
      join_text: null,
      count: 3,
      loading_text: "loading tweets..."
    });
  });


  // initialize jQuery Tweet for Tauntr ================================================================= //
  $(function(){
    $(".tauntr-tweets").tweet({
      username: "tauntr",
      join_text: null,
      count: 3,
      loading_text: "loading tweets..."
    });
  });


  // initialize jQuery Tweet for Larry Weber (W2 Group) ================================================================= //
  $(function(){
    $(".w2-tweets").tweet({
      username: "TheLarryWeber",
      join_text: null,
      count: 3,
      loading_text: "loading tweets..."
    });
  });



}); // close document.ready function. add any new script before this line
