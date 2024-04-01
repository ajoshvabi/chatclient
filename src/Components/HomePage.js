import React from "react";
import './style.css'
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";


import About from "./About"
import Contact from "./Contact"
import Nav from "./Nav";
import Chat from "./Chat";
import Messages from "./Messages";
// import { Profile } from "./Profile";

function HomePage() {
    const activechat = useSelector((state) => state.newchat.chatdata);

    return (
        <>
        <div className=" d-none d-lg-block ">
            <Nav/>
        </div>
            <Container fluid className="homecontainer messagebg">
                <Row className="messagebg1">
                    <Col lg={3} md className="homecontact overflow-y-auto text-break">
                    {activechat.loginid?null:
                    <div className="d-block d-lg-none responsivenav">
<Nav/>
                    </div>
                         }
                        <Contact />
                    </Col>
                   
                    <Col lg className="chatbgscroll overflow-y-auto d-none d-lg-block ">
                    {activechat.loginid?
                    <>
                    <Chat  />
                        <Messages />
                    </>
                    :
                    <About/>
                    }
                        
                    </Col>
                </Row>
            </Container>
        </>

    )
}
export default HomePage