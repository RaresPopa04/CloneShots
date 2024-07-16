import React from "react";

const MinimalPhonePosition = (props) => {
  const { preview, preview2: previewTwo, preview3: previewThree } = props;
  const applyStyle = props.applyStyle;
  return (
    <div className="card-wrapper">
      {Array.from({ length: 2 }).map((_, i) => {
        return (
          <div className="card" onClick={() => applyStyle(i, "layout-2", 0, i)}>
            <div className="frame">
              <div className="innerFrame">
                <div className="background"></div>
                <div className="dropboxParent">
                  <div className="dropbox">
                    <div className={`centeredDropbox layout-2 style-${i}`}>
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
                        {preview == null && <div class="content default"></div>}
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
        );
      })}
      {Array.from({ length: 5 }).map((_, i) => {
        return (
          <div
            className="card"
            onClick={() => applyStyle(i, "layout-2", 1, i + 2)}
          >
            <div className="frame">
              <div className="innerFrame">
                <div className="background"></div>
                <div className="dropboxParent">
                  <div className="dropbox">
                    <div
                      className={`centeredDropbox layout-2 two-canvases styletwo-${i}`}
                    >
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
                        {preview == null && <div class="content default"></div>}
                        {preview && (
                          <div className="imgContainer">
                            <img src={preview} alt="preview" />
                          </div>
                        )}
                      </div>
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
        );
      })}
      {Array.from({ length: 5 }).map((_, i) => {
        return (
          <div
            className="card"
            onClick={() => applyStyle(i, "layout-2", 2, i + 7)}
          >
            <div className="frame">
              <div className="innerFrame">
                <div className="background"></div>
                <div className="dropboxParent">
                  <div className="dropbox">
                    <div
                      className={`centeredDropbox three-canvases layout-2 stylethree-${i}`}
                    >
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
                        {preview == null && <div class="content default"></div>}
                        {preview && (
                          <div className="imgContainer">
                            <img src={preview} alt="preview" />
                          </div>
                        )}
                      </div>
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

                      <div className="uploadBox">
                        <div className="stack2 none">
                          {previewThree && (
                            <div className="imgContainer">
                              <img
                                src={previewThree}
                                alt="preview"
                                style={{ filter: "blur(2em)" }}
                              />
                            </div>
                          )}
                        </div>
                        <div className="stack1 none">
                          {previewThree && (
                            <div className="imgContainer">
                              <img
                                src={previewThree}
                                alt="preview"
                                style={{ filter: "blur(2em)" }}
                              />
                            </div>
                          )}
                        </div>
                        {previewThree == null && (
                          <div class="content default"></div>
                        )}
                        {previewThree && (
                          <div className="imgContainer">
                            <img src={previewThree} alt="preview" />
                          </div>
                        )}
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
            onClick={() => applyStyle(i + 2, "layout-2", 0, i + 12)}
          >
            <div className="frame">
              <div className="innerFrame">
                <div className="background"></div>
                <div className="dropboxParent">
                  <div className="dropbox">
                    <div className={`centeredDropbox layout-2 style-${i + 2}`}>
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
                        {preview == null && <div class="content default"></div>}
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
        );
      })}
    </div>
  );
};

export default MinimalPhonePosition;
