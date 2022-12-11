export default function StackList(props) {
  const stackList = props.stack.map(stackItem => {
    return (
      <div className="stack-list-item">
        {stackItem}
      </div>
    )
  })
  return (
    <div className="stack-list">
      {stackList}
    </div>
  )
}