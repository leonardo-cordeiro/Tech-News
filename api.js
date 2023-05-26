window.onload = function () {
  let url = 'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=c18462fbd67e47d887a6eb59a302133b'

  fetch(url)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      let articles = data.articles
      console.log(articles)

      let postsWrapper = document.getElementById('post')

      articles.forEach((article) => {
        let postGrid = document.createElement('div')
        postGrid.classList.add('posts-grid', 'w-dyn-items')

        let postItem = document.createElement('div')
        postItem.classList.add('post-item', 'w-dyn-item')

        let postLink = document.createElement('a')
        postLink.setAttribute('aria-label', 'Blog post link')
        postLink.href = article.url
        postLink.classList.add('post-link', 'w-inline-block')

        let authors = document.createElement('p')
        authors.textContent = article.author || 'Anonymous Author'
        authors.classList.add('text-danger')

        let postTextWrapper = document.createElement('div')
        postTextWrapper.classList.add('post-text-wrapper')

        let bottom = document.createElement('div')
        bottom.classList.add('bottom')

        let heading = document.createElement('h2')
        heading.classList.add('heading', 'medium')
        heading.textContent = article.title

        let textWrapper = document.createElement('div')
        textWrapper.classList.add('text-color-4')

        let paragraph = document.createElement('div')
        paragraph.classList.add('paragraph')
        paragraph.textContent = article.description

        bottom.appendChild(heading)
        textWrapper.appendChild(paragraph)
        bottom.appendChild(textWrapper)

        postTextWrapper.appendChild(bottom)

        postsWrapper.appendChild(postGrid)
        postsWrapper.appendChild(postItem)
        postsWrapper.appendChild(postLink)
        postsWrapper.appendChild(authors)
        postsWrapper.appendChild(postTextWrapper)
        postsWrapper.appendChild(bottom)
        postsWrapper.appendChild(heading)
        postsWrapper.appendChild(textWrapper)
        postsWrapper.appendChild(paragraph)

        let postItemImageWrapper = document.createElement('div')
        postItemImageWrapper.classList.add('post-item-image-wrapper')

        let postItemImage = document.createElement('img')
        postItemImage.src = article.urlToImage
        postItemImage.loading = 'lazy'
        postItemImage.alt = article.title
        postItemImage.classList.add('post-item-image')

        postItemImageWrapper.appendChild(postItemImage)
        postLink.appendChild(postItemImageWrapper)
        postItem.appendChild(postLink)
        postsWrapper.appendChild(postItem)
      })
    })
    .catch((error) => {
      console.log('Ocorreu um erro: ', error)
    })
}
