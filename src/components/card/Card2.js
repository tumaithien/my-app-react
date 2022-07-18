import React from 'react';
import styled,{css} from 'styled-components';
//khi sử dụng style component thì phải đặt bên ngoài funtion component
/**
 * const StyledCard = styled.tag(h1, h2, div, span, strong, a, p, section, article ...)``
 */

 const StyledCard = styled.div`
    position: relative;
    .card-image{
        height: 400px;
        width: 100%;
        border-radius: 8px;
        img{
            object-fit: cover;
            display: block;
            width: 100%;
            height: 100%;
            border-radius: inherit;
        }
    }
    .card-content{
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
    }
    .card-top{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
    }
    .card-user{
        display: flex;
        align-items: center;
        column-gap: 12px;
        .user-avatar{
            width: 30px;
            height: 30px;
            border-radius: 100rem;
            object-fit: cover;
            flex-shrink: 0;
        }
        .user-name{
            font-size: 16px;
            color: #333;
        }
    }
    .card-meta{
        display: flex;
        align-items: center;
        column-gap: 12px;
    }
    .card-footer{
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
    .card-title{
        color: ${props => props.theme.color.blue};
        font-size: 18px;
        font-weight: 700;
    }
    .card-amount{
        font-size: 18px;
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
    }
`;
const Card2 = (props) => {
    return (
        <StyledCard secondary={props.secondary}>
            <div className='card-image'>
                <img 
                src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1200x900&vertical=top"
                alt="" />
            </div>
            <div className='card-content'>
                <div className='card-top'>
                    <div className='card-user'>
                        <img className='user-avatar' src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1200x900&vertical=top" alt="" />
                            <span className='user-name'>@zndrson</span>
                    </div>
                    <div className='card-meta'>
                        <img src="/icon-heart.svg" alt="heart" />
                        <span>256</span>
                    </div>
                </div>
                <div className='card-footer'>
                    <h3 className='card-title'>Cosmic Perspective</h3>
                    <span className="card-amount">
                        12,000 PSL
                    </span>
                </div>
            </div>
        </StyledCard>
    );
};

export default Card2;