window.onload = function () {
  let url = 'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=c18462fbd67e47d887a6eb59a302133b'

  fetch(url)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      let articles = data.articles
      console.log(articles)

      let postsWrapper = document.getElementById('posts-wrapper')

      let author = document.getElementById('author')

      articles.forEach((article) => {
        // author.textContent = article.title
        // let body = document.body
        // let postItem = document.createElement('div');
        // body.appendChild(postItem);
        let paragraph = document.createElement('p')
        paragraph.textContent = article.author || "Anonymous Author"
        paragraph.classList.add('text-danger')

        postsWrapper.appendChild(paragraph)
        // paragraph.innerHTML(article.author)
        // postItem.appendChild(paragraph)
        // postItem.classList.add('post-link', 'w-dyn-item');

        // let postLink = document.createElement('a');
        // postLink.setAttribute('aria-label', 'Blog post link');
        // postLink.href = article.url;
        // postLink.classList.add('post-link', 'w-inline-block');
      })
    })
}
