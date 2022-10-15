import './filter_items.css'

const FilterItems = () => (
    <div className="filterItems">
        <div className="property_type">
            <h4>Property Type</h4>
            <form>
                <select name="dropdown">
                <option value = "student-acc" selected>Student Accomodation</option>
                <option value = "apartment">Apartment</option>
                <option value = "house">House</option>
                </select>
            </form>
        </div>

        <div className="MinPrice">
            <h4>Min Price</h4>
            <form>
                <select name="dropdown">
                <option value = "1000" selected>1000</option>
                <option value = "2000">2000</option>
                <option value = "3000+">3000+</option>
                </select>
            </form>
        </div>

        <div className="MaxPrice">
            <h4>Max Price</h4>
            <form>
                <select name="dropdown">
                <option value = "1000" selected>1000</option>
                <option value = "2000">2000</option>
                <option value = "3000+">3000+</option>
                </select>
            </form>
        </div>

        <div className="BedRooms">
            <h4>Bed Rooms</h4>
            <form>
                <select name="dropdown">
                <option value = "1" selected>1</option>
                <option value = "2">2</option>
                <option value = "3+">3+</option>
                </select>
            </form>
        </div>
    </div>
)

export default FilterItems;