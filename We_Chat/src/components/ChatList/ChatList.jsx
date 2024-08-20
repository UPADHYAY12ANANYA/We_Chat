import React, {useState} from 'react'
import './ChatList.css'
import search from '../../assets/search.png'
import plus from '../../assets/plus.png'
import minus from '../../assets/minus.png'
import avatar from '../../assets/avatar.png'

const ChatList = () => {

    const [addMode, setAddMode] = useState(false)

  return (
    <div className='chatList'>
        <div className='search'>
            <div className="searchBar">
                <img src={search} alt="" />
                <input type="text" placeholder='Search'/>
            </div>
            <img src={addMode ? minus : plus} alt="add" className='add'
                onClick={()=>setAddMode((prev) => !prev)}
            />
        </div>
        <div className="item">
            <img src={avatar} alt="" />
            <div className="texts">
                
            </div>
        </div>
    </div>
  )
}

export default ChatList