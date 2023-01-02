// import styles of this component
import styles from "./HeaderBoxes.module.css"

// import other components
import HeaderBox from "../HeaderBox/HeaderBox"

// import react package
import PropTypes from 'prop-types'

// HeaderBoxes component
const HeaderBoxes = ({ titles_numbers }) => (
    <div className={`${styles["header-wrap-boxes"]} flex`}>
        {titles_numbers.map((title_number, idx) => (
            <HeaderBox 
                key={title_number.id}
                title={title_number.title} 
                number={title_number.number}
                /* A ternary operator. If the index is equal to the length of the array minus 1, then it is the last
                element in the array, so it should not have a border right. Otherwise, it should have a border
                right. */
                border_right={idx === titles_numbers.length-1 ? false : true}
            />
        ))}
    </div>
)

HeaderBoxes.propTypes = {
    titles_numbers: PropTypes.array.isRequired
}

export default HeaderBoxes