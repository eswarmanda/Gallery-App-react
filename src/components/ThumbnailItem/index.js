import './index.css'

const ThumbnailItem = props => {
  const {eachImgDetails, isMainImgClicked, isActiveImg} = props
  const {id, thumbnailUrl, thumbnailAltText} = eachImgDetails
  const isImgClicked = () => {
    isMainImgClicked(id)
  }
  const activeImgClassName = isActiveImg ? 'activeImg-ele' : ''
  return (
    <li className="list-ele">
      <button type="button" className="btn">
        <img
          className={`thumbImg-ele ${activeImgClassName}`}
          src={thumbnailUrl}
          alt={thumbnailAltText}
          onClick={isImgClicked}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
