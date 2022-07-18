import React from 'react';

function YoutubeItem(props) {
    return (
      <div className={`youtube-item ${props.className}`}>
        <div 
          className="youtube-img"
          // style={{
          //   height: '250px'
          // }}
        >
          <img
           src={props.image} 
          //  style={{
          //    display:'block',
          //    height: '100%',
          //    maxWidth: '100%',
          //    width: '100%',
          //    objectFit: 'cover'
          //  }}
           alt="" 

           />
        </div>
        <div className="youtube-footer">
          <img 
          src={props.imgAuthor} 
          alt="" 
          className="youtube-avatar" />
          <div className="youtube-info">
            <h3 className="youtube-title">{props.titleItem}</h3>
            <h4 className="youtube-author">{props.author}</h4>
          </div>
        </div>
      </div>
    )
  }

export default YoutubeItem;