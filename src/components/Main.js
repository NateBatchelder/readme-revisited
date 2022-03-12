import React from "react";
import { MDBProgress, MDBProgressBar } from "mdb-react-ui-kit";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn,
} from "mdb-react-ui-kit";

function Main() {
  return (
    <main>
        <section>
          <h1>Get Generating</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </section>
        <section>
          <MDBRow>
            <MDBCol sm="6">
              <MDBCard>
                <MDBCardBody>
                  <MDBCardTitle>Special title treatment</MDBCardTitle>
                  <MDBCardText>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </MDBCardText>
                  <MDBBtn href="#">Go somewhere</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol sm="6">
              <MDBCard>
                <MDBCardBody>
                  <MDBCardTitle>Special title treatment</MDBCardTitle>
                  <MDBCardText>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </MDBCardText>
                  <MDBBtn href="#">Go somewhere</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </section>
        <article>
          <MDBProgress>
            <MDBProgressBar
              className="w-75"
              valuenow={75}
              valuemin={0}
              valuemax={100}
            />
          </MDBProgress>
        </article>
    </main>
  );
}

export default Main;
