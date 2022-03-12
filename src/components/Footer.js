import React from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from "mdb-react-ui-kit";


function Footer() {
    return (
        <MDBCard alignment='center'>
            <MDBCardBody>
                <MDBCardTitle>&copy; Forked Lightning 2022</MDBCardTitle>
                <MDBCardText>Nate Batchelder</MDBCardText>
                <MDBBtn href="#">LinkedIn</MDBBtn>
            </MDBCardBody>
        </MDBCard>
    );
}

export default Footer;