import React from 'react';
import Topbar from '../components/topbar/Topbar';
import OutsideClickHandler from 'react-outside-click-handler';
import { useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route, Link, Outlet, NavLink } from 'react-router-dom';
import InputEmoji from "react-input-emoji";

const ConversationBox = () => {
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
    );
};

export default ConversationBox;