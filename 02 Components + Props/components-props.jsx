import React from "react";

/*------------------------------------------
Child Component
------------------------------------------*/

function EmployeeCard({ name, company }) {

    return (
        <div>
            <h2>{name}</h2>

            <p>{company}</p>

            <hr />
        </div>
    );

}

/*------------------------------------------
Parent Component
------------------------------------------*/

function App() {

    return (

        <>
            <h1>Employee List</h1>

            <EmployeeCard
                name="Chaitanya"
                company="APSS Media"
            />

            <EmployeeCard
                name="Rahul"
                company="Infosys"
            />

            <EmployeeCard
                name="Amit"
                company="TCS"
            />
        </>

    );

}

export default App;
