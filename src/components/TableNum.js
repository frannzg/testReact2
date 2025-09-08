function TableNum({ email, email1, email2, password, password1, password2} ) {
    return(
        <div style={{ backgroundColor: "lightcyan", border: "2px solid gray", padding: "10px", margin: "10px" }}>
            <table>
                <tr>
                    <td>{email}</td>
                    <td>{email1}</td>
                    <td>{email2}</td>
                </tr>
                <tr>
                    <th>{password}</th>
                    <th>{password1}</th>
                    <th>{password2}</th>
                </tr>
            </table>
        </div>
    );
}

export default TableNum;