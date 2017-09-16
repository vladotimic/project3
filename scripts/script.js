$(document).ready(function(){
  var randomQuote;
  var randomNum;
  var randomAuthor;
  getQuote();

  function getQuote() {
    var quotes = ['Success is not final, failure is not fatal. It is the courage to continue that counts.', 'It is better to fail in originality than to succeed in imitation.', 'The road to success and the road to failure are almost exactly the same.', 'Success usually comes to those who are too busy to be looking for it.', 'Opportunities don\'t happen. You create them.', 'Don\'t be afraid to give up the good to go for the great.', 'I find that the harder I work, the more luck I seem to have.', 'Successful people do what unsuccessful people are not willing to do. Don\'t wish it were easier, wish you were better.', 'Try not to become a man of success. Rather become a man of value.', 'If you are not willing to risk the usual, you will have to settle for the ordinary.'];

    var authors = ['Winston S. Churchill', 'Herman Melville', 'Colin R. Davis', 'Henry David Thoreau', 'Chris Grosser', 'John D. Rockefeller', 'Thomas Jefferson', 'Jim Rohn', 'Albert Einstein', 'Jim Rohn'];

    var colors = ['#16a6ff', '#088c24', '#edb10d', '#ef7117', '#ef3716', '#721504', '#7308a8', '#d30abf', '#d20a49', '#f26896', '#6684ff', '#636fa0', '#0477f2', '#adb2ae', '#007231', '#049185'];

    randomNum = Math.floor((Math.random() * quotes.length));
    var randomCol = Math.floor((Math.random() * colors.length));
    randomQuote = quotes[randomNum];
    randomAuthor = authors[randomNum];
    var randomColors = colors[randomCol];

    $(".quote").text(randomQuote);
    $(".author").text(randomAuthor);
    $("body").css('background-color' ,randomColors);
    $("#heading").css('color' ,randomColors);
    $(".quote").css('color' ,randomColors);
    $(".author").css('color' ,randomColors);
    $(".quote-button").css('background-color' ,randomColors);
    $(".fa-quote-left").css('color' ,randomColors);
    $(".fa-quote-right").css('color' ,randomColors);
  }

  $("#tweet").on("click", function(){
    window.open("https://twitter.com/intent/tweet?text="+"''"+randomQuote+"''"+" said "+randomAuthor);
  });

  $(".quote-button").on("click", function(){
    getQuote();
  });

});
