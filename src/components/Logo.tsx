import logo from '../assests/ignitelab.png';
import logo2 from '../assests/banner2.png';

interface Asset{
  lugar: 'header' | 'home';
}
export function Logo(
  props: Asset
){
  return (
      <div>
        {props.lugar == 'header' ? (<img src={logo} /> ): 
          (props.lugar == 'home' ?  <img src={logo2} />:<div></div>)}
        
      </div>
  )
}