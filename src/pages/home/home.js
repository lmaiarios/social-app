import React from 'react';
import Post from './components/post';
import './home.css';

function Home(){
    return (
        <div className='home'>
            <Post
                fullname='Elizabeth Morris'
                picture='https://randomuser.me/api/portraits/thumb/women/51.jpg'
            >
                Laboris nulla deserunt ea eiusmod et. Lorem mollit occaecat esse pariatur magna adipisicing magna fugiat laboris magna amet aliquip et reprehenderit. Eu ipsum et qui reprehenderit incididunt reprehenderit aliquip nulla. Incididunt eu exercitation dolor enim voluptate cupidatat aliqua commodo elit. Laborum ea culpa proident do. Non eu sit est irure anim dolore minim veniam. Consequat amet occaecat laboris duis irure mollit amet consequat mollit magna. Ex laboris est non sunt enim.
            </Post>
        </div>
    );
}

export default Home;