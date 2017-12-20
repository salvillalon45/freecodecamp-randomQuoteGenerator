var quotes = [
  {"id": 0, "color": "purple", mewtwo: "I see now that the circumstances of one's birth are irrelevant. It is what you do with the gift of life that determines who you are."},
  {"id": 1, "color": "green", khanacademy: "Failing is just another word for growing and you keep going. This is learning."},
  {"id": 2, "color": "blue", oak: "There is a time and place for everything, but not now!"}
];
var html = "";
var count = 0;
var twitter_text = "";
var twitter_text_array = [];
var query_result = "";


function query_twitter_text()
{
  query_result = twitter_text.split(" ").join("%20");
  // for (var i = 0; i < twitter_text_array.length; i++)
  // {
  //   console.log(twitter_text_array[i]);
  // }
  // for (var word in twitter_text)
  // {
  //     console.log(twitter_text[word]);
  // }
  return query_result;
}


function twitter_relocation()
{
    location.href = "https://twitter.com/intent/tweet?text=" + query_twitter_text();
}




$(document).ready(function() {
  $("#new_quote").on("click", function() {
    $(".quote").hide();
    for (var key in quotes) {

      if (count === 0)
      {
        twitter_text = "";
        html += "<div class='quote'>";
        html += "<h5>" + quotes[0]["mewtwo"] + "</h5>";
        html += "<p> -" + "Mewtwo" + "</p>";
        $(".quote").html(quotes[key]).fadeIn(1000);
        $(".quote").html(html);
        html = "";
        twitter_text += quotes[0]["mewtwo"] + " Mewtwo, Pokemon The First Movie: Mewtwo Strikes Back";
        query_twitter_text();
        break;
      }
      else if (count === 1)
      {
        twitter_text = "";
        html += "<div class='quote'>";
        html += "<h5>" + quotes[1]["khanacademy"] + "</h5>";
        html += "<p> -" + "Khan Academy" + "</p>";
        $(".quote").html(quotes[key]).fadeIn(1000);
        $(".quote").html(html);
        html = "";
        twitter_text += quotes[1]["khanacademy"] + " Khan Academy, providing a world-class education for anyone, anywhere";
        query_twitter_text();
        break;
      }
      else if (count === 2)
      {
        twitter_text = "";
        html += "<div class='quote'>";
        html += "<h5>" + quotes[2]["oak"] + "</h5>";
        html += "<p> -" + "Professor Oak" + "</p>";
        $(".quote").html(quotes[key]).fadeIn(1000);
        $(".quote").html(html);
        html = "";
        twitter_text += quotes[2]["oak"] + " Professor Oak, since Pokemon Red and Green";
        query_twitter_text();
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
