import React, { useRef, useState } from 'react';
import './Board.css';
import BoardAnnouncement from "./Notice/BoardAnnouncement";

const Board = () => {
    const [activeTab, setActiveTab] = useState('Item1');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const blueSelecRef = useRef(null);
    const blueSelecTabsRef = useRef(null);

    const blueSelecOne = () => {
        blueSelecRef.current.style.width = '133.61px';
        blueSelecRef.current.style.marginLeft = '0px';
        blueSelecTabsRef.current.style.marginLeft = '0px';
        handleTabClick('Item1');
    };

    const blueSelecTwo = () => {
        blueSelecRef.current.style.width = '133.61px';
        blueSelecRef.current.style.marginLeft = '133.61px';
        blueSelecTabsRef.current.style.marginLeft = '-133.61px';
        handleTabClick('Item2');
    };

    const blueSelecThree = () => {
        blueSelecRef.current.style.width = '174.89px';
        blueSelecRef.current.style.marginLeft = '267.22px';
        blueSelecTabsRef.current.style.marginLeft = '-267.22px';
        handleTabClick('Item3');
    };

    return (
        <section className="Board">
            <div className="noticeBoard">
                <h2>게시판</h2>
            </div>
            <div className='TabSearch'>
                <div className='Tab'>
                    <ul>
                        <li onClick={blueSelecOne}>공지사항</li>
                        <li onClick={blueSelecTwo}>문의사항</li>
                        <li onClick={blueSelecThree}>자주하는 질문</li>
                    </ul>
                    <div className='blueSelec' ref={blueSelecRef}>
                        <ul className='blueSelecTabs' ref={blueSelecTabsRef}>
                            <li>공지사항</li>
                            <li>문의사항</li>
                            <li>자주하는 질문</li>
                        </ul>
                    </div>
                </div>
                <div className='Search'>
                    <input type='Search' placeholder='검색어를 입력하세요.' />
                    <i></i>
                </div>
            </div>
            {activeTab === 'Item1' && <BoardAnnouncement />}
            {/* {activeTab === 'BoardAnnouncement2' && <BoardAnnouncement2 />}
            {activeTab === 'BoardAnnouncement3' && <BoardAnnouncement3 />} */}
        </section>
    );
}

export default Board;
