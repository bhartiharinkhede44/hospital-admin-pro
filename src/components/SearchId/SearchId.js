import "./SearchId.css"

export default function SearchId(){
    return(
        <><div className='search-div d-flex'>
        <div>
          <p className='search-bar pe-5'>Search Name/ID : &nbsp;<input
            type='text'
            placeholder='Search ID/Name'
            className='search'
            value={searchTerm}
            onChange={(e) => { setSearchTerm(e.target.value) }}
          /></p>
        </div>
      </div></>
    )
}