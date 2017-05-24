import ReactGA from 'react-ga'

export default (newState) => {
  ReactGA.set({
    page: location.hash,
    title: newState.title
  })

  ReactGA.pageview(location.hash)
}
