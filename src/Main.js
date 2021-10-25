import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import New from "./New";
import Home from "./Home";
import Past from "./Past";
import Comment from "./Comment";
import Ask from "./Ask";
import Show from "./Show";
import Job from "./Job";
import "./style.css";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <center>
          <table id="hnmain" width="85%" cellspacing="0" cellpadding="0" border="0" bgcolor="#f6f6ef">
            <tbody>
              <tr>
                <td bgcolor="#ff6600">
                  <table width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                      <tr>
                        <td>
                          <a href="">
                            <img src="" width="18" height="18"/>
                          </a>
                        </td>
                        <td>
                          <span class="pagetop">
                            <b class="hnname">
                              <NavLink to="/">Hacker News</NavLink>
                            </b>
                            {/* <span class="topsel"> */}
                              <NavLink to="/New">New</NavLink>
                            {/* </span>  */}
                            | 
                            <NavLink to="/Past">Past</NavLink> | 
                            <NavLink to="/Comment">Comments</NavLink> | 
                            <NavLink to="/Ask">Ask</NavLink> | 
                            <NavLink to="/Show">Show</NavLink> |
                            <NavLink to="/Job">Jobs</NavLink> | 
                            <a href="submit">submit</a>            
                          </span>
                        </td>
                        <td>
                          <span class="pagetop">
                            <a href="login?goto=newest">login</a>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr id="pagespace" title="New Links"></tr>
              <tr>
                <td>
                  <table class="itemlist" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                      <Route exact path="/" component={Home}/>
                      <Route exact path="/Home" component={Home}/>
                      <Route exact path="/New" component={New}/>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <img src="" width="0" height="10"/>
                  <table width="100%" cellspacing="0" cellpadding="1">
                    <tbody>
                      <tr>
                        <td bgcolor="#ff6600"></td>
                      </tr>
                    </tbody>
                  </table>
                  <br/>
                  <center>
                    <span class="yclinks">
                      <a href="newsguidelines.html">Guidelines</a>
                    | <a href="newsfaq.html">FAQ</a>
                    | <a href="lists">Lists</a>
                    | <a href="https://github.com/HackerNews/API">API</a>
                    | <a href="security.html">Security</a>
                    | <a href="http://www.ycombinator.com/legal/">Legal</a>
                    | <a href="http://www.ycombinator.com/apply/">Apply to YC</a>
                    | <a href="mailto:hn@ycombinator.com">Contact</a>
                    </span>
                    <br/>
                    <br/>
                    <form method="get" action="//hn.algolia.com/">Search:
                      <input type="text" name="q" value="" size="17" autocorrect="off" spellcheck="false" autocapitalize="none" autocomplete="false"/>
                    </form>
                  </center>
                </td>
              </tr>
            </tbody>
          </table>
        </center>
      </HashRouter>
    );
  }
}

export default Main;