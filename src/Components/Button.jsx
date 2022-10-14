import "./Button";

const Button = ({ className, Value: value, onClick }) => {
    return(
        <button className={className} onclick={onClick}>
            {value}
        </button>
    )
}