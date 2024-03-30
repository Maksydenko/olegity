import { SwiperOptions } from "swiper/types";

export interface ICustomBreakpoint {
  slidesPerView: SwiperOptions["slidesPerView"];
  isBreakpoint: boolean | undefined;
}

interface IPropBreakpointsValue extends SwiperOptions {
  isBreakpoint?: boolean;
}

export interface IPropBreakpoints {
  [width: number]: IPropBreakpointsValue;
  [ratio: string]: IPropBreakpointsValue;
}
