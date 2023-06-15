import React from "react";
import AnimatedContainer from "../helpers/AnimatedContainer";
import Chat from "../components/chat/Chat";
import Sidebar from "../components/sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

export default () => {
    const navigate = useNavigate();
    if (sessionStorage.getItem('user_name')) {
        return (
            <div className="bg-blueGray-600">
                <AnimatedContainer>
                    <Sidebar role={sessionStorage.getItem('role')}/>
                    <div style={{paddingLeft: '16rem'}}>
                        <Chat/>
                    </div>
                </AnimatedContainer>
            </div>
        );
    } else {
        navigate('/login');
    }
}