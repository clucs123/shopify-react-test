import { Heading, Page } from "@shopify/polaris";
import {AppBridgeContext} from '@shopify/app-bridge-react/context';
import {Redirect} from '@shopify/app-bridge/actions';

class MyComponent extends React.Component {
  static contextType = AppBridgeContext;

  redirectToProduct = () => {
    // The app instance is accessible through the context
    const redirect = Redirect.create(this.context);
    redirect.dispatch(
     Redirect.Action.APP,
     '/edit'
    );
  };

  render() {
    console.log('this.context',this.context); // Outputs the app instance
    return 'hi';  
  }

}


const Index = () => (
  <Page>
    <Heading>Shopify app with Node and React 🎉</Heading>
    <MyComponent />
  </Page>
);

export default Index;
