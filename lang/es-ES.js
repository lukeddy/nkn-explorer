import axios from 'axios'
export default () => {
  return new Promise(function(resolve) {
    axios
      .get(
        'https://raw.githubusercontent.com/nknx-org/translationfiles/master/es.json'
      )
      .then(function(response) {
        resolve(response.data)
      })
  })
}
