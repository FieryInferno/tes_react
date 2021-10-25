import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Subtitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: '',
      by: '',
      time: '',
      descendants: ''
    }
  }

  componentDidMount() {
    fetch(`https://hacker-news.firebaseio.com/v0/item/${this.props.item}.json?print=pretty`)
    .then(res => res.json())
    .then((parsedJSON) => this.setState({
      score: parsedJSON.score,
      by: parsedJSON.by,
      time: parsedJSON.time,
      descendants: parsedJSON.descendants
    }))
  }

  lamaPosting(time) {
    let waktuSekarang = ~~(Date.now() / 1000);
    let selisih       = waktuSekarang - time;
    let lamaWaktu;

    if (selisih >= 0 && selisih < 60) {
      lamaWaktu = String(selisih) + ' seconds ago';
    } else if (selisih >= 60 && selisih < 3600) {
      lamaWaktu = String(~~(selisih / 60)) + ' minutes ago';
    } else if (selisih >= 3600 && selisih < 86400) {
      lamaWaktu = String(~~(selisih / 3600)) + ' hours ago';
    } else if (selisih > 86400) {
      lamaWaktu = `${String(~~(selisih / 86400))} days ago`;
    }

    return (
      lamaWaktu
    )
  }

  render() {
    const {score, by, time, descendants }  = this.state;
    return (
      <tr>
        <td colspan="2"></td>
        <td class="subtext">
          <span class="score" id="score_28976526">{score} points</span> by <a href="user?id=rdpintqogeogsaa" class="hnuser">{by}</a>
          <span class="age" title="2021-10-24T10:19:21"><a href="item?id=28976526"> {this.lamaPosting(time)}</a></span>
          <span id="unv_28976526"></span> | <a href="hide?id=28976526&amp;goto=news">hide</a> | <a href="item?id=28976526">{descendants}&nbsp;comments</a>
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

class More extends Component {
  render() {
    let {token }  = this.props;
    let url       = isNaN(token) ? '/Home?p=2' : '/Home?p=' + String(token + 2);
    return (
      <>
        <tr class="spacer" style={{ height: "5px" }}></tr>
        <tr class="morespace" style={{ height: "10px" }}></tr>
        <tr>
          <td colspan="2"></td>
          <td class="title">
            <NavLink to={url}>More</NavLink>
          </td>
        </tr>
      </>
    )
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
    const query     = new URLSearchParams(this.props.location.search);
    const newLocal  = query.get('p');
    let token       = parseInt(newLocal) - 1;

    const {items }  = this.state;
    let awal        = (30 * token) - 1;
    let akhir       = 30 * (token + 1) - 1;
    let item        = isNaN(token) ? items.filter((x, y) => y <= 29) : items.filter((x, y) => y > awal && y <= akhir);
    let nomer       = isNaN(token) ? 1 : 1 + (30 * token);
    let nomer_temp  = isNaN(token) ? 1 : 1 + (30 * token);

    return (
      item.length > 0 ? item.map(item => {
        return (
          <>
            <Title item={item} nomer={nomer++} />
            <Subtitle item={item} />
            {
              nomer == nomer_temp + 30 ? <More token={token}/> : ''
            }
          </>
        );
      }) : ''
    );
  }
}

export default Home;