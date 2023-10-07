import Header from '../../components/Header/Header';
import SearchId from '../../components/SearchId/SearchId';
import Dashboard from '../../components/Sidebar/Sidebar';
import './PatientDetail.css';

export default function PatientDetail(){
    return(
        <>
        <div className='d-flex maincontainer'>
            <div>
                <Dashboard />
            </div>
            <div>
                <Header />
                <div className='top-header-on-dashboard'>
                        <div className='d-flex'>
                            <div>
                                <h3 className='title'>Patient Details</h3>
                            
                            </div>
                        </div>

                    </div>
                <SearchId />
            </div>
        </div>
        </>
    );
}