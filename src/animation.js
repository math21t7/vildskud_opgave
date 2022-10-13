/* Import af Motion One bibliotek */
import { animate, stagger, inView, scroll, timeline } from "motion";

inView(".inview1", () => {
  animate(".inview1", { y: [2000, 0] }, { delay: 1, duration: 1 });
});

inView(".inview2", () => {
  animate(".inview2", { x: [-2000, 0] }, { delay: 0.5, duration: 1 });
});

inView(".inview3", () => {
  animate(".inview3", { x: [2000, 0] }, { delay: 0.5, duration: 1 });
});
