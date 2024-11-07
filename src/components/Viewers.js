import styled from "styled-components";

const Viewers = (props) => {
    return (
        <Container>
            <Wrap>
                <img src={`${process.env.PUBLIC_URL}/images/viewers-disney.png`} alt="Disney" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src={`${process.env.PUBLIC_URL}/videos/1564674844-disney.mp4`} type='video/mp4' />
                </video>
            </Wrap>
            <Wrap>
                <img src={`${process.env.PUBLIC_URL}/images/viewers-marvel.png`} alt="Marvel" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src={`${process.env.PUBLIC_URL}/videos/1564676115-marvel.mp4`} type='video/mp4' />
                </video>
            </Wrap>
            <Wrap>
                <img src={`${process.env.PUBLIC_URL}/images/viewers-national.png`} alt="National Geographic" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src={`${process.env.PUBLIC_URL}/videos/1564676296-national-geographic.mp4`} type='video/mp4' />
                </video>
            </Wrap>
            <Wrap>
                <img src={`${process.env.PUBLIC_URL}/images/viewers-pixar.png`} alt="Pixar" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src={`${process.env.PUBLIC_URL}/videos/1564676714-pixar.mp4`} type='video/mp4' />
                </video>
            </Wrap>
            <Wrap>
                <img src={`${process.env.PUBLIC_URL}/images/viewers-starwars.png`} alt="Star Wars" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src={`${process.env.PUBLIC_URL}/videos/1608229455-star-wars.mp4`} type='video/mp4' />
                </video>
            </Wrap>
        </Container>

    )
}

const Container = styled.div`
    margin-top: 30px;
    padding: 30px 0px 26px;
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));

    @media (max-width: 768px ){
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }

`;

const Wrap = styled.div`
    padding-top: 56.25%;
    justify-content: center;
    text-align: center;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border: 3px solid rgba(249,249,249,0.1);

    img {
        width: 100%;
        height: 100%;
        inset: 0px;
        display: block;
        object-fit: cover;
        opacity: 1;
        position: absolute;
        transition: opacity 500ms ease-in-out 0s;
        z-index: 1;
        top: 0;
    }

    video {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        left: 0;
        opacity: 0;
        z-index: 0;
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transform: scale(1.05);
    border-color: rgba(249,249,q49, 0.8);

    video {
        opacity: 1;
    }

    }

`;

export default Viewers;