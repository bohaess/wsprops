import React from 'react'
import PropTypes from 'prop-types'
import '../App.css'

const Profile = props  => {
    return (
        <div>
            <div className="carte">
                <h4 className="field"> {props.fullName} </h4>
                <p className=" para"> {props.bio} </p>
                <h4 className="field"> {props.profession}</h4>
                {props.children}
                <button className= " btn" onClick={()=>props.alertName(props.fullName)}>Click !!</button>
            </div>
        </div>
    )
}
Profile.defaultProps= {
    fullName:"Daenerys Targaryen" ,
    bio :"Daenerys Targaryen is a fictional character in George R. R. Martin's A Song of Ice and Fire series of novels, and the television adaptation Game of Thrones" ,
    profession : "Rene"
}

Profile.propTypes ={
    fullName :PropTypes.string ,
    bio : PropTypes.string ,
    profession : PropTypes.string ,
    alertName :PropTypes.func  
}

export default Profile
