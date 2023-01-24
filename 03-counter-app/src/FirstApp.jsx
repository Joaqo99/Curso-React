import PropTypes from "prop-types";

export const FirstApp = ({ title })=>{



    return (
        <>
            <h1>{ title }</h1>
            <div>Hola</div>
            <div>chau</div>
        </>
    )
}

FirstApp.protoTypes = {
    title: PropTypes.string.isRequired
}