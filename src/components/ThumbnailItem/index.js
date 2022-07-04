import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, setActiveThumbnailId, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails
  const classNameThumbnail = isActive ? `thumbnail active` : `thumbnail`
  const onClickThumbnail = () => {
    setActiveThumbnailId(id)
  }
  return (
    <li className="list-thumbnail-item">
      <button
        type="button"
        onClick={onClickThumbnail}
        className="thumbnail-btn"
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={classNameThumbnail}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
