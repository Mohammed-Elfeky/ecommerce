import './MyButton.scss'

function MyButton({content,isCheckOut,inverted,...otherprops}) {
    return (
        <div className={`MyButton ${isCheckOut ? 'CheckOut' : ''}`}>
            <button className={`item ${inverted ? 'inverted' : ''}`} {...otherprops}>{content}</button>
        </div>
    )
}

export default MyButton
