$(document).ready(() => {
  $(".hint-box").on("click", () => {
    $(".hint").slideToggle(300);
  });

  $(".wrong-answer-one").on("click", () => {
    $(".wrong-text-one").fadeOut(300);
    $(".frown").show();
  });
  $(".wrong-answer-two").on("click", () => {
    $(".wrong-text-two").fadeOut(300);
    $(".frown").show();
  });
  $(".wrong-answer-three").on("click", () => {
    $(".wrong-text-three").fadeOut(300);
    $(".frown").show();
  });

  $(".correct-answer").on("click", () => {
    $(".frown").hide();
    $(".smiley").show();
    $(".wrong-text-one, .wrong-text-two, .wrong-text-three").fadeOut(300);
  });
});