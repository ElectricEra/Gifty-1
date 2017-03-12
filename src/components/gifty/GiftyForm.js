import React from "react";
import {IndexLink, Link} from 'react-router';
import { connect } from 'react-redux';
import {LoginWrapper, InputWrapper} from '../materialize';

export default class GiftyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "What your friend likes?"
    }

    this.handleGenerate = this.handleGenerate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleGenerate(event) {
    console.log(event.target.inneHTML);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  render() {
    return (
      <LoginWrapper>
        <div className="row center gifty-form">
            <img src="images/gifty-blue.svg" alt="Gifty" className="valign my-profile-image-login" />
        </div>
        <div className="row center">
            <span>Describe a person, who will recieve a gift</span>
        </div>
        <div className="row">
          <InputWrapper>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" className="validate" />
          </InputWrapper>
            <InputWrapper>
              <span className="my-checkbox-padding">
                  <input name="group1" type="radio" id="male" />
                  <label htmlFor="male">Male</label>
              </span>
              <span className="my-checkbox-padding">
                  <input name="group1" type="radio" id="female" />
                  <label htmlFor="female">Female</label>
              </span>
            </InputWrapper>
            <InputWrapper>
                <label htmlFor="number">Age</label>
                <input id="number" type="number" className="validate" />
            </InputWrapper>
            <InputWrapper>
                <label htmlFor="price">How much are you ready to spend?</label>
                <input id="price" type="number" className="validate" />
            </InputWrapper>
            <InputWrapper>
            <form id="tags">
                <div className="row">
                  <div className="col s12 l6">
                      <p>
                          <input type="checkbox" id="sport" value="sport" />
                          <label htmlFor="sport">Sport</label>
                      </p>
                      <p>
                          <input type="checkbox" id="travel" value="travel" />
                          <label htmlFor="travel">Travel</label>
                      </p>
                      <p>
                          <input type="checkbox" id="gadgets" value="gadgets" />
                          <label htmlFor="gadgets">Gadgets</label>
                      </p>
                      <p>
                          <input type="checkbox" id="reading" value="reading" />
                          <label htmlFor="reading">Reading</label>
                      </p>
                  </div>
                  <div className="col s12 l6">
                      <p>
                          <input type="checkbox" id="gaming" value="gaming" />
                          <label htmlFor="gaming">Gaming</label>
                      </p>
                      <p>
                          <input type="checkbox" id="music" value="music" />
                          <label htmlFor="music">Music</label>
                      </p>
                      <p>
                          <input type="checkbox" id="art" value="art" />
                          <label htmlFor="art">Art</label>
                      </p>
                      <p>
                          <input type="checkbox" id="cooking" value="cooking" />
                          <label htmlFor="cooking">Cooking</label>
                      </p>
                  </div>
              </div>
                </form>
              </InputWrapper>
            <InputWrapper onClick={this.handleGenerate} className="center">
              <Link to="generated" className="waves-effect waves-light btn my-theme-color my-button">Generate</Link>
            </InputWrapper>
         </div>
       </LoginWrapper>
    )}
};
