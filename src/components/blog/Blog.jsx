import PropTypes from 'prop-types';
import { BsBookmarks } from "react-icons/bs";

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {id, title, cover, author, author_img, reading_time, posted_date, hashtags} = blog;

    return (
        <div className='ml-32 mb-10'>
            <img className='w-96 mb-2' src={cover} alt={`Cover pciture of the title ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex justify-between items-center gap-x-8'>
                    <img className='w-14 rounded-full' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='ml-2 text-2xl text-red-600'><BsBookmarks></BsBookmarks></button>

                </div>
            </div>
            <h2 className='text-xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx} className='ml-4'><a href=""># {hash}</a></span>)
                }
            </p>
            <button onClick={() => handleMarkAsRead(id, reading_time)} className='text-purple-600 font-bold underline mt-3'>Mark As Read</button>
            
        </div>
    );
};

// For prototype error solving
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func
}

export default Blog;