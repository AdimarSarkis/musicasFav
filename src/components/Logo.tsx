import logo from '../assests/logo8_semFundo.png';
import logo2 from '../assests/banner2.png';

interface Asset{
  lugar: 'header' | 'home';
}
export function Logo(
  props: Asset
){
  return (
      <div>
        {props.lugar == 'header' ? (<img src={logo} className='h-10'/> ): 
          (props.lugar == 'home' ?  <img src={logo2} />:<div></div>)}
        
      </div>
  )
}