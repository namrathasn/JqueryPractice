// $(document).ready(function()
// {
//     $("h1").text("hai");

// }); - element selector


// $(document).ready(function()
// {
//     $("#name").text("hai");

// }); - id selector
// $(document).ready(function()
// {
//     $(".name").text("hai");

// }); - class selector

// 
// $(document).ready(function()
// {
//     $("button").dblclick(function(){
//         $("h2").text("hello im working")
//     }
//     ); double click event
// });
// $(document).ready(function()
// {
//     $("button").on("click",function(){
//         $("h2").text("hello im working")
//     }
//     ); 
// }); on event

// $(document).ready(function()
// {
//     $("button").click(function(){
//         $("h2").text("hello im working")
//     }); 
//     $("button").dblclick(function(){
//         $("h2").text("hello im working")
//     }); 
// }); multiple events
// $(document).ready(function()
// {
//     $("button").click(function(){
//         $(".box").fadeIn();
//         $(".box2").fadeIn("slow");
//         $(".box3").fadeIn(3000);
//     });
// });
// $(document).ready(function()
// {
//     $("button").click(function(){
//         $(".box").fadeOut();
//         $(".box2").fadeOut("slow");
//         $(".box3").fadeOut(3000);
//     }); -fade out
// });
// $(document).ready(function()
// {
//     $("button").click(function(){
//         $(".box").fadeToggle();
//         $(".box2").fadeToggle("slow");
//         $(".box3").fadeToggle(3000);
//     });
// });

// $(document).ready(function()
// {
//     $("button").click(function(){
//         $(".box").animate({left : '50%'});
        
//     });
// });

$(document).ready(function(){
    $("button").click(function(){
      $("div").animate({left: '250px'});
    });
  });




