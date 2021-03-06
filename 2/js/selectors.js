$(document).ready(function() {
  // $("*").css({
  //     "background-color": "black",
  //     "color": "white"
  // });

  //background white && black on button click
  const $blackBackground = $("*");

  $(".allBlack").on("click", function() {
    $blackBackground.css({
      "background-color": "black",
      color: "white"
    });
    $(this).on("click", function() {
      $blackBackground.css({
        "background-color": "white",
        color: "black"
      });
    });
  });

  //selections
  $("a[hreflang|='en']").css("border", "5px double green");
  // $("a[href='thereissomeexample.html']").fadeOut("10");

  // $("li[class$='B']").mouseover(function(){
  //     $(this).hide(3000)
  // });

  // ΦΘΟΝΟΣ
  // $("ul li:nth-child(2)").mouseover(function(){
  //     $(this).css({
  //         "font-size": "2em",
  //         "color": "aqua"
  //     });
  // });

  //select letter O
  // $("li*:contains('Α')").css("text-decoration", "underline");

  //change attributes
  $("div>a").attr("href", "https://johnresig.com");
  $("#nameValueSelector>a:odd").attr("href", "https://brendaneich.com");
  $("div a:nth-child(3)")
    .text("Ryan Dahl")
    .attr("href", "http://ryandahl.com");

  //button animate
  $(".grow-big-sins").click(function() {
    const $ul = $(".seven-sins");
    $ul.css("list-style-type", "none");
    $ul.animate(
      {
        width: "70%",
        opacity: 0.5,
        marginLeft: ".7em",
        fontSize: "3em"
      },
      1500
    );
  });

  $(".doubleClick").on("dblclick", function() {
    $(".growBig").animate({ fontSize: "4em", opacity: 0.3 }, 3000);
  });

  $("pre").on({
    mouseenter: function() {
      $(this).css("background-color", "lightGrey");
    },
    mouseleave: function() {
      $(this).css("background-color", "white");
    },
    click: function() {
      $(this).css("background-color", "lightBlue");
    }
  });

  $("input").keypress(function(event) {
    if (event.which == 13) {
      $(".keyPressed").text("you pressed enter");
    }
  });
  $("input").on("keypress", function(e) {
    $(".keyPressed").text(e.type + " : " + e.which);
  });

  // Add a p to article
  const $leaveDoc = $("article");

  $leaveDoc
    .append(
      "<p>Before you leave pass over with your mouse to underline the text and upon leaving click me</p>"
    )
    .addClass("go")
    .on("mouseenter", function() {
      $(this).css("text-decoration", "underline");
    });

  const $section = $("section");

  $section
    .append("<h3>Here comes Santa Claus. But he doesnt have any gifts!</h3>")
    .addClass("sect")
    // .removeClass("")
    .on({
      mouseenter: function() {
        $(this).css("background-color", "pink");
      },
      mouseleave: function() {
        $(this).css("background-color", "orange");
      }
    });

  // change css on mouse enter event
  //   $("article").on("mouseenter", function() {
  //     $(this).css("text-decoration", "underline");
  //   });

  // DOM traverse
  //   const $allToClassGo = $("article").parents();
  //   $allToClassGo.addClass("go");

  //   const $childrenToClass = $("#listSelection").children();
  //   $childrenToClass.addClass("go");

  //   const $parentLi = $(".listA").parent();
  //   $parentLi.on({
  //     mouseenter: function() {
  //       $(this).addClass("go");
  //     },
  //     mouseleave: function() {
  //       $(this).removeClass("go");
  //     }
  //   });

  //   $("li[class$='B']") // a class that ends with B
  //     .addClass("box")
  //     .removeClass("listB");

  // Add nodes to html
  const $newP = $("<p>THIS IS SPARTA!!</p>");

  $("article").append($newP);
});
