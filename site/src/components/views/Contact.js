import React, { Component } from "react";
import Jump from "react-reveal/Jump";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      name: "",
      email: ""
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { body, name, email } = this.state;
    return (
      <div style={{}}>
        <div
          style={{
            paddingTop: 50,
            display: "flex",

            justifyContent: "center"
          }}
        >
          <div
            style={{
              padding: 20,
              textAlign: "center",
              justifyContent: "flex-start"
            }}
          >
            <form
              action="https://sendpoint.io/id/gWFzbxh9O"
              method="POST"
              style={{}}
            >
              <div class="row">
                <div class="col-md">
                  <Jump>
                    <i
                      class="fas fa-mail-bulk"
                      style={{ fontSize: 80, color: "white" }}
                    ></i>
                  </Jump>
                </div>
                <div style={{ padding: 10 }}></div>
                <div class="col-md">
                  <input
                    style={{
                      padding: 5
                    }}
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                    placeholder="Name"
                  />
                  <div style={{ padding: 10 }}></div>
                  <input
                    style={{
                      padding: 5
                    }}
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    placeholder="Email"
                  />
                </div>
              </div>
              <div style={{ padding: 20 }}></div>
              <textarea
                rows="4"
                cols="50"
                class=""
                type="text"
                name="body"
                placeholder="Leave a message"
                style={{
                  textAlign: "left",
                  width: "90%",
                  color: "black"
                }}
                value={this.state.body}
                onChange={this.onChange}
              />
              <div style={{ padding: 20 }}></div>
              <input
                className="btn-dark"
                type="submit"
                value="send"
                onClick={e => {
                  if (body == "" || email == "" || name == "") {
                    e.preventDefault();
                    window.alert("Please fill out form");
                  }
                }}
              />
            </form>
            <p
              style={{
                color: "white",
                fontSize: "30",
                fontWeight: "bold",
                padding: 30
              }}
            >
              Mail system powered by my friend Tim Wheeler's{" "}
              <a href="https://sendpoint.io/" style={{ color: "#A5FE00" }}>
                https://sendpoint.io/
              </a>
            </p>
          </div>
        </div>

        <div style={{ paddingBottom: 1000 }}></div>
      </div>
    );
  }
}
