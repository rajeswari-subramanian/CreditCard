import React from 'react'
import styled from "styled-components"
import Carddisplay from './Carddisplay'

const Creditcardwrapper = styled.div`
display:flex;
width:80%;
margin:auto;
height:500px;
`
const Input = styled.input`
width: 60px;  
background-color:white;
border: 0;
margin-right:6px;    
font-size:16px;
outline: 0;   
letter-spacing: 10;   
`
const Label = styled.label`
font-weight:bolder;
font-size:10px;
font-family:'Lato', sans-serif;
letter-spacing: 2;
`
const Inputwrapper = styled.div`
border-bottom:1px solid #F6425B;
padding:1px;
`
const Formwrapper = styled.div`
flex:1;
`
const Button = styled.button`
width:180px;
border-radius:10px;
border: 0;
color: white;
height:40px;
background-color:#F6425B;
`
export default class Creditcard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            cardnum: " ",
            month: "",
            year: "",
            cvc: "",
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    render = () => {
        return (
            <><Creditcardwrapper>
                <Carddisplay data={this.state} />
                <Formwrapper>
                    <div style={{ width: "70%", margin: "auto", padding: "20px", textAlign: "left" }}>
                        <p style={{ fontWeight: "thin", fontSize: "24px" }}>Payment details</p>
                        <Inputwrapper >
                            <Label>CARD HOLDER NAME:{" "} </Label><br /><br />
                            <i style={{ color: "#F6425B", marginRight: "15px" }} class="far fa-user"></i>
                            <Input style={{ width: "300px" }} type='text' name='name' onChange={(e) => this.handleChange(e)} value={this.state.name} placeholder='username' />
                        </Inputwrapper><br />
                        <Inputwrapper >
                            <Label>CARD NUMBER:{" "} </Label><br /><br />
                            <i style={{ color: "#F6425B", marginRight: "15px" }} class="far fa-credit-card"></i>
                            <Input style={{ width: "300px" }} type='text' name='cardnum' onChange={(e) => this.handleChange(e)} value={this.state.cardnum} placeholder='cardnumber' />
                        </Inputwrapper><br />
                        <div style={{ display: "flex" }}>
                            <Inputwrapper style={{ width: "60px", flex: 1, marginRight: "25px" }} >
                                <Label>    EXPIRY MONTH:{" "} </Label><br /><br />
                                <i style={{ color: "#F6425B", marginRight: "15px" }} class="far fa-calendar-alt"></i>
                                <Input type='text' name='month' onChange={(e) => this.handleChange(e)} value={this.state.month} placeholder='month' />
                            </Inputwrapper><br />
                            <Inputwrapper style={{ width: "60px", flex: 1, marginRight: "25px" }} >
                                <Label> EXPIRY YEAR:{" "} </Label><br /><br />
                                <i style={{ color: "#F6425B", marginRight: "15px" }} class="far fa-calendar-alt"></i>
                                <Input type='text' name='year' onChange={(e) => this.handleChange(e)} value={this.state.year} placeholder='year' />
                            </Inputwrapper><br />
                            <Inputwrapper style={{ width: "60px", flex: 1 }} >
                                <Label> CVC:{" "} </Label><br /><br />
                                <i style={{ color: "#F6425B", marginRight: "15px" }} class="fas fa-lock"></i>
                                <Input type='text' name='cvc' onChange={(e) => this.handleChange(e)} value={this.state.cvc} placeholder='cvc' />
                            </Inputwrapper><br />
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <p style={{ fontWeight: "thin", fontSize: "24px" }}>Payment amount :<span style={{ color: "#F6425B", fontWeight: "bolder" }} >12 300<i style={{ fontSize: "20px" }} class="fas fa-ruble-sign"></i></span></p>
                            <Button>PAY</Button>
                        </div>
                        <br />
                    </div>
                </Formwrapper>
            </Creditcardwrapper>
            </>
        )
    }
}