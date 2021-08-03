import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeBg, resetBg } from "../../redux/bgRedux/bg.actions";
import { BG_KEY } from "../../redux/bgRedux/bg.reducer";

const Background = () => {
  let dispatch = useDispatch();

  let clickChangeColor = () => {
    dispatch(changeBg());
  };

  let clickResetBg = () => {
    dispatch(resetBg());
  };

  // view data from store
  let viewBg = useSelector((state) => {
    return state[BG_KEY];
  });
  return (
    <React.Fragment>
      <div className="row mt-5">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="card text-center">
            <div className="card-header pt-4">
              <h2 className="font-weight-bold">CHANGE BACKGROUND APP</h2>
            </div>


            <div className="card-header d-flex justify-content-between">
              <button
                className="btn btn-secondary font-weight-bold"
                onClick={clickChangeColor}
              >
                Change Color
              </button>
              <p className="font-weight-bold mt-3">
                COLOR CODE:
                <span style={{ color: viewBg.color}}> {viewBg.color}</span>
              </p>

              {/* reset button */}
              <button
                className="btn btn-danger font-weight-bold"
                onClick={clickResetBg}
              >
                RESET
              </button>
            </div>


            <div
              className="card-body bodyColorContainner"
              style={{ backgroundColor: viewBg.color }}
            ></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Background;
