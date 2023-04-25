import React, { useState } from "react";
import { faChevronDown, faMinus, faPlus, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./PersonsAndRoom.css"

const PersonsAndRoom = ()=>{
    const [selectToggle, setSelectToggle] = useState(false)
    const [room, setRoom] = useState(0)
    const [person, setPerson] = useState(0)
    const [children, setChildren] = useState(0)

    return(
        <>
        <section className="selection-component">
            <div className="selection">
                <div>
                    <FontAwesomeIcon icon={faUser}/>
                    <span>{` ${room} غرفة - ${person} شخص - ${children} طفل `}</span>
                </div>
                <FontAwesomeIcon icon={faChevronDown}
                onClick={()=>setSelectToggle(!selectToggle)}
                />
            </div>
            {
                selectToggle ?
                <div className="select-person-room">
                <section className="room">
                    <p>غرفة</p>
                    <div className="select-number">
                        <FontAwesomeIcon 
                            icon={faPlus}
                            onClick={()=>setRoom(room + 1)}
                            />
                        <span>{room}</span>
                        <FontAwesomeIcon 
                            icon={faMinus}
                            onClick={()=>setRoom(room > 0 ? room - 1 : room)}
                            />
                    </div>
                </section>
                <section className="person">
                    <p>شخص</p>
                    <div className="select-number">
                        <FontAwesomeIcon 
                            icon={faPlus}
                            onClick={()=>setPerson(person + 1)}
                            />
                        <span>{person}</span>
                        <FontAwesomeIcon 
                            icon={faMinus}
                            onClick={()=>setPerson(person > 0 ? person - 1 : person)}
                            />
                    </div>
                </section>
                <section className="children">
                    <p>طفل</p>
                    <div className="select-number">
                        <FontAwesomeIcon 
                            icon={faPlus}
                            onClick={()=>setChildren(children + 1)}
                            />
                        <span>{children}</span>
                        <FontAwesomeIcon 
                            icon={faMinus}
                            onClick={()=>setChildren(children > 0 ? children - 1 : children)}
                            />
                    </div>
                </section>
            </div>
            : ""}
        </section>
        </>
    )
}

export default PersonsAndRoom