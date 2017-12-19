var html = "";
var count = 0;
var quotes = [
  {"id": 0, "color": "purple", mewtwo: "I see now that the circumstances of one's birth are irrelevant. It is what you do with the gift of life that determines who you are."},
  {"id": 1, "color": "green", khanacademy: "Failing is just another word for growing and you keep going. This is learning."},
  {"id": 2, "color": "blue", oak: "There is a time and place for everything, but not now!"}
];
var twitter_text = "";


function query_twitter_text()
{
  for (var word in twitter_text)
  {
      console.log(word);
  }
}


function twitter_relocation()
{
  location.href = "https://www.google.com/";
}




$(document).ready(function() {
  $("#new_quote").on("click", function() {
    $(".quote").hide();
    for (var key in quotes) {

      if (count === 0)
      {
        html += "<div class='quote'>";
        html += "<h5>" + quotes[0]["mewtwo"] + "</h5>";
        html += "<p> -" + "Mewtwo" + "</p>";
        $(".quote").html(quotes[key]).fadeIn(1500);
        $(".quote").html(html);
        html = "";
        twitter_text += quotes[0]["mewtwo"] + " Mewtwo, Pokemon The First Movie: Mewtwo Strikes Back";
        console.log(twitter_text);
        query_twitter_text();
        break;
      }
      else if (count === 1)
      {
        html += "<div class='quote'>";
        html += "<h5>" + quotes[1]["khanacademy"] + "</h5>";
        html += "<p> -" + "Khan Academy" + "</p>";
        $(".quote").html(quotes[key]).fadeIn(1500);
        $(".quote").html(html);
        html = "";
        break;
      }
      else if (count === 2)
      {
        html += "<div class='quote'>";
        html += "<h5>" + quotes[2]["oak"] + "</h5>";
        html += "<p> -" + "Professor Oak" + "</p>";
        $(".quote").html(quotes[key]).fadeIn(1500);
        $(".quote").html(html);
        html = "";
        break;
      }
    }
    count++;
    if (count >= 3) {
      count = 0;
    }
  });

  // $(".twitter-button").on("click", function() {
  //
  // }

});
