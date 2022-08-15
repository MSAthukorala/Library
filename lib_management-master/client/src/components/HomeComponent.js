import React,{Component} from 'react';

class Home extends Component {

    constructor(props){
        super(props);
        this.state={
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
      }

render(){
    return(
        <div className="container mt-4 home text-center align-self-center">
        <br/><br/><br/>
            <div className="row mt-3 darkbg text-center justify-content-center">
            <h1 align="center"> Welcome to the Public Library - Piliyandala</h1>
            </div>
            <div className="row darkbg">

        <br/><br/>
            <h6><center>
            Public Library - Piliyandala  is the heart of the institute providing direct academic and research supports to all the residents in Piliyandala area.

            <p>It is an automated library in terms of records organisation and management of all its different sections, search and discovery, information retrieval and service delivery. The whole library operations run on integrated library management software from 2022.</p>

            <p>Any age category can enrol with the library. The system is still in progress with the payment gateway. hence for the enrolling purpose it is better to visit the library. </p>

            <p>Normal operations can be done through the system itself.</p>
            <br/><br/>
            
            <p><h5>Please Note that these times may be affected by the government holidays</h5></p>
            <br/><br/><br/>
            </center></h6>
            </div>
            <div className="row darkbg justify-content-center">
            <table>
    <tr> <th colspan="2"><h6>Time Table</h6></th> </tr>
    <tr> <td><h6>Opening Time</h6> </td> <td> <h6>9.00 A.M.</h6></td></tr>
    <tr> <td>Closing Time </td> <td> 6.00 P.M.</td></tr>
            </table>
                </div>
                <br/><br/>
                <br/><br/><br/>
            </div>
        );
}

}

export default Home;