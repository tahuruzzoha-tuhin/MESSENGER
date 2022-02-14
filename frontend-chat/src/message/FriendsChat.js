

import React from 'react';

const ActiveChat = () => {
    return (
        <div className="_chat_left_inner_box _chat_box  _padd_t24 _padd_b24 _padd_r24 _padd_l24 _mar_b8 _chat_active">
            <div className="_chat_left_info">
                <div className="_chat_left_inner_box_image">
                    <img src="assets/images/chat_img.png" alt="Image" className="_chat_img" /> <span className="_chat_left_inner_box_image_svg">
                        <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="none" viewBox="0 0 12 12">
                            <path fill="#0ACF83" stroke="#fff" d="M11.5 6a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z" />
                        </svg>
                    </span>
                </div>
                <div className="_chat_left_inner_box_txt">
                    <h4 className="_chat_left_inner_box_txt_title _title4">Samuel Washington</h4>
                    <p className="_chat_left_inner_box_txt_para">Lorem ipsum dolor sit amet...</p>
                </div>
            </div>
            <div className="_chat_left_inner_box_date">
                <p className="_chat_left_inner_box_date_para">Monday</p>
                <p className="_chat_left_inner_box_date_txt">1</p>
            </div>
        </div>
    );
};

export default ActiveChat;