import React from 'react';
import Topbar from '../components/topbar/Topbar';
import OutsideClickHandler from 'react-outside-click-handler';
import { useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route, Link, Outlet, NavLink } from 'react-router-dom';
import InputEmoji from "react-input-emoji";

const ChatTopLeft = () => {

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
        <div className="_chat_left_top">
            <div className="_chat_top _mar_b24">
                <h4 className="_chat_left_content_title _title5">Chat</h4>
                <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="_chat_left_top_drop">
                    <a className="_chat_left_top_link">
                        <svg xmlns="http://www.w3.org/2000/svg" width={4} height={16} fill="none" viewBox="0 0 4 16">
                            <circle cx={2} cy={2} r={2} fill="#171515" />
                            <circle cx={2} cy={8} r={2} fill="#171515" />
                            <circle cx={2} cy={14} r={2} fill="#171515" />
                        </svg>
                    </a>
                    {isMenuOpen &&
                        <div className="_chat_drop">
                            <button type="submit" className="_chat_drop_link">
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 22 24" fill="none" stroke="#666" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-users">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                    <circle cx={9} cy={7} r={4} />
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg> Create a new group
                            </button>
                        </div>
                    }
                </div>
            </div>
            <div className="_chat_left_box _mar_b16">
                <div className="_chat_left_box_btn">
                    <button onClick={() => setBoxOpen(!isBoxOpen)} type="button" className="_chat_left_box_btn_link">All Chat
                        <svg xmlns="http://www.w3.org/2000/svg" width={10} height={6} fill="none" viewBox="0 0 10 6">
                            <path fill="#112032" d="M5 5l.354.354L5 5.707l-.354-.353L5 5zm4.354-3.646l-4 4-.708-.708 4-4 .708.708zm-4.708 4l-4-4 .708-.708 4 4-.708.708z" />
                        </svg>
                    </button>
                    {isBoxOpen &&
                        <div className="_chat_left_dropdown">
                            <ul className="_chat_left_dropdown_list">
                                <li className="_chat_left_dropdown_item">
                                    <button className="_chat_left_dropdown_link" type="submit">
                                        Recent chat
                                    </button>
                                </li>
                                <li className="_chat_left_dropdown_item">
                                    <button className="_chat_left_dropdown_link" type="submit">
                                        Online
                                    </button>
                                </li>
                                <li className="_chat_left_dropdown_item">
                                    <button className="_chat_left_dropdown_link" type="submit">
                                        Unread
                                    </button>
                                </li>
                            </ul>
                        </div>
                    }
                </div>
                <form className="_chat_left_form">
                    <svg className="_chat_left_form_svg" xmlns="http://www.w3.org/2000/svg" width={17} height={17} fill="none" viewBox="0 0 17 17">
                        <circle cx={7} cy={7} r={6} stroke="#666" />
                        <path stroke="#666" strokeLinecap="round" d="M16 16l-3-3" />
                    </svg>
                    <input type="search" className="_chat_left_form_input" placeholder="input search text" />
                </form>
            </div>
        </div>
    );
};

export default ChatTopLeft;