const Header = (props) => {
    const course = props.course
    console.log(props.course)
    return (
        <div>
            <header>
                <h1>{course}</h1>
            </ header>
        </div>
    )
}

export default Header;