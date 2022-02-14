import React from 'react';
import Topbar from '../components/topbar/Topbar';
import OutsideClickHandler from 'react-outside-click-handler';
import { useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route, Link, Outlet, NavLink } from 'react-router-dom';
import InputEmoji from "react-input-emoji";
import FriendsChat from './FriendsChat';
import ActiveChat from './ActiveChat';
import ChatboxTop from './ChatboxTop';
import ChatTopLeft from './ChatTopLeft';
import ConversationBox from './ConversationBox';

function Message() {
    let [visible, setVisible] = useState(false);
    let [isMenuOpen, setIsMenuOpen] = useState(false);
    let [isShow, setHidden] = useState(false);
    let [isOpen, setOpen] = useState(false);
    let [isMenuvisible, setMenuOpen] = useState(false);
    let [isMenuShow, setMenuShow] = useState(false);
    let [isBoxOpen, setBoxOpen] = useState(false);
    //for textarea
    const [text, setText] = useState("");
    function handleOnEnter(text) {
        console.log("enter", text);
    }

    return (
        <div className="_layout_main _layout_main_wrapper _layout_chat">
            <Topbar />
            <section className="_chat_wrapper">
                <div className="_chat_wrap">
                    <div className="container-xxl container-fluid-lg">
                        <div className="chat_inner_wrap">
                            <div className="row">
                                <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-12 col-sm-12">
                                    <div className="_chat_left">
                                        <div className="_chat_left_content">

                                            <ChatTopLeft />

                                            {/*-Desktop*/}
                                            <div className="_chat_left_bottom _chat_left_bottom_desktop">


                                                <FriendsChat />
                                                <ActiveChat />
                                                <FriendsChat />
                                                <FriendsChat />
                                                <FriendsChat />

                                            </div>

                                            {/*Laptop*/}

                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-8 col-xl-7 col-lg-6 col-md-12 col-sm-12">
                                    <div className="_chat_right">

                                        <ChatboxTop />

                                        <hr className="_border1" />

                                        <ConversationBox />

                                        <div className="_chat_right_bottom_inner _padd_b24 _padd_t24 _padd_l24 _padd_r24">
                                            <div className="_chat_right_bottom_inner_box">
                                                <div className="chat_bottom_textarea">
                                                    <InputEmoji
                                                        value={text}
                                                        onChange={setText}
                                                        cleanOnEnter
                                                        onEnter={handleOnEnter}
                                                        placeholder="Type a message"
                                                    />
                                                </div>
                                                <div className="_chat_bottom_icon">
                                                    <div className="_chat_bottom_icon_list">
                                                        <button className="_chat_bottom_icon_link" type="button">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={10} fill="none" viewBox="0 0 20 10">
                                                                <path stroke="#1890FF" strokeLinecap="round" strokeLinejoin="round" d="M8 9H5a4 4 0 01-4-4v0a4 4 0 014-4h3M14 5H6M12 9h3a4 4 0 004-4v0a4 4 0 00-4-4h-3" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                    <div className="_chat_bottom_icon_list">
                                                        <button className="_chat_bottom_icon_link _chat_bottom_icon_link1" type="button">post</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Message;