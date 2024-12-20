const serInput = document.getElementById('search');
const file = document.getElementById('search2').files[0];
const serbtn = document.getElementById('serbtn');
const feed = document.getElementById('main');
let sent = JSON.parse(localStorage.getItem('tweets')) || [];
let random = JSON.parse(localStorage.getItem('rand')) || [];
rag = "Hi i am a bot";




function renderTweets() {

    sent.forEach((tweet, index) => {
        const tweetElement = document.createElement('div');
        tweetElement.className = 'sent';
        tweetElement.innerHTML = `
            <p id="kal">${tweet.content}</p>
        `;
        feed.appendChild(tweetElement); 
        const tweetElements = document.createElement('div');
            tweetElements.className = 'gen';
            tweetElements.innerHTML = ` <p id="kal">${rag}</p>`;
            feed.appendChild(tweetElements);
    });

    document.getElementById('red').style.display='none';
    window.scrollBy(0, window.innerHeight);

}


serbtn.addEventListener('click',(e) => {
    e.preventDefault;
    const tweetContent = serInput.value.trim();
    if (tweetContent) {
        // const formData = new FormData();
        // formData.append("text",serInput.value);
        // formData.append('file', file);

        // const resp = await fetch("https/summarize.com", {
        //     method:'POST',
        //     body: formData
        // });

        // const result = await resp.json();
        // result = "Welcome back here is your summary";
       sent.push({ content: tweetContent });
    //    response.push({content: result});
       localStorage.setItem('tweets', JSON.stringify(sent));
    //    localStorage.setItem('rand', JSON.stringify(response));
        // serInput.value = '';
        renderTweets();
    }
});

    renderTweets();