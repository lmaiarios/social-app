import React, { useState } from 'react';
import './post.css';

function Post({fullname, picture, children}){
    return (
        <div className='post'>
            <Header fullname={fullname} picture={picture}/>
            <PostBody>
                {children}
            </PostBody>
            <PostFooter />
        </div>
    );
}

const Header = ({fullname, picture}) => {
    return (
        <div className='post-header'>
            <img className='profile-pic' src={picture} alt={fullname+' profile picture'} />
            <span>{fullname}</span>
        </div>
    );
}

const PostBody = ({children}) => {
    const reactions = ['thumbs-up', 'heart', 'poo', 'smile-wink', 'sad-cry']

    return (
        <div className='post-body'>
            {children}
            <div className='reaction-container'>
                {
                    reactions.map(
                        icon => <i key={icon} className={'fas fa-'+icon} />
                    )
                }
            </div>
        </div>
    );
}

const PostFooter = () => {
    const [comments, setComments] = useState([]);
    const [text, setText] = useState('');

    const postComment = (e) => {
        e.preventDefault();

        setComments([...comments, 
            {content: text, time: Date().toString()}
        ]);
        setText('')
    }

    return (
        <div className='post-footer'>
            {comments.map(
                (comment, id) => <Comment
                                    key={id}
                                    content={comment.content}
                                    time={comment.time}
                                    fullname='Elizabeth Morris'
                                    picture='https://randomuser.me/api/portraits/thumb/women/51.jpg'
                                />
            )}
            <form onSubmit={postComment}>
                <textarea
                    className='comment-area'
                    placeholder='Comentário'
                    value={text}
                    onChange={(e)=>setText(e.target.value)}
                />
                <input className='comment-btn' type='submit' value='Comentar' />
            </form>
        </div>
    );
}

const Comment = ({picture, fullname, content, time}) => {
    return (
        <div className='comment'>
            <Header picture={picture} fullname={fullname} />
            <p className='comment-content'>{content}</p>
            <p className='comment-time'>{time}</p>
        </div>
    );
}

export default Post;