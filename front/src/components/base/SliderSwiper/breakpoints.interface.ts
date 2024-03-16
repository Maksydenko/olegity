import { SwiperOptions } from "swiper/types";

export interface IBreakpoint {
  isBreakpoint: boolean | undefined;
  slides: SwiperOptions["slidesPerView"];
}

interface IBreakpointsValue extends SwiperOptions {
  isBreakpoint?: boolean;
}

export interface IBreakpoints {
  [width: number]: IBreakpointsValue;
  [ratio: string]: IBreakpointsValue;
}
