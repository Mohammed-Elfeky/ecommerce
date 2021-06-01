// import './MyButton.scss'
import {MyButtonContainer,MyButtonStyled} from './MyButtonStyle'
function MyButton({content,isCheckOut,inverted,...otherprops}) {
    return (
        // <div className={`MyButton ${isCheckOut ? 'CheckOut' : ''}`}>
        //     <button className={`item ${inverted ? 'inverted' : ''}`} {...otherprops}>{content}</button>
        // </div>
        <MyButtonContainer isCheckOut={isCheckOut}>
            <MyButtonStyled inverted={inverted} {...otherprops}>
                {content}
            </MyButtonStyled>
        </MyButtonContainer>
    )
}

export default MyButton
