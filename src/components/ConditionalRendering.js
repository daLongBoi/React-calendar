
const AddClaim = () => {
    const [insurnaceSelector, setinsurnaceSelector] = useState(null);


    const getInsuranceTypeDiv = () => {
        switch (insurnaceSelector) {
            case "0":
                return <div>No Insurance Type selected</div>;
            case "1":
                return <div>  <div className="row">
                    <div className="mb-3 pt-0">
                        <label htmlFor="make" className="block  text-sm font-bold mb-2">make: </label>
                        <input
                            className="form-control input-sm"
                            id="make" type="text" placeholder="make"
                            value={make} onChange={handleChange} />
                    </div>
                </div>
                    <div className="row">
                        <div className="mb-3 pt-0">
                            <label htmlFor="model" className="block  text-sm font-bold mb-2">model: </label>
                            <input
                                className="form-control input-sm"
                                id="model" type="text" placeholder="model"
                                value={model} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="mb-3 pt-0">
                            <label htmlFor="yearOfManufacture" className="block  text-sm font-bold mb-2">Year Of Manufacture: </label>
                            <input
                                className="form-control input-sm"
                                id="yearOfManufacture" type="text" placeholder="yearOfManufacture"
                                value={yearOfManufacture} onChange={handleChange} />
                        </div>
                    </div>
                </div>;
            case "2":
                return <div>  <div className="row">
                    <div className="">
                        <label htmlFor="address" className="block  text-sm font-bold mb-2">Address: </label>
                        <textarea type="text" placeholder="Please enter the details of your claim here:"
                            className="form-control input-lg" id="address" value={address} onChange={handleChange} />
                    </div>
                </div>
                </div>;
            case "3":
                return <div>

                    <div className="row">
                        <div className="mb-3 pt-0">
                            <label htmlFor="typeOfAnimal" className="block  text-sm font-bold mb-2">Type Of Animal: </label>
                            <input
                                className="form-control input-sm"
                                id="typeOfAnimal" type="text" placeholder="typeOfAnimal"
                                value={typeOfAnimal} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="mb-3 pt-0">
                            <label htmlFor="breedAnimal" className="block  text-sm font-bold mb-2">Breed Animal: </label>
                            <input
                                className="form-control input-sm"
                                id="breedAnimal" type="text" placeholder="BreedAnimal"
                                value={breedAnimal} onChange={handleChange} />
                        </div>
                    </div>
                </div>;
            case "4":
                return <div>Other option</div>;
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
                    setinsurnaceSelector(event.target.value);
                }}>
                <option value="1">Motor:</option>
                <option value="2">Home:</option>
                <option value="3">Pet:</option>
            </select>
        </div>
        {getInsuranceTypeDiv()}
    </div>
    )
}
export default AddClaim;
