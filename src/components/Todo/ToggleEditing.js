const ToggleEditing = ({todo}) => {
  const {title,changeEditing} = todo
  return (
    <label onDoubleClick={()=>changeEditing()}>{title}</label>
  )
}
export default ToggleEditing