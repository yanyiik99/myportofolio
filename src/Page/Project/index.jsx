import { Link } from 'react-router-dom'
import * as Page from '../index'
import * as Component from '../../components'


function Project() {
  return (
    <div>
      <Link to="/portofolio">
        <Component.Button btn="kembali"/>
      </Link>
      <Page.Maintenance />
    </div>
  )
}

export default Project