import React from 'react';

class ResumeView extends React.Component {
  componentDidMount() {
    let title = document.title;

    document.title = `${title} | San Francisco, CA | Résumé`;
  }

  render() {
    return (
      <p>résumé view</p>
    )
  }
};

export default ResumeView;
