import React from "react";
import { BsGithub } from "react-icons/bs";

const Content = ({users}) => {
  return (
    <>
      <div
        className="container-fluid text-white py-2"
        style={{ backgroundColor: "#c44569" }}
      >
        <h1 className="text-center">Github Users Data</h1>
      </div>
      <div className="container mb-3">
        <div className="row">
          {users.map((curElem, i) => {
            const { login, id, avatar_url, html_url, type } = curElem;

            return (
              <>
                <div className="col-md-2 col-6 mt-3" key={id}>
                  <div className="card" style={{ width: "100%" }}>
                    <img
                      src={avatar_url}
                      className="card-img-top img-fluid"
                      alt="pic"
                    />
                    <div className="card-body">
                      <h6
                        className="card-title text-center"
                        style={{ fontSize: "15px" }}
                      >
                        <b>Name</b> : <i style={{color: "green", fontSize: "16px"}}>{login}</i>
                      </h6>
                      <h6 className="text-center">
                        <BsGithub /> {type}
                      </h6>
                      <ul
                        style={{
                          listStyleType: "none",
                          padding: "0",
                          margin: "0",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <li
                          style={{
                            backgroundColor: "#9b59b6",
                            padding: "4px 0",
                            width: "100%",
                            textAlign: "center",
                            letterSpacing: "0.5px",
                            borderRadius: "5px",
                          }}
                        >
                          <a
                            href={html_url}
                            style={{
                              color: "#fff",
                              textDecoration: "none",
                              fontSize: "14px",
                            }}
                            target="_blank"
                          >
                            Github Account
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Content;
