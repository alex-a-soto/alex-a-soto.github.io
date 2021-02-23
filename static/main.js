window.addEventListener("load", function(){
    let social = document.getElementById("footnotes");
    document.getElementById("footnotes").innerHTML +=
"<a href='https://news.ycombinator.com/submitlink?u=&t=' target='_blank' title='Share on Hacker News' onclick='window.open('https://news.ycombinator.com/submitlink?u=' + encodeURIComponent(document.URL) + '&t=' + encodeURIComponent(document.title)); return false;' class='ui hacker news button'><i class='hacker news icon'></i>Share</a>"
});
