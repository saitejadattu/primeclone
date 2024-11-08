// Write your code here
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'
import Popup from 'reactjs-popup'

const MovieItem = props => {
  const {each} = props
  const {thumbnailUrl, categoryId, videoUrl} = each
  return (
    <div className="slider-item">
      <Popup
        modal
        trigger={<img src={thumbnailUrl} alt="thumbnail" className="image" />}
      >
        {close => (
          <div className="popup-container">
            <button
              data-testid="closeButton"
              onClick={() => close()}
              className="cancel-icon"
            >
              <IoMdClose />
            </button>
            <div>
              <ReactPlayer url={videoUrl} />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}
export default MovieItem
