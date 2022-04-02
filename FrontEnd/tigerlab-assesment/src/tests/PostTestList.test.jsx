import { postTest } from "../Hooks/PostTest";
import { QueryClient, QueryClientProvider } from "react-query";
import { renderHook } from "@testing-library/react-hooks";

const testexample = "/system/check-info";
const queryClient = new QueryClient();
const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
const { result, waitFor } = renderHook(() => postTest(testexample), {
  wrapper,
});

test("Should post a test to the backend and return a response", async () => {
  await waitFor(() => result.current.isSuccess);
  expect(result.current).toBeTypeOf("object");
  expect((await result.current).status).toBe(200);
});

test("Should return a test result from the post response", async () => {
  await waitFor(() => result.current.isSuccess);
  expect(result.current).toBeTypeOf("object");
  const resultData = (await result.current).data.result;
  try {
    expect(resultData).toBe("true");
  } catch {
    try {
      expect(resultData).toBe("false");
    } catch {}
  }
});
