import "./MedicineDetail.css"

import React, { useEffect, useState } from 'react'
import Medicinelist from "../../data/medicinelist.json"

function MedicineDetail() {
    const [medicines, setMedicines] = useState(Medicinelist);
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(()=>{
        const filteredMedicines=Medicinelist.filter((medicine)=>{
            let name=medicine.name.toLowerCase();
            const id= medicine.id.toString();
            const query =searchTerm.toLocaleLowerCase();
            return(name.includes(query)|| id.includes(query)
            )
        })
        setMedicines(filteredMedicines);
    },[searchTerm])
    return (
        <div>

            <h1 className="">Medicine</h1>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                    value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value) }} />
                <button class="btn btn-outline-info" type="submit">Search</button>
            </form>
            <div>
                {
                    medicines.length===0 ? <h2> Sorry,Medicine is not Available</h2>:null
                }
                {
                medicines.map((medicine, index) => {
                const {name}=medicine;
                return (
                <div className="list-container"><h4>{name}</h4></div>
                )
            })
        }
            </div>
        </div>
    )
}

export default MedicineDetail
