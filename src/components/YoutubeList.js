import React from 'react';
import { YoutubeData } from '../data';
import YoutubeItem from './YoutubeItem';

const YoutubeList = (props) => {
    return (
        <div className="youtube-list">
        {props.children}
                {
                    YoutubeData.map((item, index) => { //return để dùng trong trường hợp là khi muốn xử lý thêm gì trong 1 hàm
                        return (
                            <YoutubeItem
                                key={item.id}
                                image={item.image}
                                imgAuthor={item.avatar || 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'}
                                titleItem={item.title || 'This is example my project'}
                                author={item.author || 'This is example Author'}
                                className={index === 1 ? 'abc' : ''}
                            >
                            </YoutubeItem>
                        )
                    })
                }
            </div>
    );
};

export default YoutubeList;