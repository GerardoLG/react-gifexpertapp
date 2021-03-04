import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe("Tests on hook useFetchGifs", () => {
  test("should retuen initial state", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("Samurai X")
    );
    const { data, loading } = result.current;
    // console.log(data, loading);
    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test("should return an array of images and loading should be false", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("Samurai X")
    );
    await waitForNextUpdate();
    const { data, loading } = result.current;
    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  });
});
