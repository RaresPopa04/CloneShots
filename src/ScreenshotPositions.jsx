import React from "react";

const ScreenshotPosition = (props) => {
  const { preview, preview2: previewTwo } = props;
  const applyStyle = props.applyStyle;
  const currentOverlay = props.currentOverlay;
  return (
    <div className="card-wrapper">
      {Array.from({ length: 4 }).map((_, i) => {
        return (
          <div className="card" onClick={() => applyStyle(i, "layout-0", 0, i)}>
            <div className="frame">
              <div className="innerFrame">
                <div className="background"></div>
                <div className="overlay">
                  <img src={`${currentOverlay}`} alt="" />
                </div>
                <div className="dropboxParent">
                  <div className="dropbox">
                    <div className={`centeredDropbox style-${i}`}>
                      <div className="zone">
                        <div className="shadow">
                          <div className="shadowLayer"></div>
                          <div className="shadowLayer"></div>
                          <div className="shadowLayer"></div>
                          <div className="shadowLayer"></div>
                        </div>
                        <div className="zone2">
                          <div className="uploadBox">
                            <div className="stack2 none">
                              {preview && (
                                <div className="imgContainer">
                                  <img
                                    src={preview}
                                    alt="preview"
                                    style={{ filter: "blur(2em)" }}
                                  />
                                </div>
                              )}
                            </div>
                            <div className="stack1 none">
                              {preview && (
                                <div className="imgContainer">
                                  <img
                                    src={preview}
                                    alt="preview"
                                    style={{ filter: "blur(2em)" }}
                                  />
                                </div>
                              )}
                            </div>
                            {preview == null && (
                              <div class="content default"></div>
                            )}
                            {preview && (
                              <div className="imgContainer">
                                <img src={preview} alt="preview" />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {Array.from({ length: 10 }).map((_, i) => {
        return (
          <div
            className="card"
            onClick={() => applyStyle(i, "layout-0", 1, i + 4)}
          >
            <div className="frame">
              <div className="innerFrame">
                <div className="background"></div>
                <div className="overlay">
                  <img src={`${currentOverlay}`} alt="" />
                </div>
                <div className="dropboxParent">
                  <div className="dropbox">
                    <div
                      className={`centeredDropbox two-canvases styletwo-${i}`}
                    >
                      <div className="zone">
                        <div className="shadow">
                          <div className="shadowLayer"></div>
                          <div className="shadowLayer"></div>
                          <div className="shadowLayer"></div>
                          <div className="shadowLayer"></div>
                        </div>
                        <div className="zone2">
                          <div className="uploadBox">
                            <div className="stack2 none">
                              {preview && (
                                <div className="imgContainer">
                                  <img
                                    src={preview}
                                    alt="preview"
                                    style={{ filter: "blur(2em)" }}
                                  />
                                </div>
                              )}
                            </div>
                            <div className="stack1 none">
                              {preview && (
                                <div className="imgContainer">
                                  <img
                                    src={preview}
                                    alt="preview"
                                    style={{ filter: "blur(2em)" }}
                                  />
                                </div>
                              )}
                            </div>
                            {preview == null && (
                              <div class="content default"></div>
                            )}
                            {preview && (
                              <div className="imgContainer">
                                <img src={preview} alt="preview" />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="zone">
                        <div className="shadow">
                          <div className="shadowLayer"></div>
                          <div className="shadowLayer"></div>
                          <div className="shadowLayer"></div>
                          <div className="shadowLayer"></div>
                        </div>
                        <div className="zone2">
                          <div className="uploadBox">
                            <div className="stack2 none">
                              {previewTwo && (
                                <div className="imgContainer">
                                  <img
                                    src={previewTwo}
                                    alt="preview"
                                    style={{ filter: "blur(2em)" }}
                                  />
                                </div>
                              )}
                            </div>
                            <div className="stack1 none">
                              {previewTwo && (
                                <div className="imgContainer">
                                  <img
                                    src={previewTwo}
                                    alt="preview"
                                    style={{ filter: "blur(2em)" }}
                                  />
                                </div>
                              )}
                            </div>
                            {previewTwo == null && (
                              <div class="content default"></div>
                            )}
                            {previewTwo && (
                              <div className="imgContainer">
                                <img src={previewTwo} alt="preview" />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {Array.from({ length: 2 }).map((_, i) => {
        return (
          <div
            className="card"
            onClick={() => applyStyle(i + 14, "layout-0", 0, i + 14)}
          >
            <div className="frame">
              <div className="innerFrame">
                <div className="background"></div>
                <div className="overlay">
                  <img src={`${currentOverlay}`} alt="" />
                </div>
                <div className="dropboxParent">
                  <div className="dropbox">
                    <div className={`centeredDropbox style-${i + 14}`}>
                      <div className="zone">
                        <div className="shadow">
                          <div className="shadowLayer"></div>
                          <div className="shadowLayer"></div>
                          <div className="shadowLayer"></div>
                          <div className="shadowLayer"></div>
                        </div>
                        <div className="zone2">
                          <div className="uploadBox">
                            <div className="stack2 none">
                              {preview && (
                                <div className="imgContainer">
                                  <img
                                    src={preview}
                                    alt="preview"
                                    style={{ filter: "blur(2em)" }}
                                  />
                                </div>
                              )}
                            </div>
                            <div className="stack1 none">
                              {preview && (
                                <div className="imgContainer">
                                  <img
                                    src={preview}
                                    alt="preview"
                                    style={{ filter: "blur(2em)" }}
                                  />
                                </div>
                              )}
                            </div>
                            {preview == null && (
                              <div class="content default"></div>
                            )}
                            {preview && (
                              <div className="imgContainer">
                                <img src={preview} alt="preview" />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ScreenshotPosition;
