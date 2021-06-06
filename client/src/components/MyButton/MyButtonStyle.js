import styled, {css} from 'styled-components'
const InvertedStyle=css`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover{
    background-color: black;
    color: white;
    }
`
const NotInvertedStyle=css`
    background-color: black;
    color: white;
    border: none;

    &:hover{
    background-color: white;
    color: black;
    border: 1px solid black;
    }
`
const checkOutInsideCartStyle=css`
    margin-top: auto;
    text-align: center;
`
const inlineStyle=css`
    display:inline-block;
    margin-right:10px;
    margin-bottom:10px
`


export const MyButtonContainer=styled.div`
${({makeInline})=> makeInline ? inlineStyle : ''}
${props=>props.isCheckOut ? checkOutInsideCartStyle : ''}
`

export const MyButtonStyled=styled.button`
    letter-spacing: 0.5px;
    padding: 10px 20px;
    font-size: 15px;
    text-transform: uppercase;
    cursor: pointer;

    ${props=>props.inverted ? InvertedStyle : NotInvertedStyle }
`