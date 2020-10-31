import React from "react";
import styled from "styled-components";

const Dotwrap = styled.div`
  position: absolute;
  top: ${(props) => (props.top ? props.top : null)};
  left: ${(props) => (props.left ? props.left : null)};
  right: ${(props) => (props.right ? props.right : "10px")};
  bottom: ${(props) => (props.bottom ? props.bottom : "10px")};
`;
const Dots = styled.div`
  background: white;
  border: 1px solid white;
  opacity: ${(props) => props.op};
  margin: 5px;
  width: 3px;
  height: 3px;
  border-radius: 50%;
`;
const Carddisplaywrapper = styled.div`
  position: relative;
  padding: 20px;
  flex: 1;
`;
const Span = styled.span`
  font-weight: thin;
  font-size: 10px;
  font-family: "Lato", sans-serif;
  letter-spacing: 2;
`;
const Cardwrappershadow = styled.div`
  background: #f6425b;
  position: relative;
  left: 80px;
  bottom: 20px;
  background-color: #efe6eb;
  box-shadow: 5px 10px 18px #888888;
  position: absolute;
  width: 78%;
  height: 65%;
  border-radius: 20px;
`;
const Cardwrapper = styled.div`
  background: #f6425b;
  z-index: 1;
  height: 70%;
  color: white;
  border-radius: 20px;
  font-weight: bolder;
  width: 85%;
  font-size: 30px;
  position: relative;
`;
const T = styled.div`
  height: 150px;
  width: 150px;
  z-index: -2;
  position: absolute;
  top: 30%;
  left: 30%;
  background: linear-gradient(75deg, #fff, #f6425b);
  transform: rotate(45deg);
`;

export default class Carddisplay extends React.Component {
  render = () => {
    const { name, cardnum, month, year, cvc } = this.props.data;
    return (
      <Carddisplaywrapper>
        <br />
        <br />
        <br />
        <br />
        <Cardwrappershadow />
        <div
          style={{
            top: "200px",
            right: "45px",
            backgroundColor: "#D0D0D0",
            width: "55px",
            height: "50px",
            position: "absolute",
          }}
        ></div>
        <Cardwrapper>
          <T />
          <img
            style={{
              color: "#F6425B",
              width: "100px",
              backgroundColor: "white",
              position: "absolute",
              top: "50px",
              right: "60px",
            }}
            alt=""
            src="/visa1.png"
          />
          <img
            style={{
              position: "absolute",
              top: "100px",
              left: "40px",
              width: "50px",
              borderRadius: "5px",
            }}
            alt=""
            src="/chip.jpg"
          />
          <br /> <br /> <br />
          <br />
          <div
            style={{
              minHeight: "75px",
              paddingLeft: "40px",
              fontSize: "30px",
              maxWidth: "400px",
              textAlign: "left",
              fontFamily: "'Bungee Hairline', cursive",
            }}
          >
            {cardnum}
          </div>
          <div
            style={{
              textAlign: "left",
              paddingLeft: "40px",
              fontSize: "12px",
              letterSpacing: 1,
              width: "80%",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <div style={{ flex: 1.5 }}>
              <Span>CARD HOLDER</Span>
              <br />
              <br />
              <Span style={{ fontSize: "18px", overflowWrap: "anywhere" }}>
                {name}
              </Span>
            </div>
            <div style={{ flex: 1 }}>
              <Span>EXPIERS</Span>
              <br />
              <br />
              {month.length > 1 && (
                <Span
                  style={{ fontSize: "18px", overflowWrap: "anywhere" }}
                >{`${month}/${year.slice(0, 2)}`}</Span>
              )}
            </div>
            <div style={{ flex: 1 }}>
              <Span>CVC</Span>
              <br />
              <br />
              <Span style={{ fontSize: "18px", overflowWrap: "anywhere" }}>
                {cvc}
              </Span>
            </div>
          </div>
          <Dotwrap left="115px" top="10px">
            {new Array(10).fill(0).map((a, i) => (
              <Dots op={(10 / i) * 0.19} />
            ))}
          </Dotwrap>
          <Dotwrap left="130px" top="10px">
            {new Array(6).fill(0).map((a, i) => (
              <Dots op={(10 / i) * 0.19} />
            ))}
          </Dotwrap>
          <Dotwrap left="145px" top="10px">
            {new Array(15).fill(0).map((a, i) => (
              <Dots op={(10 / i) * 0.19} />
            ))}
          </Dotwrap>
          <Dotwrap right="90px">
            {new Array(18).fill(0).map((a, i) => (
              <Dots op={i / 10} />
            ))}{" "}
          </Dotwrap>
          <Dotwrap right="75px">
            {new Array(8).fill(0).map((a, i) => (
              <Dots op={i / 10} />
            ))}
          </Dotwrap>
          <Dotwrap right="60px">
            {new Array(11).fill(0).map((a, i) => (
              <Dots op={i / 10} />
            ))}
          </Dotwrap>
        </Cardwrapper>
      </Carddisplaywrapper>
    );
  };
}
