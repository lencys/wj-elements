let styleSheet = new CSSStyleSheet()
styleSheet.replaceSync(`/*!
* direction.scss
*/
/* Skeleton Variables */
:host {
  width: 100%; }

.fragment {
  display: flex;
  margin: 0 auto;
  width: 100%; }

#audio-player-container {
  position: relative;
  background: #071320CC;
  display: flex;
  align-items: center;
  border-radius: 0 4px 4px 0;
  color: white;
  --seek-before-width: 0%;
  --volume-before-width: 100%;
  --buffered-width: 0%; }
  #audio-player-container button {
    font-family: "Font Awesome 6 Pro", -apple-system, BlinkMacSystemFont, "Inter UI", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
    outline: none;
    width: 40px;
    height: 40px;
    float: left; }
    #audio-player-container button:before {
      font-family: "Font Awesome 6 Pro", -apple-system, BlinkMacSystemFont, "Inter UI", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
      font-weight: 300;
      font-size: 20px;
      position: relative;
      content: attr(data-icon);
      color: #fff;
      text-shadow: 1px 1px 0 black;
      text-align: left; }

#play-icon, #mute-icon {
  margin: 0 1rem 0 0; }

#current-time, #seek-slider, #duration {
  margin: 0 1rem 0 0; }

path {
  stroke: #007db5; }

.time {
  display: inline-block;
  width: 37px;
  text-align: center;
  font-size: 20px;
  float: left; }

output {
  display: inline-block;
  width: 32px;
  text-align: center;
  float: left;
  clear: left; }

#volume-slider {
  width: 44px; }

#current-time {
  width: 40px; }

#seek-slider::part(slider)::-moz-range-thumb {
  background: transparent; }

#seek-slider::part(slider)::-moz-range-thumb:hover {
  background: transparent;
  box-shadow: none !important; }

#seek-slider::part(slider)::-moz-range-thumb:active {
  background: transparent;
  box-shadow: none !important; }

#volume-slider::part(slider)::-moz-range-thumb {
  background: transparent; }

#volume-slider::part(slider)::-moz-range-thumb:hover {
  background: transparent;
  box-shadow: none !important; }

#volume-slider::part(slider)::-moz-range-thumb:active {
  background: transparent;
  box-shadow: none !important; }

svg {
  width: 100%;
  height: 100%;
  display: block; }

#svg-container {
  position: relative;
  height: 60px;
  margin: 1rem 0;
  width: 100%; }

#svg-mask {
  background: #7252D3;
  clip-path: url(#myClip);
  height: 100%;
  position: absolute; }

#svg-mask-bg {
  background: #eae0fb;
  clip-path: url(#myClip);
  height: 100%;
  width: 100%;
  position: absolute; }

.photo-container {
  position: relative;
  overflow: hidden;
  background: url("../img/cover.png") no-repeat;
  grid-row: 1;
  background-size: contain;
  min-height: 185px;
  min-width: 185px;
  flex-basis: 185px; }
  .photo-container img {
    border-radius: 4px 4px 0 4px; }

.wrapper {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-self: end;
  width: 100%; }

/*# sourceMappingURL=styles.css.map */`)


export {styleSheet as default};