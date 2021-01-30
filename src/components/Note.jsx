import React from "react";

function Note() {
  return (
    <div className="note container">
      <div className="row">
        <div className="col-md-8">
          <div className="sectioncard">Science</div>
          <div className="titlecard">
            Drug Prevents Coronavirus Infection in Nursing Homes, Maker Claims
          </div>
          <div className="datecard">2021-01-21T19:11:49+0000</div>
          <div className="abstractcard">
            A monoclonal antibody protected residents and staff members in
            facilities where the virus had appeared.
          </div>
          <a href="#" className="continuereading">
            Continue Reading
          </a>
        </div>
        <div className="col-md-4">
          <img src="https://picsum.photos/300/150" alt="science" />
        </div>
      </div>
    </div>
  );
}

export default Note;
