import React, { memo, useState } from "react";
import { faChevronDown, faMinus, faPlus, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./PersonsAndRoom.css"

const PersonsAndRoom = ({personsInSearch, setPersonsInSearch, childInSearch, setChildInSearch, roomsInSearch, setRoomsInSearch})=>{
    const [selectToggle, setSelectToggle] = useState(false)


    return(
        <>
        <section className="selection-component">
            <div className="selection">
                <div className="selection-title">
                    <FontAwesomeIcon icon={faUser}/>
                    <span>{` ${roomsInSearch} غرفة - ${personsInSearch} شخص - ${childInSearch} طفل `}</span>
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
                            onClick={()=>setRoomsInSearch(roomsInSearch + 1)}
                            />
                        <span>{roomsInSearch}</span>
                        <FontAwesomeIcon 
                            icon={faMinus}
                            onClick={()=>setRoomsInSearch(roomsInSearch > 0 ? roomsInSearch - 1 : roomsInSearch)}
                            />
                    </div>
                </section>
                <section className="person">
                    <p>شخص</p>
                    <div className="select-number">
                        <FontAwesomeIcon 
                            icon={faPlus}
                            onClick={()=>setPersonsInSearch(personsInSearch + 1)}
                            />
                        <span>{personsInSearch}</span>
                        <FontAwesomeIcon 
                            icon={faMinus}
                            onClick={()=>setPersonsInSearch(personsInSearch > 0 ? personsInSearch - 1 : personsInSearch)}
                            />
                    </div>
                </section>
                <section className="children">
                    <p>طفل</p>
                    <div className="select-number">
                        <FontAwesomeIcon 
                            icon={faPlus}
                            onClick={()=>setChildInSearch(childInSearch + 1)}
                            />
                        <span>{childInSearch}</span>
                        <FontAwesomeIcon 
                            icon={faMinus}
                            onClick={()=>setChildInSearch(childInSearch > 0 ? childInSearch - 1 : childInSearch)}
                            />
                    </div>
                </section>
            </div>
            : ""}
        </section>
        </>
    )
}

export default memo(PersonsAndRoom)