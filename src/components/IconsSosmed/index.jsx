import classNames from 'classnames';
import Colors from '../../Styles/Colors/Colors.module.css';
import { BsWhatsapp, BsInstagram, BsFacebook, BsGithub } from "react-icons/bs";

function IconsSosmed(props) {
  const blue = props.blue
  const red = props.red
  const purple = props.purple
  const green = props.green

  return (
    <>
    {/* classname = flex */}
      <div className={classNames(props.className , 
        blue === true ? Colors.blue || '' :
          red === true ? Colors.red || '' :
            purple === true ? Colors.purple || '' :
              green === true ? Colors.green || '' : 'text-[#096E96]'
      )} >
        <a href="https://wa.link/x335vr" target="_blank" rel="noreferrer">
          <BsWhatsapp className={props.aClassName} />
        </a>
        <a href="https://www.instagram.com/ari.putra99/" target="_blank" rel="noreferrer">
          <BsInstagram className={classNames(props.aClassName)} />
        </a>
        <a href="https://github.com/yanyiik99" target="_blank" rel="noreferrer">
          <BsGithub className={classNames(props.aClassName)} />
        </a>
        <a href="https://web.facebook.com/wayanari.pramanaputra/" target="_blank" rel="noreferrer">
          <BsFacebook className={classNames(props.aClassName)} />
        </a>
      </div>
    </>
  )
}

export default IconsSosmed