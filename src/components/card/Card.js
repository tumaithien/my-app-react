import React from 'react';
import styled,{css} from 'styled-components';
//khi sử dụng style component thì phải đặt bên ngoài funtion component
/**
 * const StyledCard = styled.tag(h1, h2, div, span, strong, a, p, section, article ...)``
 */

const StyledCard = styled.div`
    position: relative;
`;
const CardImage = styled.div`
    height: 400px;
    width: 100%;
    border-radius: 8px;
    
`;
const CardImg = styled.img`
    object-fit: cover;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: inherit;
`
const CardContent = styled.div`
    position: absolute;
    left: 50%;
    transform: translate(-50%, 50%);
    width: calc(100% - 36px);
    background-color: #FFF;
    bottom: 0;
    z-index: 10;
    border-radius: 20px;
    padding: 20px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
const CardTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
`;
const CardUser = styled.div`
    display: flex;
    align-items: center;
    column-gap: 12px;
`;
const UserAvatar = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 100rem;
    object-fit: cover;
    flex-shrink: 0;
`;
const UserName = styled.span`
    font-size: 16px;
    color: #333;
`;

const CardFooter = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
`;

const CardTitle = styled.h3`
    color: #000;
    font-size: 18px;
    font-weight: 700;
`;

const CardAmount = styled.span`
    font-size: ${props => props.fontSize || '18px'};
    font-weight: bold;
    ${(props) => props.secondary && css`
        background: linear-gradient(86.88deg, #20E3B2, #2cccff);
    `};
    ${(props) => !props.secondary && css`
        background: linear-gradient(86.88deg, #7D6AFF 1.38%, #FFB86C 64.35%, #FC2872 119.91%);
    `};
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
`;

const CardMeta = styled.div`
    display: flex;
    align-items: center;
    column-gap: 12px;
`;


const Card = (props) => {
    console.log(typeof(props.secondary))
    return (
        <StyledCard>
            <CardImage>
                <CardImg 
                src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1200x900&vertical=top"
                alt="" />
            </CardImage>
            <CardContent>
                <CardTop>
                    <CardUser>
                        <UserAvatar src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1200x900&vertical=top" alt="" />
                            <UserName>@zndrson</UserName>
                    </CardUser>
                    <CardMeta>
                        <img src="/icon-heart.svg" alt="heart" />
                        <span>256</span>
                    </CardMeta>
                </CardTop>
                <CardFooter>
                    <CardTitle>Cosmic Perspective</CardTitle>
                    <CardAmount secondary={props.secondary}>
                        12,000 PSL
                    </CardAmount>
                </CardFooter>
            </CardContent>
        </StyledCard>
    );
};

export default Card;