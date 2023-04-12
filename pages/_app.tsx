import type { AppProps } from 'next/app'
import { Provider } from "react-redux";
import { store } from "~/store";

import '~/styles/global/reset.scss';
import '~/styles/global/template.scss';
import '~/styles/global/text.scss';
import '~/styles/global/transitions.scss';
import Default from "~/layouts/default";

export default function App({ Component, pageProps }: AppProps) {
  return(
          <Provider store={store}>
            <Default>
              <Component {...pageProps} />
            </Default>
          </Provider>
      );
};
