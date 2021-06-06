// import './MyButton.scss'
import {MyButtonContainer,MyButtonStyled} from './MyButtonStyle'
function MyButton({makeInline,content,isCheckOut,inverted,...otherprops}) {
    return (
        <MyButtonContainer makeInline={makeInline} isCheckOut={isCheckOut}>
            <MyButtonStyled inverted={inverted} {...otherprops}>
                {content}
            </MyButtonStyled>
        </MyButtonContainer>
    )
}

export default MyButton
