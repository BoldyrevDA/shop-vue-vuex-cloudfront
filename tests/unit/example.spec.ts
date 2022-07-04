import { shallowMount } from "@vue/test-utils";
import { VAppVersion } from "@/libs/version";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const ver = "0.0.1_alpha";
    const wrapper = shallowMount(VAppVersion, {
      propsData: { value: ver },
    });
    expect(wrapper.text()).toMatch(ver);
  });
});
