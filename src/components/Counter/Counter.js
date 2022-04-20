import { observer } from "mobx-react-lite"
import {useRootStore} from '../../store/index'

const buttonStyle = {
  padding:'5px',
  border:'3px solid red',
  marginRight:'10px',
  borderRadius:'10px'
}
// const Counter = ({counterStore}) => {
const Counter = () => {

  // const {count,increase,decrease} = counterStore
  const {counterStore} = useRootStore()
  const {count,increase,decrease} = counterStore
  return (
    <>
      <h1>CURRENT:{count}</h1>
      <button style={buttonStyle} onClick={()=>increase()}>INCREASE</button>
      <button style={buttonStyle} onClick={()=>decrease()}>DECREASE</button>
    </>
  )
}

export default observer(Counter)