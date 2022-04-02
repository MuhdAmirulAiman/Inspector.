import { GetTestList } from "../Hooks/GetTestList";
import { QueryClient, QueryClientProvider } from "react-query";
import { renderHook } from "@testing-library/react-hooks";

const queryClient = new QueryClient();
const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

const { result, waitFor } = renderHook(() => GetTestList(), { wrapper });

test("Should get test list from backend", async () => {
  await waitFor(() => result.current.isSuccess);
  expect(result.current.data).toBeTypeOf("object");
  expect(result.current.data.status).toBe(200);
});
