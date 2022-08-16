import { render } from '@testing-library/react-native';
import MarketScreen from "../../src/screens/main/market";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

describe('Testing render market screen', () => {
    const queryClient = new QueryClient();
    it('screen render correctly', () => {
        const {toJSON} = render(
            <QueryClientProvider client={queryClient}>
                <MarketScreen/>
            </QueryClientProvider>
        );
        expect(toJSON()).toMatchSnapshot();
    });
});
