const tweetInput = document.getElementById('tweet-input');
const tweetButton = document.getElementById('tweet-button');
const tweetButton2 = document.getElementById('tweet-button2');
const feed = document.getElementById('feed');

let tweets = JSON.parse(localStorage.getItem('tweets')) || [];

function renderTweets() {
    feed.innerHTML = '';
    tweets.forEach((tweet, index) => {
        const tweetElement = document.createElement('div');
        tweetElement.className = 'tweet';
        tweetElement.innerHTML = `
            <p id="kal">${tweet.content}</p>
            <button onclick="likeTweet(${index})">Like${index}</button>
            <button onclick="retweet(${index})">Retweet${index}</button>
        `;
        feed.appendChild(tweetElement);
    });
}

tweetButton.addEventListener('click', () => {
    const tweetContent = tweetInput.value.trim();
    if (tweetContent) {
        tweets.push({ content: tweetContent });
        localStorage.setItem('tweets', JSON.stringify(tweets));
        tweetInput.value = '';
        renderTweets();
    }
});

tweetButton2.addEventListener('click', () => {
    const tweetContent = tweetInput.value.trim();
    if (tweetContent) {
        tweets.push({ content: tweetContent });
        localStorage.setItem('tweets', JSON.stringify(tweets));
        tweetInput.value = '';
        renderTweets();
    }
});
function likeTweet(index) {
    index=0;
    index++;
}

function retweet(index) {
    // Logic to retweet index=0;
}

renderTweets();
function following(){
    document.getElementById('container2').style.display="flex";
    document.getElementById('container').style.display="none";
    document.getElementById('following').style.borderBottom="#1da1f2 solid 2px";
    document.getElementById('for_you').style.borderBottom="#1da1f2 solid 0px";
}
function for_you(){
    document.getElementById('container2').style.display="none";
    document.getElementById('container').style.display="flex";
    document.getElementById('following').style.borderBottom="#1da1f2 solid 0px";
    document.getElementById('for_you').style.borderBottom="#1da1f2 solid 2px";
}
function menu(){
    const menuBtn =document.getElementById('menubtn');
    const menu = document.querySelector('header');
    menu.classList.toggle('menu-open');
}
function load(){
    const use = JSON.parse(localStorage.getItem('profile')) || [];
    document.getElementById('Username').innerText=use.name;
    document.getElementById('userid').innerText="@" + use.name + use.id;
}