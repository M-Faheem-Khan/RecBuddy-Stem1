import React from 'react'
import { MDBCard, MDBCol, MDBRow, MDBCardBody } from 'mdbreact';
import firebase from 'firebase';

class ProfilePage extends React.Component{
	state = {
		collection: null,
		profile: "This is profile"
	}

	componentWillMount(){
		// let centeral_auth = firebase.firestore().collection("Centeral-Authentication").get();
		// centeral_auth.then(snapshot => {
		// 	snapshot.docs.map((doc) => {
		// 		console.log(doc.data())
		// 	})
		// })
		// .catch((error) => {
		// 	console.log(error)
		// });
	}
	
	render(){
		return (
			<React.Fragment>
				<MDBRow className="justify-content-center">
					<MDBCol sm="12" md="6" lg="8" className="mb-5">
						<MDBCard>
							<MDBCardBody>
								{this.state.profile}
							</MDBCardBody>
						</MDBCard>
					</MDBCol>
    			</MDBRow>
    		</React.Fragment>
  		);
	}
}

export default ProfilePage;