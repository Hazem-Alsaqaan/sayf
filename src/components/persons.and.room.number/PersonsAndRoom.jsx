import React, { memo, useState } from "react";
import { faChevronDown, faMinus, faPlus, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./PersonsAndRoom.css"
import { useDispatch, useSelector } from "react-redux";
import { setChildInSearch, setPersonsInSearch, setRoomsInSearch } from "../../redux/reducers/searchDataSlice";

const PersonsAndRoom = ()=>{
    const [selectToggle, setSelectToggle] = useState(false)

    const dispatch = useDispatch()
    const {personsInSearch} = useSelector((state)=>state.searchDataSlice)
    const {childInSearch} = useSelector((state)=>state.searchDataSlice)
    const {roomsInSearch} = useSelector((state)=>state.searchDataSlice)
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
                            onClick={()=>dispatch(setRoomsInSearch(roomsInSearch + 1))}
                            />
                        <span>{roomsInSearch}</span>
                        <FontAwesomeIcon 
                            icon={faMinus}
                            onClick={()=>dispatch(setRoomsInSearch(roomsInSearch > 0 ? roomsInSearch - 1 : roomsInSearch))}
                            />
                    </div>
                </section>
                <section className="person">
                    <p>شخص</p>
                    <div className="select-number">
                        <FontAwesomeIcon 
                            icon={faPlus}
                            onClick={()=>dispatch(setPersonsInSearch(personsInSearch + 1))}
                            />
                        <span>{personsInSearch}</span>
                        <FontAwesomeIcon 
                            icon={faMinus}
                            onClick={()=>dispatch(setPersonsInSearch(personsInSearch > 0 ? personsInSearch - 1 : personsInSearch))}
                            />
                    </div>
                </section>
                <section className="children">
                    <p>طفل</p>
                    <div className="select-number">
                        <FontAwesomeIcon 
                            icon={faPlus}
                            onClick={()=>dispatch(setChildInSearch(childInSearch + 1))}
                            />
                        <span>{childInSearch}</span>
                        <FontAwesomeIcon 
                            icon={faMinus}
                            onClick={()=>dispatch(setChildInSearch(childInSearch > 0 ? childInSearch - 1 : childInSearch))}
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


