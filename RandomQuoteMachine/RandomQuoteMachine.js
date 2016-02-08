var quotes = [["Great minds discuss ideas; average minds discuss events; small minds discuss people.", "Eleanor Roosevelt"], 
              ["The mediocre teacher tells. The good teacher explains. The superior teacher demonstrates. The great teacher inspires.", "William Arthur Ward"],
              ["After climbing a great hill, one only finds that there are many more hills to climb.", "Nelson Mandela"],
              ["If you cannot do great things, do small things in a great way.", "Napoleon Hill"],
              ["Great achievement is usually born of great sacrifice, and is never the result of selfishness.", "Napoleon Hill"],
              ["I have a plan! And it's as hot as my pants!!!", "Lord Flashheart"],
              ["I refuse to answer that question on the grounds that I don't know the answer.", "Douglas Adams"],
              ["Before you criticize someone, walk a mile in their shoes. That way, you'll be a mile from them, and you'll have their shoes.", "Jack Handey"],
              ["A fanatic is one who can't change his mind and won't change the subject.", "Sir Winston Churchill"],
              ["He has all the virtues I dislike and none of the vices I admire.", "Sir Winston Churchill"],
              ["History will be kind to me for I intend to write it.", "Sir Winston Churchill"],
              ["Humans are not proud of their ancestors, and rarely invite them round to dinner.", "Douglas Adams"],
              ["I love deadlines. I like the whooshing sound they make as they fly by.", "Douglas Adams"],
              ["In the beginning the Universe was created. This has made a lot of people very angry and has been widely regarded as a bad move.", "Douglas Adams"],
              ["It is no coincidence that in no known language does the phrase 'As pretty as an Airport' appear.", "Douglas Adams"],
              ["The ships hung in the sky in much the same way that bricks don't.", "Douglas Adams"],
              ["Time is an illusion. Lunchtime doubly so.", "Douglas Adams"],
              ["Anyone who is capable of getting themselves made President should on no account be allowed to do the job.", "Douglas Adams"],
			  ["Always be wary of any helpful item that weighs less than its operating manual.", "Terry Pratchett"],
              ["Don't Panic.", "Douglas Adams"],
              ["Nothing travels faster than the speed of light, with the possible exception of bad news, which obeys its own special laws.", "Douglas Adams"],
              ["I'd far rather be happy than right any day.", "Douglas Adams"],
              ["Real stupidity beats artificial intelligence every time", "Terry Pratchett"],
              ["Stories of imagination tend to upset those without one.", "Terry Pratchett"]
			 ];

// Display the quote
jQuery(document).ready(function() {
    populateHtml();
});

jQuery("#newQuote").click(function() {
    populateHtml();
});


function populateHtml() {
    
  var randomNo = Math.floor((Math.random() * quotes.length));
      
  jQuery("#quote").text(quotes[randomNo][0]);
  jQuery("#author").text(quotes[randomNo][1]);
  jQuery("#tweet").attr("href", "https://twitter.com/intent/tweet?text=" + quotes[randomNo][0] + ' - ' + quotes[randomNo][1]); 
}


