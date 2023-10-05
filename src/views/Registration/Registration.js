import React from "react";

function Registration() {
  return (
    <>
      <div className="container p-5 mt-5 shadow border-black ">
        <form>
          <div className="full-name-container container">
            <div className="rg-header-container">
              <h1 className="mb-4">
                {" "}
                <i class="fa-regular fa-address-card"></i> PATIENT REGISTRATION{" "}
              </h1>
            </div>
            <div className="row">
              <div className="col-md-4">
                <input
                  type="text"
                  class="form-control"
                  id="inputtext2"
                  placeholder="PATIENT FULL NAME"
                />
              </div>
              <div className="col-md-4">
                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      class="form-control"
                      id="inputtext2"
                      placeholder="Gender"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="number"
                      class="form-control"
                      id="inputtext2"
                      placeholder="Age"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      class="form-control"
                      id="inputtext2"
                      placeholder="Blood Group"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      class="form-control"
                      id="inputtext2"
                      placeholder="City"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-4">
                <input
                  type="number"
                  class="form-control"
                  id="inputtext2"
                  placeholder="Contact Number"
                />
              </div>
              <div className="col-md-4">
                <input
                  type="date"
                  class="form-control"
                  id="inputtext2"
                  placeholder=""
                />
              </div>
              <div className="col-md-4">
                <button className="btn btn-primary px-5 ">Add Patient</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Registration;
