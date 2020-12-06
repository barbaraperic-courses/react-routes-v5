import React from 'react'
import { 
  Link, 
  useLocation, 
  useRouteMatch 
} from "react-router-dom";
import slug from 'slug'

const CustomLink = ({to, children }) => {
  const match = useRouteMatch(to.pathname)

  return (
    <li style={{fontWeight: match ? 900 : ''}}>
      <Link to={to}>{children}</Link>
    </li>
  )
}

const Sidebar = (props) => {
  const location = useLocation()
  const { url } = useRouteMatch()

  //\/(?<element>\w+)\/\w+\/
  
  const { title, list } = props
  
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {list.map(item => (
          <CustomLink
            key={item}
            to={{
              pathname: `${url}/${slug(item)}`,
              search: location.search
            }}
          >
            {item.toUpperCase()}
          </CustomLink>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar