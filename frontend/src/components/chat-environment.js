import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './chat-environment.css';

const ChatEnvironment = (props) => {
  const [vGenStep, setVGenStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const [videoSrc, setVideoSrc] = useState(null);
  const [captions, setCaptions] = useState(null)

  const handleInputChange = (event) => {
    const inputText = event.target.value;
    if (inputText.length <= 5000) {
      setCharCount(inputText.length);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setVGenStep(2);
    const formData = new FormData(event.target);
    const data = {
      audioSettings: formData.get('audioSettings'),
      voiceType: formData.get('voiceType'),
      videoType: formData.get('videoType'),
      description: formData.get('description'),
      videoSettings: formData.get('videoSettings'),
      videoLength: formData.get('videoLength'),
      pace: formData.get('pace')
    };

    try {
      const response = await fetch('http://localhost:5001/api/getWord', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const blob = await response.blob();
      setVideoSrc(URL.createObjectURL(blob));
      setLoading(false);
      
      const response2 = await fetch('http://localhost:5001/api/getCaption')
      const result2 = await response2.json();
      setCaptions(result2)
      console.log(captions)
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
    }
  };

  return (
    <div className={`chat-environment-container ${props.rootClassName} `}>
      <div className="chat-environment-container01">
        {vGenStep === 1 && (
          <form className="chat-environment-form" onSubmit={handleSubmit}>
            <div className="chat-environment-container02">
              <h1 className="chat-environment-header">
                {props.header31 ?? (
                  <fragment>
                    {vGenStep === 1 && (
                      <span className="chat-environment-text18 ai-word">
                        DESCRIBE
                      </span>
                    )}
                  </fragment>
                )}
              </h1>
              <h1 className="chat-environment-header1">
                {props.header1111 ?? (
                  <fragment>
                    {vGenStep === 1 && (
                      <span className="chat-environment-text14">
                        Video in DETAIL
                      </span>
                    )}
                  </fragment>
                )}
              </h1>
            </div>
            <div className="chat-environment-container03">
              <div className="chat-environment-container04">
                <h1>
                  {props.heading21 ?? (
                    <fragment>
                      <span className="chat-environment-text20 Form-titles">
                        Audio Settings
                      </span>
                    </fragment>
                  )}
                </h1>
                <select name="audioSettings" className="chat-environment-select form-option">
                  <option value="English Accent">English Accent</option>
                  <option value="American Accent">American Accent</option>
                  <option value="French Accent">French Accent</option>
                  <option value="German Accent">German Accent</option>
                  <option value="Mexican Accent">Mexican Accent</option>
                  <option value="Australian Accent">Australian Accent</option>
                  <option value="Let AI choose">Let AI choose</option>
                </select>
                <select name="voiceType" className="chat-environment-select1 form-option">
                  <option value="Male Voice">Male Voice</option>
                  <option value="Female Voice">Female Voice</option>
                  <option value="Let AI choose">Let AI choose</option>
                </select>
                <select name="videoType" className="chat-environment-select2 form-option">
                  <option value="Narrating">Narrating</option>
                  <option value="Tutorial">How To/ Tutorial</option>
                  <option value="ASMR">ASMR</option>
                  <option value="Documentary">Documentary</option>
                  <option value="News">News</option>
                  <option value="Let AI choose">Let AI choose</option>
                </select>
              </div>
              <div className="chat-environment-textarea-container">
                <textarea
                  name="description"
                  placeholder="Describe your ideal video..."
                  className="chat-environment-textarea textarea"
                  onChange={handleInputChange}
                ></textarea>
                <span id="char-count">{charCount} / 5000</span>
              </div>
              <div className="chat-environment-container05">
                <h1>
                  {props.heading11 ?? (
                    <fragment>
                      <span className="chat-environment-text21 Form-titles">
                        Video Settings
                      </span>
                    </fragment>
                  )}
                </h1>
                <select name="videoSettings" className="chat-environment-select3 form-option">
                  <option value="TikTok">TikTok</option>
                  <option value="YouTube">YouTube</option>
                  <option value="Reels">Reels</option>
                </select>
                <select name="videoLength" className="chat-environment-select4 form-option">
                  <option value="30 seconds">30 seconds</option>
                  <option value="60 seconds">60 seconds</option>
                  <option value="2-4 minutes">2-4 minutes</option>
                  <option value="Let AI choose">Let AI choose</option>
                </select>
                <select name="pace" className="chat-environment-select5 form-option">
                  <option value="Varying Pace">Varying Pace</option>
                  <option value="Fast Paced">Fast Paced</option>
                  <option value="Slow Paced">Slow Paced</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="chat-environment-button ai-button"
              onSubmit={handleSubmit}
            >
              <span>
                {props.button ?? (
                  <fragment>
                    <span className="chat-environment-text11">GENERATE</span>
                  </fragment>
                )}
              </span>
            </button>
          </form>
        )}
        {vGenStep === 2 && (
          <div className="chat-environment-container06">
            <div className="chat-environment-container07">
              <div className="chat-environment-container08">
                <h1>
                  {props.heading4 ?? (
                    <fragment>
                      <span className="chat-environment-text17 Form-titles">
                        VIDEO DETAILS
                      </span>
                    </fragment>
                  )}
                </h1>
                <span>
                  {props.text31 ?? (
                    <fragment>
                      <span className="chat-environment-text09">
                        This is a placeholder for the caption that will be
                        generated by OpenAI for the Generated video
                      </span>
                    </fragment>
                  )}
                </span>
              </div>
              <div className="chat-environment-container09">
                {loading ? (
                  <img src="/Infinite-Loader.gif" alt="Loading..." />
                ) : (
                  <video
                    src={videoSrc}
                    loop="true"
                    poster="https://play.teleporthq.io/static/svg/videoposter.svg"
                    autoPlay="true"
                    controls="true"
                    className="chat-environment-video"
                  ></video>
                )}
                <button
                  type="submit"
                  className="chat-environment-button1 ai-button"
                >
                  <span>
                    {props.button2 ?? (
                      <fragment>
                        <span className="chat-environment-text16">
                          DOWNLOAD
                        </span>
                      </fragment>
                    )}
                  </span>
                </button>
              </div>
              <div className="chat-environment-container10">
                <h1>
                  {props.heading3 ?? (
                    <fragment>
                      <span className="chat-environment-text10 Form-titles">
                        VIDEO CAPTION
                      </span>
                    </fragment>
                  )}
                </h1>
                <span>
                  {props.text3 ?? (
                    <fragment>
                      <span className="chat-environment-text19">
                        {captions}
                      </span>
                    </fragment>
                  )}
                </span>
              </div>
            </div>
            <h1 className="chat-environment-header2">
              {props.header11112 ?? (
                <fragment>
                  {vGenStep === 2 && (
                    <span className="chat-environment-text12 ai-word">
                      DOWNLOAD
                    </span>
                  )}
                </fragment>
              )}
            </h1>
            <h1 className="chat-environment-header3">
              {props.header312 ?? (
                <fragment>
                  {vGenStep === 2 && (
                    <span className="chat-environment-text13">Video</span>
                  )}
                </fragment>
              )}
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

ChatEnvironment.defaultProps = {
  rootClassName: '',
  header31: null,
  header312: null,
  header1111: null,
  header11112: null,
  button: null,
  button2: null,
  heading21: null,
  heading11: null,
  heading4: null,
  heading3: null,
  text31: null,
  text3: null,
};

ChatEnvironment.propTypes = {
  rootClassName: PropTypes.string,
  header31: PropTypes.string,
  header312: PropTypes.string,
  header1111: PropTypes.string,
  header11112: PropTypes.string,
  button: PropTypes.string,
  button2: PropTypes.string,
  heading21: PropTypes.string,
  heading11: PropTypes.string,
  heading4: PropTypes.string,
  heading3: PropTypes.string,
  text31: PropTypes.string,
  text3: PropTypes.string,
};

export default ChatEnvironment;
