declare module "reactjs-social-login" {
  export interface FacebookLoginAuthResponse {
    profile: {
      name: string;
      email: string;
      id: string;
    };
    token: string;
    status: string;
  }

  export interface FacebookLoginProps {
    appId: string;
    onSuccess: (response: FacebookLoginAuthResponse) => void;
    onFailure: (error: Error) => void;
    render: (props: { onClick: () => void }) => JSX.Element;
  }
 

  export const LoginSocialFacebook: React.FC<FacebookLoginProps>;
}


 export interface Product {
  title: string;
  image: string;
  image2: string;
  productCode: string;
  brand: string;
  price: number;
  originalPrice: number;
  discount: number;
  describe: string;
  variants: string[];
};