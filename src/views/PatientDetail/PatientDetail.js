import Header from '../../components/Header/Header';
import SearchId from '../../components/SearchId/SearchId';
import Dashboard from '../../components/Sidebar/Sidebar';
import './PatientDetail.css';

export default function PatientDetail(){
    return(
        <>
        <div className='d-flex'>
            <div>
                <Dashboard />
            </div>
            <div>
                <Header />
                <SearchId />
            </div>
        </div>
        </>
    );
}