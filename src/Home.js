import React, { Component } from "react";

class Subtitle extends Component {
  render() {
    return (
      <tr>
        <td colspan="2"></td>
        <td class="subtext">
          <span class="score" id="score_28976526">133 points</span> by <a href="user?id=rdpintqogeogsaa" class="hnuser">rdpintqogeogsaa</a>
          <span class="age" title="2021-10-24T10:19:21"><a href="item?id=28976526">3 hours ago</a></span>
          <span id="unv_28976526"></span> | <a href="hide?id=28976526&amp;goto=news">hide</a> | <a href="item?id=28976526">38&nbsp;comments</a>
        </td>
      </tr>
    );
  }
}

class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      url: ''
    }
  }

  componentDidMount() {
    fetch(`https://hacker-news.firebaseio.com/v0/item/${this.props.item}.json?print=pretty`)
    .then(res => res.json())
    .then((parsedJSON) => this.setState({
      title: parsedJSON.title,
      url: parsedJSON.url
    }))
  }

  render() {
    const {title, url }  = this.state;
    return (
      <tr class="athing" id="28976526">
        <td class="title" valign="top" align="right">
          <span class="rank">{this.props.nomer}.</span>
        </td>
        <td class="votelinks" valign="top">
          <center>
            <a id="up_28976526" href="vote?id=28976526&amp;how=up&amp;goto=news">
              <div class="votearrow" title="upvote"></div>
            </a>
          </center>
        </td>
        <td class="title">
          <a href="{url}" class="titlelink">{title}</a>
          <span class="sitebit comhead"> (<a href="{url}"><span class="sitestr">{url}</span></a>)</span>
        </td>
      </tr>
    );
  }
}

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
  }

  componentDidMount() {
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
    .then(res => res.json())
    .then((parsedJSON) => this.setState({items: parsedJSON}))
  }

  render() {
    const {items }  = this.state;
    let nomer       = 1;
    return (
      items.length > 0 ? items.map(item => {
        return (
          <><Title item={item} nomer={nomer++} /><Subtitle item={item} /></>
        );
      }) : ''
    );
  }
}

export default Home;