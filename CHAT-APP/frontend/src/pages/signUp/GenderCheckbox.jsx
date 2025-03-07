    
    const GenderCheckbox = ({oncheckboxChange,selectedGender}) => {
        return(
            <div className="flex">
                <div className="form-control">
                    <label className={'label gap-2 cursor-pointer ${selectedgender === "male" ? "selected" : ""}'}>
                        <span className="label-text">Male</span>
                        <input type="checkbox" className="checkbox border-slate-900"
                        checked={selectedGender === "male"}
                        onChange={() => oncheckboxChange("male")}
                        />
                    </label>
                </div>

                <div className="form-control">
                <label className={'label gap-2 cursor-pointer ${selectedgender === "female" ? "selected" : ""}'}>
                        <span className="label-text">FeMale</span>
                        <input type="checkbox" className="checkbox border-slate-900"
                          checked={selectedGender === "female"}
                          onChange={() => oncheckboxChange("female")}
                        />
                    </label>
                </div>

            </div>
        )
    }

    export default GenderCheckbox;


    //STARTER CODE
        
    // const GenderCheckbox = () => {
    //     return(
    //         <div className="flex">
    //             <div className="form-control">
    //                 <label className={'label gap-2 cursor-pointer'}>
    //                     <span className="label-text">Male</span>
    //                     <input type="checkbox" className="checkbox border-slate-900"></input>
    //                 </label>
    //             </div>

    //             <div className="form-control">
    //             <label className={'label gap-2 cursor-pointer'}>
    //                     <span className="label-text">FeMale</span>
    //                     <input type="checkbox" className="checkbox border-slate-900"></input>
    //                 </label>
    //             </div>

    //         </div>
    //     )
    // }

    // export default GenderCheckbox;