import propTypes from 'prop-types'

const List = ({name, link}) => {
  return (
    <li>
       <a href={link}>{name}</a>       
    </li>
  )
}

List.propTypes = {
    name: propTypes.string,
    link: propTypes.string
}
export default List