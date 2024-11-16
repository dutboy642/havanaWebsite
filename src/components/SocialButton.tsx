import FacebookLogin, { ReactFacebookFailureResponse, ReactFacebookLoginInfo } from 'react-facebook-login';

// interface FacebookResponse {
//     name: string;
//     email: string;
//     picture: {
//         data: {
//             url: string;
//         };
//     };
//     id: string;
// }

const FBButton = () => {
    const responseFacebook = (response: ReactFacebookLoginInfo | ReactFacebookFailureResponse) => {
        console.log(response);
    }
    return (
        <FacebookLogin
            appId="1088597931155576"
            autoLoad={false}
            fields="name,email,picture"
            onClick={() => { }}
            callback={responseFacebook} />
    )
}

export default FBButton;