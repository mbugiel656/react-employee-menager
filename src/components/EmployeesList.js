import Employee from './Employee';
import FetchData from './../hooks/FetchData';
import Alert from './Alert';
import styles from '../themes/EmployeesList.module.css';


const EmployeesList = ({ colorTheme, alert, handleHideAlert }) => {
    const { data: employees, isLoading, error } = FetchData('https://my-json-server.typicode.com/mbugiel656/employee-json-server/employees');


    return (
        <section className={ colorTheme === "dark" ? `page-section ${styles.title_dark}` : `page-section ${styles.title_light}` }>
            <h3>Workers list</h3>
            <hr />
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {employees && (
                <table className="table table-hover employee-table">
                    <thead className={ colorTheme === 'dark' ? styles.tableHeader_dark : styles.tableHeader_light }>
                        <tr>
                            <th>ID</th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Position</th>
                            <th>Address</th>
                            <th>Phone number</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody className={ colorTheme === 'dark' ? styles.tableBody_dark : styles.tableBody_light }>
                        {employees.map(employee => (
                            <Employee 
                                key={employee.id}
                                id={employee.id}
                                first_name={employee.first_name}
                                last_name={employee.last_name}
                                address={employee.address}
                                phone_nr={employee.phone_nr}
                                email={employee.email}
                                position={employee.position}
                                employment_date={employee.employment_date}
                                contract_length={employee.contract_length}
                                seniority={employee.seniority}
                            >
                            </Employee>
                        ))}
                    </tbody>
                </table>
            )}
            {alert && <Alert type={alert.type} message={alert.message} handleHideAlert={handleHideAlert} />}
        </section>
    );
}

export default EmployeesList;