
const ConditionalSimplified = () => {
    const [insurnaceSelector, setinsurnaceSelector] = useState(null);

    const SwitchActivatior = () => {
        switch (insurnaceSelector) {
            case "0":
                return <div>No value</div>;
            case "1":
                return <div>
                    <label htmlFor="Room1" className="block  text-sm font-bold mb-2">Room 1: Capacity </label>
                    <input
                        className="form-control input-sm"
                        id="Room1" type="text" placeholder="100"
                        value={Room1} onChange={handleChange} />
                </div>
            case "2":
                return <div>
                    <label htmlFor="Room2" className="block  text-sm font-bold mb-2">Room 2: Capacity </label>
                    <input
                        className="form-control input-sm"
                        id="Room2" type="text" placeholder="100"
                        value={Room1} onChange={handleChange} />
                </div>

            case "3":
                return <div>
                    <label htmlFor="Room3" className="block  text-sm font-bold mb-2">Room 3: Capacity </label>
                    <input
                        className="form-control input-sm"
                        id="Room3" type="text" placeholder="100"
                        value={Room1} onChange={handleChange} />
                </div>
            default:
                return null;
        }
    }
    return (<div>
        <div>
            <label htmlFor="tipoId" className="col-md-6">
                Select insurance Type:
            </label>
            <select className="form-select" id="insuranceType" value={insuranceType} onChange={handleChange}
                onClick={(event) => {
                    // here set target value to state which is 0, 1, 2, 3
                    SwitchActivatior(event.target.value);
                }}>
                <option value="0">Select:</option>
                <option value="1">Room1:</option>
                <option value="2">Room2:</option>
                <option value="3">Room3:</option>
            </select>
        </div>
        {ConditionalSimplified()}

    </div>)

};

export default ConditionalSimplified;