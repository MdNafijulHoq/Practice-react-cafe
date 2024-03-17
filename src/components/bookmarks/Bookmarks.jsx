import PropTypes from 'prop-types'
import Bookmark from '../bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <header className="md:w-1/3 bg-gray-300 ml-3 p-4">
            <div className='mb-5'>
                <h3 className='text-4xl text-center'>Reading Time: {readingTime}</h3>
            </div>
            <h2 className="text-3xl text-center">Bookmarks: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </header>
    );
};

Bookmarks.propTypes ={
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}


export default Bookmarks;