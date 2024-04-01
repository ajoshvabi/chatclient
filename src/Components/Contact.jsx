import React from "react"
import { Link } from "react-router-dom";
import {  Row, Col, Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import Chat from "./Chat";
import Messages from "./Messages";


const Contact = () => {
    const activechat = useSelector((state) => state.newchat.chatdata);

    return (
        <>
        {/* ----------------------------for large device---------------------------------------- */}
        <div className="prevent-select d-none d-lg-block ">
            <p className="pt-3 mt-2 text-light invisible ">.</p>
            <p className=" text-light d-none d-lg-block invisible  ">.</p>
            <Row className="chatsection  ">
                <Col xs={12} className="py-2 ">
                    <Row>
                        <Col xs={2} md={1} lg={2} className="mt-2 mx-lg-2">
                            <Image roundedCircle className="contactprofile"
                                src="https://media-tir3-2.cdn.whatsapp.net/v/t61.24694-24/370501513_1318708735703949_8851594961530675467_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdQHGTcxn-uszkbSyjNRIn579Qx6ml50DOOgkdbBk0F7Ag&oe=656208AA&_nc_sid=e6ed6c&_nc_cat=104">
                            </Image>
                        </Col>
                        <Col xs className="mt-2 ps-2">
                            <div className="d-flex">
                                <span className="contactusername  ">Ajosh</span>
                                <div className="ms-auto mt-1 ">
                                    <label className="contacttime">10:40 Pm</label>
                                </div>
                            </div>
                            <div className="d-flex">
                                <span className="text contactmsg">You:haii</span>
                                <div className="ms-auto contactcountbg d-flex justify-content-center mt-1 ">
                                    <small className=" contactmsgcount">10</small>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="chatsection">
                <Col xs={12} className="py-2">
                    <Row>
                        <Col xs={2} md={1} lg={2} className="mt-2 mx-lg-2">
                            <Image roundedCircle className="contactprofile"
                                src="https://media-tir3-2.cdn.whatsapp.net/v/t61.24694-24/399070358_270338242205221_7265843270982170577_n.jpg?ccb=11-4&oh=01_AdSECJk6TdJjoYkZD94kDrgBmeFI1dHvcqHmN-JJp2BT4w&oe=657154AE&_nc_sid=e6ed6c&_nc_cat=100">
                            </Image>
                        </Col>
                        <Col xs className="mt-2 ps-2">
                            <div className="d-flex">
                                <span className="contactusername  ">Nayana</span>
                                <div className="ms-auto mt-1 ">
                                    <label className="contacttimediable">10:30 Pm</label>
                                </div>
                            </div>
                            <div>
                                <span className="text contactmgnoactive">
                                    <svg viewBox="0 0 18 18" height="18" width="18" preserveAspectRatio="xMidYMid meet" className="mb-1 me-1 text-info " version="1.1" x="0px" y="0px" enableBackground="new 0 0 18 18"><path fill="currentColor" d="M17.394,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-0.427-0.388c-0.171-0.167-0.431-0.15-0.578,0.038L7.792,13.13 c-0.147,0.188-0.128,0.478,0.043,0.645l1.575,1.51c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C17.616,5.456,17.582,5.182,17.394,5.035z M12.502,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-2.614-2.556c-0.171-0.167-0.447-0.164-0.614,0.007l-0.505,0.516 c-0.167,0.171-0.164,0.447,0.007,0.614l3.887,3.8c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C12.724,5.456,12.69,5.182,12.502,5.035z"></path></svg>
                                    Hello world</span>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="chatsection">
                <Col xs={12} className="py-2">
                    <Row>
                        <Col xs={2} md={1} lg={2} className="mt-2 mx-lg-2">
                            <Image roundedCircle className="contactprofile"
                                src="https://media-tir3-1.cdn.whatsapp.net/v/t61.24694-24/394128619_1079193306298457_519987360046436276_n.jpg?ccb=11-4&oh=01_AdQfGacsZP9Ts8KZ_EsI_pGd5hdmgvlBflKwyHKqHzLYJQ&oe=6564B610&_nc_sid=e6ed6c&_nc_cat=100">
                            </Image>
                        </Col>
                        <Col xs className="mt-2 ps-2">
                            <div className="d-flex">
                                <span className="contactusername  ">Afsal</span>
                                <div className="ms-auto mt-1 ">
                                    <label className="contacttime">10:30 Pm</label>
                                </div>
                            </div>
                            <div className="d-flex">
                                <span className="text contactmsg">Hello afsal</span>
                                <div className="ms-auto contactcountbg d-flex justify-content-center mt-1 ">
                                    <small className=" contactmsgcount">36</small>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="chatsection">
                <Col xs={12} className="py-2">
                    <Row>
                        <Col xs={2} md={1} lg={2} className="mt-2 mx-lg-2">
                            <Image roundedCircle className="contactprofile"
                                src="https://media-tir3-1.cdn.whatsapp.net/v/t61.24694-24/390263225_227501320155270_8351477915174481738_n.jpg?ccb=11-4&oh=01_AdSaPrDkIhFKctKDgBWEXpIHXe1wvvf3BUMKXaoaTz3IUg&oe=6564A66E&_nc_sid=e6ed6c&_nc_cat=110">
                            </Image>
                        </Col>
                        <Col xs className="mt-2 ps-2">
                            <div className="d-flex">
                                <span className="contactusername  ">Firoz</span>
                                <div className="ms-auto mt-1 ">
                                    <label className="contacttimediable">10:30 Pm</label>
                                </div>
                            </div>
                            <div>
                                <span className="contactmgnoactive">
                                    <svg viewBox="0 0 18 18" height="18" width="18" preserveAspectRatio="xMidYMid meet" className="mb-1 me-1" version="1.1" x="0px" y="0px" enableBackground="new 0 0 18 18"><path fill="currentColor" d="M17.394,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-0.427-0.388c-0.171-0.167-0.431-0.15-0.578,0.038L7.792,13.13 c-0.147,0.188-0.128,0.478,0.043,0.645l1.575,1.51c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C17.616,5.456,17.582,5.182,17.394,5.035z M12.502,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-2.614-2.556c-0.171-0.167-0.447-0.164-0.614,0.007l-0.505,0.516 c-0.167,0.171-0.164,0.447,0.007,0.614l3.887,3.8c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C12.724,5.456,12.69,5.182,12.502,5.035z"></path></svg>
                                    hai firoz</span>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="chatsection">
                <Col xs={12} className="py-2">
                    <Row>
                        <Col xs={2} md={1} lg={2} className="mt-2 mx-lg-2">
                            <Image roundedCircle className="contactprofile"
                                src="https://pps.whatsapp.net/v/t61.24694-24/379727674_883237939804169_2396844031284431467_n.jpg?ccb=11-4&oh=01_AdSQj-Q0up7MKqVE7en7AU4TjNfqXwPSQcokA85JhkjImg&oe=6564C279&_nc_sid=e6ed6c&_nc_cat=109">
                            </Image>
                        </Col>
                        <Col xs className="mt-2 ps-2">
                            <div className="d-flex">
                                <span className="contactusername  ">Krishna</span>
                                <div className="ms-auto mt-1 ">
                                    <label className="contacttime">10:30 Pm</label>
                                </div>
                            </div>
                            <div className="d-flex">
                                <span className="text contactmsg">Hello krishna</span>
                                <div className="ms-auto contactcountbg d-flex justify-content-center mt-1 ">
                                    <small className=" contactmsgcount">3</small>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="chatsection">
                <Col xs={12} className="py-2">
                    <Row>
                        <Col xs={2} md={1} lg={2} className="mt-2 mx-lg-2">
                            <Image roundedCircle className="contactprofile"
                                src="https://pps.whatsapp.net/v/t61.24694-24/386181658_837360348390389_3030656255351628174_n.jpg?ccb=11-4&oh=01_AdS6x1fs6ZLQAkvETEmbqgUdeIT6Cs3ftpILAKXpZ_W-sg&oe=65649D8D&_nc_sid=e6ed6c&_nc_cat=100">
                            </Image>
                        </Col>
                        <Col xs className="mt-2 ps-2">
                            <div className="d-flex">
                                <span className="contactusername  ">Bini</span>
                                <div className="ms-auto mt-1 ">
                                    <label className="contacttimediable">10:30 Pm</label>
                                </div>
                            </div>
                            <div className="d-flex">
                                <span className="text contactmgnoactive">
                                    <svg viewBox="0 0 18 18" height="18" width="18" preserveAspectRatio="xMidYMid meet" className="mb-1 me-1 text-info " version="1.1" x="0px" y="0px" enableBackground="new 0 0 18 18"><path fill="currentColor" d="M17.394,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-0.427-0.388c-0.171-0.167-0.431-0.15-0.578,0.038L7.792,13.13 c-0.147,0.188-0.128,0.478,0.043,0.645l1.575,1.51c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C17.616,5.456,17.582,5.182,17.394,5.035z M12.502,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-2.614-2.556c-0.171-0.167-0.447-0.164-0.614,0.007l-0.505,0.516 c-0.167,0.171-0.164,0.447,0.007,0.614l3.887,3.8c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C12.724,5.456,12.69,5.182,12.502,5.035z"></path></svg>
                                    Kidam</span>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row className="chatsection">
                <Col xs={12} className="py-2">
                    <Row>
                        <Col xs={2} md={1} lg={2} className="mt-2 mx-lg-2">
                            <Image roundedCircle className="contactprofile"
                                src="https://media.licdn.com/dms/image/D5603AQFYRSLTfBcmxA/profile-displayphoto-shrink_400_400/0/1687476288550?e=1705536000&v=beta&t=k56v_G0KOfKRQ3mtNz14esgDk668eEN06kTRUUpD2aI">
                            </Image>
                        </Col>
                        <Col xs className="mt-2 ps-2">
                            <div className="d-flex">
                                <span className="contactusername  ">Mithun</span>
                                <div className="ms-auto mt-1 ">
                                    <label className="contacttime">10:30 Pm</label>
                                </div>
                            </div>
                            <div className="d-flex">
                                <span className="text contactmsg">Hello mithun</span>
                                <div className="ms-auto contactcountbg d-flex justify-content-center mt-1 ">
                                    <small className=" contactmsgcount">3</small>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="chatsection">
                <Col xs={12} className="py-2">
                    <Row>
                        <Col xs={2} md={1} lg={2} className="mt-2 mx-lg-2">
                            <Image roundedCircle className="contactprofile"
                                src="https://media-tir3-2.cdn.whatsapp.net/v/t61.24694-24/370501513_1318708735703949_8851594961530675467_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdQHGTcxn-uszkbSyjNRIn579Qx6ml50DOOgkdbBk0F7Ag&oe=656208AA&_nc_sid=e6ed6c&_nc_cat=104">
                            </Image>
                        </Col>
                        <Col xs className="mt-2 ps-2">
                            <div className="d-flex">
                                <span className="contactusername  ">Ajosh</span>
                                <div className="ms-auto mt-1 ">
                                    <label className="contacttime">10:30 Pm</label>
                                </div>
                            </div>
                            <div className="d-flex">
                                <span className="text contactmsg">You:haii</span>
                                <div className="ms-auto contactcountbg d-flex justify-content-center mt-1 ">
                                    <small className=" contactmsgcount">10</small>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="chatsection">
                <Col xs={12} className="py-2">
                    <Row>
                        <Col xs={2} md={1} lg={2} className="mt-2 mx-lg-2">
                            <Image roundedCircle className="contactprofile"
                                src="https://media-tir3-2.cdn.whatsapp.net/v/t61.24694-24/399070358_270338242205221_7265843270982170577_n.jpg?ccb=11-4&oh=01_AdSECJk6TdJjoYkZD94kDrgBmeFI1dHvcqHmN-JJp2BT4w&oe=657154AE&_nc_sid=e6ed6c&_nc_cat=100">
                            </Image>
                        </Col>
                        <Col xs className="mt-2 ps-2">
                            <div className="d-flex">
                                <span className="contactusername  ">Nayana</span>
                                <div className="ms-auto mt-1 ">
                                    <label className="contacttimediable">10:30 Pm</label>
                                </div>
                            </div>
                            <div className="d-flex">
                                <span className="text contactmgnoactive">
                                    <svg viewBox="0 0 18 18" height="18" width="18" preserveAspectRatio="xMidYMid meet" className="mb-1 me-1 " version="1.1" x="0px" y="0px" enableBackground="new 0 0 18 18"><path fill="currentColor" d="M17.394,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-0.427-0.388c-0.171-0.167-0.431-0.15-0.578,0.038L7.792,13.13 c-0.147,0.188-0.128,0.478,0.043,0.645l1.575,1.51c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C17.616,5.456,17.582,5.182,17.394,5.035z M12.502,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-2.614-2.556c-0.171-0.167-0.447-0.164-0.614,0.007l-0.505,0.516 c-0.167,0.171-0.164,0.447,0.007,0.614l3.887,3.8c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C12.724,5.456,12.69,5.182,12.502,5.035z"></path></svg>
                                    Hello world</span>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="chatsection">
                <Col xs={12} className="py-2">
                    <Row>
                        <Col xs={2} md={1} lg={2} className="mt-2 mx-lg-2">
                            <Image roundedCircle className="contactprofile"
                                src="https://media-tir3-1.cdn.whatsapp.net/v/t61.24694-24/394128619_1079193306298457_519987360046436276_n.jpg?ccb=11-4&oh=01_AdQfGacsZP9Ts8KZ_EsI_pGd5hdmgvlBflKwyHKqHzLYJQ&oe=6564B610&_nc_sid=e6ed6c&_nc_cat=100">
                            </Image>
                        </Col>
                        <Col xs className="mt-2 ps-2">
                            <div className="d-flex">
                                <span className="contactusername  ">Afsal</span>
                                <div className="ms-auto mt-1 ">
                                    <label className="contacttime">10:30 Pm</label>
                                </div>
                            </div>
                            <div className="d-flex">
                                <span className="text contactmsg">Hello afsal</span>
                                <div className="ms-auto contactcountbg d-flex justify-content-center mt-1 ">
                                    <small className=" contactmsgcount">36</small>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="chatsection">
                <Col xs={12} className="py-2">
                    <Row>
                        <Col xs={2} md={1} lg={2} className="mt-2 mx-lg-2">
                            <Image roundedCircle className="contactprofile"
                                src="https://media-tir3-1.cdn.whatsapp.net/v/t61.24694-24/390263225_227501320155270_8351477915174481738_n.jpg?ccb=11-4&oh=01_AdSaPrDkIhFKctKDgBWEXpIHXe1wvvf3BUMKXaoaTz3IUg&oe=6564A66E&_nc_sid=e6ed6c&_nc_cat=110">
                            </Image>
                        </Col>
                        <Col xs className="mt-2 ps-2">
                            <div className="d-flex">
                                <span className="contactusername  ">Firoz</span>
                                <div className="ms-auto mt-1 ">
                                    <label className="contacttimediable">10:30 Pm</label>
                                </div>
                            </div>
                            <div className="d-flex">
                                <span className="text contactmgnoactive">
                                    <svg viewBox="0 0 18 18" height="18" width="18" preserveAspectRatio="xMidYMid meet" className="mb-1 me-1 text-info " version="1.1" x="0px" y="0px" enableBackground="new 0 0 18 18"><path fill="currentColor" d="M17.394,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-0.427-0.388c-0.171-0.167-0.431-0.15-0.578,0.038L7.792,13.13 c-0.147,0.188-0.128,0.478,0.043,0.645l1.575,1.51c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C17.616,5.456,17.582,5.182,17.394,5.035z M12.502,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-2.614-2.556c-0.171-0.167-0.447-0.164-0.614,0.007l-0.505,0.516 c-0.167,0.171-0.164,0.447,0.007,0.614l3.887,3.8c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C12.724,5.456,12.69,5.182,12.502,5.035z"></path></svg>
                                    hai firoz</span>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="chatsection">
                <Col xs={12} className="py-2">
                    <Row>
                        <Col xs={2} md={1} lg={2} className="mt-2 mx-lg-2">
                            <Image roundedCircle className="contactprofile"
                                src="https://pps.whatsapp.net/v/t61.24694-24/379727674_883237939804169_2396844031284431467_n.jpg?ccb=11-4&oh=01_AdSQj-Q0up7MKqVE7en7AU4TjNfqXwPSQcokA85JhkjImg&oe=6564C279&_nc_sid=e6ed6c&_nc_cat=109">
                            </Image>
                        </Col>
                        <Col xs className="mt-2 ps-2">
                            <div className="d-flex">
                                <span className="contactusername  ">Krishna</span>
                                <div className="ms-auto mt-1 ">
                                    <label className="contacttime">10:30 Pm</label>
                                </div>
                            </div>
                            <div className="d-flex">
                                <span className="text contactmsg">Hello krishna</span>
                                <div className="ms-auto contactcountbg d-flex justify-content-center mt-1 ">
                                    <small className=" contactmsgcount">3</small>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="chatsection">
                <Col xs={12} className="py-2">
                    <Row>
                        <Col xs={2} md={1} lg={2} className="mt-2 mx-lg-2">
                            <Image roundedCircle className="contactprofile"
                                src="https://pps.whatsapp.net/v/t61.24694-24/386181658_837360348390389_3030656255351628174_n.jpg?ccb=11-4&oh=01_AdS6x1fs6ZLQAkvETEmbqgUdeIT6Cs3ftpILAKXpZ_W-sg&oe=65649D8D&_nc_sid=e6ed6c&_nc_cat=100">
                            </Image>
                        </Col>
                        <Col xs className="mt-2 ps-2">
                            <div className="d-flex">
                                <span className="contactusername  ">Bini</span>
                                <div className="ms-auto mt-1 ">
                                    <label className="contacttimediable">10:30 Pm</label>
                                </div>
                            </div>
                            <div className="d-flex">
                                <span className="text contactmgnoactive">
                                    <svg viewBox="0 0 18 18" height="18" width="18" preserveAspectRatio="xMidYMid meet" className="mb-1 me-1  " version="1.1" x="0px" y="0px" enableBackground="new 0 0 18 18"><path fill="currentColor" d="M17.394,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-0.427-0.388c-0.171-0.167-0.431-0.15-0.578,0.038L7.792,13.13 c-0.147,0.188-0.128,0.478,0.043,0.645l1.575,1.51c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C17.616,5.456,17.582,5.182,17.394,5.035z M12.502,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-2.614-2.556c-0.171-0.167-0.447-0.164-0.614,0.007l-0.505,0.516 c-0.167,0.171-0.164,0.447,0.007,0.614l3.887,3.8c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C12.724,5.456,12.69,5.182,12.502,5.035z"></path></svg>

                                    Kidam</span>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="chatsection">
                <Col xs={12} className="py-2">
                    <Row>
                        <Col xs={2} md={1} lg={2} className="mt-2 mx-lg-2">
                            <Image roundedCircle className="contactprofile"
                                src="https://media.licdn.com/dms/image/D5603AQFYRSLTfBcmxA/profile-displayphoto-shrink_400_400/0/1687476288550?e=1705536000&v=beta&t=k56v_G0KOfKRQ3mtNz14esgDk668eEN06kTRUUpD2aI">
                            </Image>
                        </Col>
                        <Col xs className="mt-2 ps-2">
                            <div className="d-flex">
                                <span className="contactusername  ">Mithun</span>
                                <div className="ms-auto mt-1 ">
                                    <label className="contacttime">10:30 Pm</label>
                                </div>
                            </div>
                            <div className="d-flex">
                                <span className="text contactmsg">Hello mithun</span>
                                <div className="ms-auto contactcountbg d-flex justify-content-center mt-1 ">
                                    <small className=" contactmsgcount">3</small>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </div>






                {/* ----------------------------for small device---------------------------------------- */}

        <div className="prevent-select d-block d-lg-none ">
            <p className="pt-3 mt-2 text-light invisible ">.</p>
            <p className=" text-light d-none d-lg-block invisible  ">.</p>

            {activechat.loginid?
<>

<Chat /><Messages />
</>

            :
            <>
            <Link className="linknon" to='/chat'>
<Row className="chatsection  ">
    <Col xs={12} className="py-2">
        <Row>
            <Col xs={2} md={1} lg={2} className="mt-2 mx-lg-2">
                <Image roundedCircle className="contactprofile"
                    src="https://media-tir3-2.cdn.whatsapp.net/v/t61.24694-24/370501513_1318708735703949_8851594961530675467_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdQHGTcxn-uszkbSyjNRIn579Qx6ml50DOOgkdbBk0F7Ag&oe=656208AA&_nc_sid=e6ed6c&_nc_cat=104">
                </Image>
            </Col>
            <Col xs className="mt-2 ps-2">
                <div className="d-flex">
                    <span className="contactusername  ">Ajosh00000</span>
                    <div className="ms-auto mt-1 ">
                        <label className="contacttime">10:40 Pm</label>
                    </div>
                </div>
                <div className="d-flex">
                    <span className="text contactmsg">You:haii</span>
                    <div className="ms-auto contactcountbg d-flex justify-content-center mt-1 ">
                        <small className=" contactmsgcount">10</small>
                    </div>
                </div>
            </Col>
        </Row>
    </Col>
</Row>
</Link>
<Row className="chatsection">
    <Col xs={12} className="py-2">
        <Row>
            <Col xs={2} md={1} lg={2} className="mt-2 mx-lg-2">
                <Image roundedCircle className="contactprofile"
                    src="https://media-tir3-2.cdn.whatsapp.net/v/t61.24694-24/399070358_270338242205221_7265843270982170577_n.jpg?ccb=11-4&oh=01_AdSECJk6TdJjoYkZD94kDrgBmeFI1dHvcqHmN-JJp2BT4w&oe=657154AE&_nc_sid=e6ed6c&_nc_cat=100">
                </Image>
            </Col>
            <Col xs className="mt-2 ps-2">
                <div className="d-flex">
                    <span className="contactusername  ">Nayana</span>
                    <div className="ms-auto mt-1 ">
                        <label className="contacttimediable">10:30 Pm</label>
                    </div>
                </div>
                <div>
                    <span className="text contactmgnoactive">
                        <svg viewBox="0 0 18 18" height="18" width="18" preserveAspectRatio="xMidYMid meet" className="mb-1 me-1 text-info " version="1.1" x="0px" y="0px" enableBackground="new 0 0 18 18"><path fill="currentColor" d="M17.394,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-0.427-0.388c-0.171-0.167-0.431-0.15-0.578,0.038L7.792,13.13 c-0.147,0.188-0.128,0.478,0.043,0.645l1.575,1.51c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C17.616,5.456,17.582,5.182,17.394,5.035z M12.502,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-2.614-2.556c-0.171-0.167-0.447-0.164-0.614,0.007l-0.505,0.516 c-0.167,0.171-0.164,0.447,0.007,0.614l3.887,3.8c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C12.724,5.456,12.69,5.182,12.502,5.035z"></path></svg>
                        Hello world</span>
                </div>
            </Col>
        </Row>
    </Col>
</Row>
</>
            }











        </div>
        </>
        
    )
}
export default Contact
// #202C33