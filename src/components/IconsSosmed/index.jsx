import classNames from 'classnames';
import Colors from '../../Styles/Colors/Colors.module.css';
import { BsWhatsapp, BsInstagram, BsFacebook, BsGithub, BsDribbble } from "react-icons/bs";
import { useSelector } from 'react-redux';

function IconsSosmed(props) {

  const { blue, red, purple, green } = useSelector((state) => state.data);


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
        <a href="https://dribbble.com/yanyiik99" target="_blank" rel="noreferrer">
          <BsDribbble className={classNames(props.aClassName)} />
        </a>
      </div>
    </>
  )
}

export default IconsSosmed