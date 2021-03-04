import { getGifs } from "../../helpers/getGifs";

describe("Tests with getGifs Fetch", () => {
  test("should fetch 10 items", async () => {
    const gifs = await getGifs("One Punch");

    expect(gifs.length).toBe(10);
  });

  test("should fetch 0 items when no argument received", async () => {
    const gifs = await getGifs("");

    expect(gifs.length).toBe(0);
  });
});
