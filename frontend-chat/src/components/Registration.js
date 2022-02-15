import React, { useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { userRegister } from '../store/actions/authActions';

import { SUCCESS_MESSAGE_CLEAR, ERROR_MESSAGE_CLEAR } from '../store/types/authType'

function Registration() {

    const navigate = useNavigate();
    const alert = useAlert();
    const { loading, successMessage, error, authenticate, myInfo } = useSelector(state => state.auth);
    // console.log(myInfo);
    const dispatch = useDispatch();


    const [state, setState] = useState({
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
        // image: ''
    })

    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    // const fileHandle = (e) => {
    //     console.log(e.target.files[0]);
    //     if (e.target.files.length !== 0) {
    //         setState({
    //             ...state,
    //             [e.target.name]: e.target.files[0]
    //         })
    //     }
    // }

    const registerSubmit = (e) => {
        const { userName, email, password, confirmPassword, image } = state;
        e.preventDefault()

        const formData = new FormData()

        formData.append('userName', userName)
        formData.append('email', email)
        formData.append('password', password)
        formData.append('confirmPassword', confirmPassword)
        formData.append('image', image)

        dispatch(userRegister(formData))
        // console.log(state);
    }
    // console.log(history);
    useEffect(() => {

        if (authenticate) {
            navigate('/messenger', { replace: true })
        }
        if (successMessage) {
            alert.success(successMessage);
            dispatch({ type: SUCCESS_MESSAGE_CLEAR })
        }
        if (error) {
            error.map(err => alert.error(err));
            dispatch({ type: ERROR_MESSAGE_CLEAR })
        }
    }, [successMessage, error])


    return (
        <section className="_social_registration_wrapper _layout_main_wrapper">
            <div className="_shape_one">
                <img src="assets/images/shape1.svg" alt className="_shape_img" />
                <img src="assets/images/dark_shape.svg" alt className="_dark_shape" />
            </div>
            <div className="_shape_two">
                <img src="assets/images/shape2.svg" alt className="_shape_img" />
                <img src="assets/images/dark_shape1.svg" alt className="_dark_shape _dark_shape_opacity" />
            </div>
            <div className="_shape_three">
                <img src="assets/images/shape3.svg" alt className="_shape_img" />
                <img src="assets/images/dark_shape2.svg" alt className="_dark_shape _dark_shape_opacity" />
            </div>
            <div className="_social_registration_wrap">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                            <div className="_social_registration_right">
                                <div className="_social_registration_right_image">
                                    <img src="assets/images/registration.png" alt="Image" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                            <div className="_social_registration_content">
                                <p className="_social_registration_content_para _mar_b8">Get Started Now</p>
                                <h4 className="_social_registration_content_title _titl4 _mar_b50">Registration</h4>
                                <button type="button" className="_social_registration_content_btn _mar_b40">
                                    <img src="assets/images/google.svg" alt="Image" className="_google_img" /> <span>Register with google</span>
                                </button>
                                <div className="_social_registration_content_bottom_txt _mar_b40"> <span>Or</span>
                                </div>
                                <form className="_social_registration_form" onSubmit={registerSubmit}>
                                    <div className="row">
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                            <div className="_social_registration_form_input _mar_b14">
                                                <label className="_social_registration_label _mar_b8">User Name</label>
                                                <input
                                                    onChange={inputHandle} name='userName'
                                                    value={state.userName} type="username"
                                                    className="form-control _social_registration_input"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                            <div className="_social_registration_form_input _mar_b14">
                                                <label className="_social_registration_label _mar_b8">Email</label>
                                                <input
                                                    onChange={inputHandle} name='email'
                                                    value={state.email} type="email"
                                                    className="form-control _social_registration_input"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                            <div className="_social_registration_form_input _mar_b14">
                                                <label className="_social_registration_label _mar_b8">Password</label>
                                                <input
                                                    type="password"
                                                    className="form-control _social_registration_input"
                                                    onChange={inputHandle} name='password' value={state.password}

                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                            <div className="_social_registration_form_input _mar_b14">
                                                <label className="_social_registration_label _mar_b8">Repeat Password</label>
                                                <input
                                                    type="password"
                                                    className="form-control _social_registration_input"
                                                    onChange={inputHandle} name='confirmPassword' value={state.confirmPassword}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12">
                                            <div className="form-check _social_registration_form_check">
                                                <input className="form-check-input _social_registration_form_check_input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                                                <label className="form-check-label _social_registration_form_check_label" htmlFor="flexRadioDefault2">I agree to terms &amp; conditions</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-xl-12 col-sm-12">
                                            <div className="_social_registration_form_btn _mar_t40 _mar_b60">
                                                <button type="submit" value='register' className="_social_registration_form_btn_link _btn1">Register now</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                        <div className="_social_registration_bottom_txt">
                                            <p className="_social_registration_bottom_txt_para">Dont have an account?
                                                <span> <Link to='/login'>Login</Link></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default Registration;