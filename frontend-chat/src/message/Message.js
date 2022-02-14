import React from 'react';
import Topbar from '../components/topbar/Topbar';
import OutsideClickHandler from 'react-outside-click-handler';
import { useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route, Link, Outlet, NavLink } from 'react-router-dom';
import InputEmoji from "react-input-emoji";
import FriendsChat from './FriendsChat';
import ActiveChat from './ActiveChat';
import ChatboxTop from './ChatboxTop';

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
                                        <div className="_chat_middle_box  _padd_b24 _padd_t24 _padd_l24 _padd_r24">
                                            <div className="_chat_middle_box_sender">
                                                <div className="chat_middle_box_image">
                                                    <img src="assets/images/chat_profile.png" alt="Image" className="_chat_profile_img" />
                                                </div>
                                                <div className="_chat_middle_message">
                                                    <div className="_chat_middle_box_sender_txt">
                                                        <p className="_chat_middle_box_sender_txt_para">Lorem ipsum dolor sit amet, conse tetur sadipscing.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="_chat_middle_box_time"> <span className="_chat_middle_box_time_txt"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16">
                                                <circle cx={8} cy={8} r="7.5" stroke="#707584" />
                                                <path stroke="#707584" strokeLinecap="round" d="M12 9H8.25A.25.25 0 018 8.75V5" />
                                            </svg>
                                                9:30 PM
                                                <div onClick={() => setVisible(!visible)} className="_remove_btn_box">
                                                    <button type="button" className="_remove_btn">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={4} fill="none" viewBox="0 0 16 4">
                                                            <circle cx={2} cy={2} r={2} fill="#C4C4C4" transform="rotate(-90 2 2)" />
                                                            <circle cx={8} cy={2} r={2} fill="#C4C4C4" transform="rotate(-90 8 2)" />
                                                            <circle cx={14} cy={2} r={2} fill="#C4C4C4" transform="rotate(-90 14 2)" />
                                                        </svg>
                                                    </button>
                                                    {visible &&
                                                        <div className="_remove_btn_dropdown">
                                                            <ul className="_remove_btn_dropdown_list">
                                                                <li className="_remove_btn_dropdown_item">
                                                                    <button type="submit" className="_remove_btn_dropdown_link">
                                                                        <svg width="16px" height="16px" xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><title>Arrow Undo</title><path d="M240 424v-96c116.4 0 159.39 33.76 208 96 0-119.23-39.57-240-208-240V88L64 256z" fill="none" stroke="#666" strokeLinejoin="round" strokeWidth={32} /></svg>Reply
                                                                    </button>
                                                                </li>
                                                                <li className="_remove_btn_dropdown_item">
                                                                    <button type="submit" className="_remove_btn_dropdown_link">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 22 24" fill="none" stroke="#666" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-copy"><rect x={9} y={9} width={13} height={13} rx={2} ry={2} /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>Copy
                                                                    </button>
                                                                </li>
                                                                <li className="_remove_btn_dropdown_item">
                                                                    <button type="submit" className="_remove_btn_dropdown_link">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 22 24" fill="none" stroke="#666" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1={18} y1={6} x2={6} y2={18} /><line x1={6} y1={6} x2={18} y2={18} /></svg>Remove
                                                                    </button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    }
                                                </div>
                                            </span>
                                            </div>
                                            <div className="_chat_middle_box_reciver">
                                                <div className="_chat_middle_box_reciver_area">
                                                    <div className="_chat_middle_message">
                                                        <div className="_chat_middle_box_sender_txt">
                                                            <p className="_chat_middle_box_sender_txt_para">Lorem ipsum dolor sit amet, conse tetur sadipscing.</p>
                                                        </div>
                                                    </div>
                                                    <div className="chat_middle_box_image">
                                                        <img src="assets/images/chat_profile.png" alt="Image" className="_chat_profile_img" />
                                                    </div>
                                                </div>
                                                <div className="_chat_middle_box_time"> <span className="_chat_middle_box_time_txt"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16">
                                                    <circle cx={8} cy={8} r="7.5" stroke="#707584" />
                                                    <path stroke="#707584" strokeLinecap="round" d="M12 9H8.25A.25.25 0 018 8.75V5" />
                                                </svg>
                                                    9:30 PM
                                                    <div onClick={() => setHidden(!isShow)} className="_remove_btn_box">
                                                        <button type="button" className="_remove_btn">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={4} fill="none" viewBox="0 0 16 4">
                                                                <circle cx={2} cy={2} r={2} fill="#C4C4C4" transform="rotate(-90 2 2)" />
                                                                <circle cx={8} cy={2} r={2} fill="#C4C4C4" transform="rotate(-90 8 2)" />
                                                                <circle cx={14} cy={2} r={2} fill="#C4C4C4" transform="rotate(-90 14 2)" />
                                                            </svg>
                                                        </button>
                                                        {isShow &&
                                                            <div className="_remove_btn_dropdown _remove_drop">
                                                                <ul className="_remove_btn_dropdown_list">
                                                                    <li className="_remove_btn_dropdown_item">
                                                                        <button type="submit" className="_remove_btn_dropdown_link">
                                                                            <svg width="16px" height="16px" xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><title>Arrow Undo</title><path d="M240 424v-96c116.4 0 159.39 33.76 208 96 0-119.23-39.57-240-208-240V88L64 256z" fill="none" stroke="#666" strokeLinejoin="round" strokeWidth={32} /></svg>Reply
                                                                        </button>
                                                                    </li>
                                                                    <li className="_remove_btn_dropdown_item">
                                                                        <button type="submit" className="_remove_btn_dropdown_link">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 22 24" fill="none" stroke="#666" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-copy"><rect x={9} y={9} width={13} height={13} rx={2} ry={2} /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>Copy
                                                                        </button>
                                                                    </li>
                                                                    <li className="_remove_btn_dropdown_item">
                                                                        <button type="submit" className="_remove_btn_dropdown_link">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 22 24" fill="none" stroke="#666" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1={18} y1={6} x2={6} y2={18} /><line x1={6} y1={6} x2={18} y2={18} /></svg>Remove
                                                                        </button>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        }
                                                    </div>
                                                </span>
                                                </div>
                                            </div>
                                            <hr className="_border2" />
                                            <div className="_chat_middle_day">
                                                <p className="_chat_middle_day_txt">Today</p>
                                            </div>
                                            <div className="_chat_middle_box_sender">
                                                <div className="chat_middle_box_image">
                                                    <img src="assets/images/chat_profile.png" alt="Image" className="_chat_profile_img" />
                                                </div>
                                                <div className="_chat_middle_message">
                                                    <div className="_chat_middle_box_sender_txt">
                                                        <p className="_chat_middle_box_sender_txt_para">Lorem ipsum dolor sit amet, conse tetur sadipscing.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="_chat_middle_box_time"> <span className="_chat_middle_box_time_txt"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16">
                                                <circle cx={8} cy={8} r="7.5" stroke="#707584" />
                                                <path stroke="#707584" strokeLinecap="round" d="M12 9H8.25A.25.25 0 018 8.75V5" />
                                            </svg>
                                                9:30 PM
                                                <div onClick={() => setOpen(!isOpen)} className="_remove_btn_box">
                                                    <button type="button" className="_remove_btn">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={4} fill="none" viewBox="0 0 16 4">
                                                            <circle cx={2} cy={2} r={2} fill="#C4C4C4" transform="rotate(-90 2 2)" />
                                                            <circle cx={8} cy={2} r={2} fill="#C4C4C4" transform="rotate(-90 8 2)" />
                                                            <circle cx={14} cy={2} r={2} fill="#C4C4C4" transform="rotate(-90 14 2)" />
                                                        </svg>
                                                    </button>
                                                    {isOpen &&
                                                        <div className="_remove_btn_dropdown">
                                                            <ul className="_remove_btn_dropdown_list">
                                                                <li className="_remove_btn_dropdown_item">
                                                                    <button type="submit" className="_remove_btn_dropdown_link">
                                                                        <svg width="16px" height="16px" xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><title>Arrow Undo</title><path d="M240 424v-96c116.4 0 159.39 33.76 208 96 0-119.23-39.57-240-208-240V88L64 256z" fill="none" stroke="#666" strokeLinejoin="round" strokeWidth={32} /></svg>Reply
                                                                    </button>
                                                                </li>
                                                                <li className="_remove_btn_dropdown_item">
                                                                    <button type="submit" className="_remove_btn_dropdown_link">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 22 24" fill="none" stroke="#666" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-copy"><rect x={9} y={9} width={13} height={13} rx={2} ry={2} /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>Copy
                                                                    </button>
                                                                </li>
                                                                <li className="_remove_btn_dropdown_item">
                                                                    <button type="submit" className="_remove_btn_dropdown_link">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 22 24" fill="none" stroke="#666" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1={18} y1={6} x2={6} y2={18} /><line x1={6} y1={6} x2={18} y2={18} /></svg>Remove
                                                                    </button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    }
                                                </div>
                                            </span>
                                            </div>
                                            <div className="_chat_middle_box_reciver">
                                                <div className="_chat_middle_box_reciver_area">
                                                    <div className="_chat_middle_message">
                                                        <div className="_chat_middle_box_sender_txt">
                                                            <p className="_chat_middle_box_sender_txt_para">Lorem ipsum dolor sit amet, conse tetur sadipscing.</p>
                                                        </div>
                                                    </div>
                                                    <div className="chat_middle_box_image">
                                                        <img src="assets/images/chat_profile.png" alt="Image" className="_chat_profile_img" />
                                                    </div>
                                                </div>
                                                <div className="_chat_middle_box_time"> <span className="_chat_middle_box_time_txt"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16">
                                                    <circle cx={8} cy={8} r="7.5" stroke="#707584" />
                                                    <path stroke="#707584" strokeLinecap="round" d="M12 9H8.25A.25.25 0 018 8.75V5" />
                                                </svg>
                                                    9:30 PM
                                                    <div onClick={() => setMenuOpen(!isMenuvisible)} className="_remove_btn_box">
                                                        <button type="button" className="_remove_btn">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={4} fill="none" viewBox="0 0 16 4">
                                                                <circle cx={2} cy={2} r={2} fill="#C4C4C4" transform="rotate(-90 2 2)" />
                                                                <circle cx={8} cy={2} r={2} fill="#C4C4C4" transform="rotate(-90 8 2)" />
                                                                <circle cx={14} cy={2} r={2} fill="#C4C4C4" transform="rotate(-90 14 2)" />
                                                            </svg>
                                                        </button>
                                                        {isMenuvisible &&
                                                            <div className="_remove_btn_dropdown _remove_drop">
                                                                <ul className="_remove_btn_dropdown_list">
                                                                    <li className="_remove_btn_dropdown_item">
                                                                        <button type="submit" className="_remove_btn_dropdown_link">
                                                                            <svg width="16px" height="16px" xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><title>Arrow Undo</title><path d="M240 424v-96c116.4 0 159.39 33.76 208 96 0-119.23-39.57-240-208-240V88L64 256z" fill="none" stroke="#666" strokeLinejoin="round" strokeWidth={32} /></svg>Reply
                                                                        </button>
                                                                    </li>
                                                                    <li className="_remove_btn_dropdown_item">
                                                                        <button type="submit" className="_remove_btn_dropdown_link">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 22 24" fill="none" stroke="#666" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-copy"><rect x={9} y={9} width={13} height={13} rx={2} ry={2} /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>Copy
                                                                        </button>
                                                                    </li>
                                                                    <li className="_remove_btn_dropdown_item">
                                                                        <button type="submit" className="_remove_btn_dropdown_link">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 22 24" fill="none" stroke="#666" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1={18} y1={6} x2={6} y2={18} /><line x1={6} y1={6} x2={18} y2={18} /></svg>Remove
                                                                        </button>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        }
                                                    </div>
                                                </span>
                                                </div>
                                            </div>
                                        </div>
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