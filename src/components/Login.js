import styled from "styled-components";

const Login = (props) => {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src={`${process.env.PUBLIC_URL}/images/cta-logo-one.svg`} />
                    <SignUp href="/disneyclone/home">GET ALL THERE</SignUp>
                    <Description>
                        Get Premier Access to Raya and the last dragon for an additional fee with Disney+ subscription. As of 03/26/31, the price of Disney+ and The Disney Bundle will increase by $1.
                    </Description>
                    <CTALogoTwo src={`${process.env.PUBLIC_URL}/images/cta-logo-two.png`} />

                </CTA>
                <BgImage />
            </Content>
        </Container>
    )
};

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
    `;
const Content = styled.div`
    margin-bottom: 10uw;
    width: 100%;
    position: relative;
    min-height: 100uh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
`;

const BgImage = styled.div`
    height: 100%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/images/login-background.jpg");
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
    `;

const CTA = styled.div`
    margin-bottom: 2uw;
    max-width: 650px;
    felx-wrap: wrap;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 0;
    align-items: center;
    text-align: center;
    margin-right: auto; 
    margin-left: auto;
    width: 100%;

`;

const CTALogoOne = styled.img`
    margin-bottom: 12px;
    max-width: 600px;
    min-width: 1px;
    display: block;
    width: 100%;

`;

const SignUp = styled.a`
    font-weight: bold;
    color: #f9f9f9 ;
    background-color: #0063e5;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 18px;
    padding: 16.5px 0;
    border: 1px solid transparent;
    border-radius: 4px;

    &:hover{
        background-color: #0483ee;
    }
`;

const Description = styled.p`
    color: hsla(0, 0%, 95.3%, 1);
    fonst-size: 11px;
    margin: 0 0 24px;
    line-height: 1.5;
    letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
    margin-bottom: 20px;
    max-width: 600px;
    width: 100%;
    display: inline-block;
    vertical-align: bottom;
`;


export default Login;