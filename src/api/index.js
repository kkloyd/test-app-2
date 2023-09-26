const textFetcher = (...args) => fetch(...args).then(res => res.text())

const jsonFetcher = (...args) => fetch(...args).then(res => res.json())

const URL = {
  // texts: 'https://aeontest.free.beeceptor.com/texts/'
  texts: 'https://jsonplaceholder.typicode.com/users/1/posts'
}

export default {
  URL,
  textFetcher,
  jsonFetcher
}